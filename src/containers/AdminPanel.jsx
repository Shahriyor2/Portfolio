import axios from "axios";
import { useEffect, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import { message } from "antd";
import { useSelector } from "react-redux";

const API_BASE_URL = "http://10.251.4.131/kurbonoff"; // Базовый URL

const apiRequest = async (method, url, data = null, headers = {}) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${url}`,
      data,
      headers: { ...headers },
    });
    return response.data;
  } catch (error) {
    console.error(`Ошибка при выполнении запроса: ${method} ${url}`, error);
    throw error;
  }
};

const AdminPanelBusiness = () => {
  const [productData, setProductData] = useState([]);
  const [categoryIdData, setCategoryIdData] = useState([]);
  const [value, setValue] = useState({
    id: null,
    name: "",
    productId: "",
    productTitle: "",
    description: "",
    category_id: 1,
    created_at: "",
  });
  const [deleteCategoryValue, setDeleteCategoryValue] = useState({
    category_id: null,
  });
  const [deleteProductValue, setDeleteProductValue] = useState({
    id: null,
  });
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [editProductValue, setEditProductValue] = useState({
    id: null,
    productTitle: "",
    description: "",
    category_id: 1,
    created_at: "",
  });
  const [imageFileToUpdate, setImageFileToUpdate] = useState(null);
  const [pdfFileToUpdate, setPdfFileToUpdate] = useState(null);

  // Получение данных продуктов
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiRequest("GET", "/getProducts");
        setProductData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  // Получение данных категорий
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiRequest("GET", "/getCategories");
        setCategoryIdData(data.data);
      } catch (error) {
        setCategoryIdData("Пока нет данных!");
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  // Обработчики изменений инпутов
  const handleDeleteProductOnChange = (e) => {
    const { name, value } = e.target;
    setDeleteProductValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteCategoryOnChange = (e) => {
    const { name, value } = e.target;
    setDeleteCategoryValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProductOnChange = (e) => {
    const { name, value } = e.target;
    setEditProductValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProductId = (id_value) => {
    setEditProductValue((prev) => ({ ...prev, id: id_value }));
  };

  const handleUpdateProducCategorytId = (category_id) => {
    setEditProductValue((prev) => ({ ...prev, category_id: category_id }));
  };

  const handleCategoryOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateCategoryOnChange = (category_id) => {
    setValue((prev) => ({ ...prev, category_id: category_id }));
  };

  const handleDateOnChange = (date) => {
    setValue((prev) => ({ ...prev, created_at: date }));
  };

  const handleImageChange = (info) => {
    setImageFile(info.file.originFileObj);
  };

  useEffect(() => {
    if (imageFile) {
      message.info("Картина зугружена!");
    } else {
      message.loading("Загружается...");
    }
  }, [imageFile]);

  useEffect(() => {
    if (pdfFile) {
      message.info("PDF-файл зугружен!");
    } else {
      message.loading("Загружается...");
    }
  }, [pdfFile]);

  const handlePdfChange = (info) => {
    setPdfFile(info.file.originFileObj);
  };

  const handleUpdateImageChange = (e) => {
    setImageFileToUpdate(e.target.files[0]);
  };

  const handleUpdatePdfChange = (e) => {
    setPdfFileToUpdate(e.target.files[0]);
  };

  // Создание категории
  const handleCreateCategory = async (params) => {
    if (params.name === "" || !params) {
      message.info("Данные категории пустые!");
      return;
    }

    try {
      await apiRequest("POST", `/createCategory?name=${params.name}`);
      message.success("Категория успешно создана!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Создание продукта
  const handleCreateProduct = async (params) => {
    const { productTitle, description, category_id, created_at } = params;

    const formData = new FormData();
    formData.append("title", productTitle);
    formData.append("description", description);
    formData.append("image", imageFile);
    formData.append("pdf", pdfFile);
    formData.append("category_id", category_id);
    formData.append("created_at", created_at);

    if (
      !productTitle ||
      !description ||
      !category_id ||
      !created_at ||
      !imageFile ||
      !pdfFile
    ) {
      message.info("Одно или несколько полей пусты!");
      return;
    }

    try {
      await apiRequest("POST", "/createProduct", formData, {
        "Content-Type": "multipart/form-data",
      });

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

      await message.success("Продукт успешно создан!");
      window.location.reload();
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
    }
  };

  // Обновление продукта
  const handleUpdateProduct = async (params) => {
    const { id, productTitle, description, category_id } = params;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", productTitle);
    formData.append("description", description);
    // formData.append("image", imageFileToUpdate);
    // formData.append("pdf", pdfFileToUpdate);
    formData.append("category_id", category_id);

    if (!productTitle || !description || !category_id) {
      message.info("Одно или несколько полей пусты!");
      return;
    }

    try {
      await apiRequest("PUT", "/updateProduct", formData, {
        "Content-Type": "multipart/form-data",
      });

      await message.success("Продукт успешно обновлён!");
      setEditProductValue({
        id: null,
        productTitle: "",
        description: "",
        category_id: 1,
        created_at: "",
      });
      // setImageFileToUpdate(null);
      // setPdfFileToUpdate(null);
      window.location.reload();
    } catch (error) {
      console.error("Ошибка при обновлении продукта:", error);
    }
  };

  // Удаление категории
  const handleDeleteCategory = async (categoryData) => {
    try {
      await apiRequest(
        "DELETE",
        `/deleteCategory?category_id=${categoryData.id}`
      );
      await message.success("Категория успешно удалена");
      window.location.reload();
    } catch (error) {
      console.log("Ошибка при удалении категории:", error);
    }
  };

  // Удаление продукта
  const handleDeleteProduct = async (params) => {
    if (params.id === 0 || params.id === undefined || params.id === null) {
      message.info("Заполните или введите правильное значение!");
      return;
    }

    try {
      await apiRequest("DELETE", `/deleteProduct?id=${params.id}`);
      setDeleteProductValue({ id: 0 });
      message.success("Продукт успешно удалён!");
    } catch (error) {
      console.log(error);
    }
  };

  const props = {
    value,
    categoryIdData,
    handleCategoryOnChange,
    handleCreateCategoryOnChange,
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
    deleteProductValue,
    handleDeleteProductOnChange,
    handleDeleteCategory,
    editProductValue,
    setEditProductValue,
    handleUpdateProductOnChange,
    handleUpdateProducCategorytId,
    handleUpdateProductId,
    setImageFileToUpdate,
    setPdfFileToUpdate,
    handleUpdateProduct,
    handleUpdateImageChange,
    handleUpdatePdfChange,
    productData,
  };

  return <AdminPanel {...props} />;
};

export default AdminPanelBusiness;
