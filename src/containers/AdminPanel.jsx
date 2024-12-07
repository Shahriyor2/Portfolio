import axios from "axios";
import { useEffect, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";

const AdminPanelBusiness = () => {
  const [value, setValue] = useState({
    id: null,
    name: "",
    productId: "",
    productTitle: "",
    description: "",
    category_id: 1,
    created_at: "",
  });

  const [categoryIdData, setCategoryIdData] = useState([]);

  // useState для удаления
  const [deleteCategoryValue, setDeleteCategoryValue] = useState({
    id: null,
  });

  const [deleteProductValue, setDeleteProductValue] = useState({
    id: null,
  });

  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

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

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  // изменение useState категории
  const handleDeleteCategoryOnChange = (e) => {
    const { name, value } = e.target;
    setDeleteCategoryValue((prev) => ({ ...prev, [name]: value }));
  };

  // изменение useState продукта-удаления
  const handleDeleteProductOnChange = (e) => {
    const { name, value } = e.target;
    setDeleteProductValue((prev) => ({ ...prev, [name]: value }));
  };

  // создание категории
  const handleCreateCategory = (params) => {
    if (params.name === "" || !params) {
      alert("Данные категории пустые!");
      return;
    }

    try {
      axios.post(
        `http://10.251.4.131/kurbonoff/createCategory?name=${params.name}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // создание продукта
  const handleCreateProduct = async (params) => {
    const { productTitle, description, category_id, created_at } = params;

    const formData = new FormData();
    formData.append("title", productTitle);
    formData.append("description", description);
    formData.append("image", imageFile);
    formData.append("pdf", pdfFile);
    formData.append("category_id", category_id);
    formData.append("created_at", created_at);

    // Проверка на пустые поля
    if (
      !productTitle ||
      !description ||
      !category_id ||
      !created_at ||
      !imageFile ||
      !pdfFile
    ) {
      alert("Одно или несколько полей пусты!");
      return;
    }

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

      setValue({
        id: null,
        name: "",
        productId: "",
        productTitle: "",
        description: "",
        category_id: 1,
        created_at: "",
      });
      setImageFile(null);
      setPdfFile(null);

      alert("Продукт успешно создан!");
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
    }
  };

  // удаление категории
  const handleDeleteCategory = async (params) => {
    try {
      await axios.delete(
        `http://10.251.4.131/kurbonoff/deleteCategory?id=${params.id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  //удаление продукта
  const handleDeleteProduct = async (params) => {
    try {
      await axios.delete(
        `http://10.251.4.131/kurbonoff/deleteProduct?id=${params.id}`
      );
    } catch (error) {
      console.log(error);
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
    handleDeleteProduct,
    deleteCategoryValue,
    handleDeleteCategoryOnChange,
    //
    deleteProductValue,
    handleDeleteProductOnChange,
    //
    handleDeleteCategory,
  };

  return (
    <>
      <AdminPanel {...props} />
    </>
  );
};

export default AdminPanelBusiness;
