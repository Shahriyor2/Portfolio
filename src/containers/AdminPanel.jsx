import axios from "axios";
import { useEffect, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";

const AdminPanelBusiness = () => {
  const [value, setValue] = useState({
    name: "",
    productId: "",
    productTitle: "",
    description: "",
    category_id: 1,
    created_at: "",
  });

  const [categoryIdData, setCategoryIdData] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://10.251.4.131/kurbonoff/getCategories"
        );
        setCategoryIdData(result.data.data);
        console.log(result.data.data);
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
    axios.post(
      `http://10.251.4.131/kurbonoff/createCategory?name=${params.name}`
    );
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleCreateProduct = async (params) => {
    const { productTitle, description, category_id, created_at } = params;

    const formData = new FormData();
    // formData.append("productTitle", productTitle);
    formData.append("title", productTitle);
    formData.append("description", description);
    formData.append("image_path", imageFile);
    formData.append("pdf_path", pdfFile);
    formData.append("category_id", category_id);
    formData.append("created_at", created_at);

    try {
      await axios.post(
        `http://10.251.4.131/kurbonoff/createProduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
    }
  };

  const props = {
    value,
    categoryIdData,
    handleCategoryOnChange,
    handleCreateCategory,
    handleCreateProduct,
    handleDateOnChange,
    handleImageChange,
    handlePdfChange,
    imageFile,
    pdfFile,
  };

  return (
    <>
      <AdminPanel {...props} />
    </>
  );
};

export default AdminPanelBusiness;
