import axios from "axios";
import { useEffect, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";

const AdminPanelBusiness = () => {
  const [value, setValue] = useState({
    name: "",
    productId: "",
    productTitle: "",
    description: "",
    image_path: "",
    pdf_path: "",
    category_id: 1,
    created_at: "",
  });

  const [categoryIdData, setCategoryIdData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://10.251.4.131/kurbonoff/getCategories"
        );

        setCategoryIdData(result.data.data);
      } catch (error) {
        setCategoryIdData("Пока нет данных!");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateOnChange = (date) => {
    setValue((prev) => ({ ...prev, created_at: date }));
  };

  const handleCreateCategory = (params) => {
    // axios.post("http://10.251.4.131/kurbonoff/private/createCategory", {
    //   id: params.id,
    //   name: params.name,
    // });
    axios.post(
      `http://10.251.4.131/kurbonoff/createCategory?name=${params.name}`
    );
  };

  const handleCreateProduct = (params) => {
    const {
      productTitle,
      description,
      image_path,
      pdf_path,
      category_id,
      created_at,
    } = params;

    axios.post(`http://10.251.4.131/kurbonoff/private/createProduct`, {
      productTitle: productTitle,
      description: description,
      image_path: image_path,
      pdf_path: pdf_path,
      category_id: category_id,
      created_at: created_at,
    });
  };

  const props = {
    value,
    categoryIdData,
    handleCategoryOnChange,
    handleCreateCategory,
    handleCreateProduct,
    handleDateOnChange,
  };

  return (
    <>
      <AdminPanel {...props} />;
    </>
  );
};

export default AdminPanelBusiness;
