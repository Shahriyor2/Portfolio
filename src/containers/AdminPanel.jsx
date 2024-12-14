// import axios from "axios";
// import { useEffect, useState } from "react";
// import AdminPanel from "../AdminPanel/AdminPanel";
// import { message } from "antd";

// const AdminPanelBusiness = () => {
//   //
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const result = await axios.get(
//           "http://10.251.4.131/kurbonoff/getProducts"
//         );
//         setProductData(result.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   //
//   const [value, setValue] = useState({
//     id: null,
//     name: "",
//     productId: "",
//     productTitle: "",
//     description: "",
//     category_id: 1,
//     created_at: "",
//   });

//   const [categoryIdData, setCategoryIdData] = useState([]);

//   // useState для удаления
//   const [deleteCategoryValue, setDeleteCategoryValue] = useState({
//     category_id: null,
//   });

//   const [deleteProductValue, setDeleteProductValue] = useState({
//     id: null,
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);

//   const handleDeleteProductOnChange = (e) => {
//     const { name, value } = e.target;
//     setDeleteProductValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   //   // изменение useState категории
//   const handleDeleteCategoryOnChange = (e) => {
//     const { name, value } = e.target;
//     setDeleteCategoryValue((prev) => ({ ...prev, [name]: value }));
//   };

//   // Новый стейт для редактируемого продукта
//   const [editProductValue, setEditProductValue] = useState({
//     id: null,
//     productTitle: "",
//     description: "",
//     category_id: 1,
//     created_at: "",
//   });

//   // Новый стейт для редактируемого изображения
//   const [imageFileToUpdate, setImageFileToUpdate] = useState(null);

//   // Новый стейт для редактируемого PDF
//   const [pdfFileToUpdate, setPdfFileToUpdate] = useState(null);

//   const handleUpdateImageChange = (e) => {
//     setImageFileToUpdate(e.target.files[0]);
//   };

//   const handleUpdatePdfChange = (e) => {
//     setPdfFileToUpdate(e.target.files[0]);
//   };

//   // изменение useState категории
//   const handleUpdateProductOnChange = (e) => {
//     const { name, value } = e.target;
//     setEditProductValue((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(
//           "http://10.251.4.131/kurbonoff/getCategories"
//         );
//         setCategoryIdData(result.data.data);
//       } catch (error) {
//         setCategoryIdData("Пока нет данных!");
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCategoryOnChange = (e) => {
//     const { value } = e.target;
//     setValue((prev) => ({ ...prev, name: value }));
//   };

//   const handleDateOnChange = (date) => {
//     setValue((prev) => ({ ...prev, created_at: date }));
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handlePdfChange = (e) => {
//     setPdfFile(e.target.files[0]);
//   };

//   // Новый обработчик для изменения продукта
//   const handleUpdateProduct = async (params) => {
//     const { id, productTitle, description, category_id } = params;

//     const formData = new FormData();
//     formData.append("id", id);
//     formData.append("title", productTitle);
//     formData.append("description", description);
//     formData.append("image", imageFileToUpdate);
//     formData.append("pdf", pdfFileToUpdate);
//     formData.append("category_id", category_id);
//     // formData.append("created_at", created_at);

//     // Проверка на пустые поля
//     if (!productTitle || !description || !category_id) {
//       message.info("Одно или несколько полей пусты!");
//       return;
//     }

//     try {
//       await axios.put("http://  /kurbonoff/updateProduct", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       message.success("Продукт успешно обновлён!");

//       setEditProductValue({
//         id: null,
//         productTitle: "",
//         description: "",
//         category_id: 1,
//         created_at: "",
//       });
//       setImageFileToUpdate(null);
//       setPdfFileToUpdate(null);
//     } catch (error) {
//       console.error("Ошибка при обновлении продукта:", error);
//     }
//   };

//   // создание категории
//   const handleCreateCategory = async (params) => {
//     if (params.name === "" || !params) {
//       message.info("Данные категории пустые!");
//       return;
//     }

//     try {
//       await axios.post(
//         `http://10.251.4.131/kurbonoff/createCategory?name=${params.name}`
//       );
//       await message.success("Категория успешно создана!");
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // создание продукта
//   const handleCreateProduct = async (params) => {
//     const { productTitle, description, category_id, created_at } = params;

//     const formData = new FormData();
//     formData.append("title", productTitle);
//     formData.append("description", description);
//     formData.append("image", imageFile);
//     formData.append("pdf", pdfFile);
//     formData.append("category_id", category_id);
//     formData.append("created_at", created_at);

//     if (
//       !productTitle ||
//       !description ||
//       !category_id ||
//       !created_at ||
//       !imageFile ||
//       !pdfFile
//     ) {
//       message.info("Одно или несколько полей пусты!");
//       return;
//     }

//     try {
//       await axios.post(
//         `http://10.251.4.131/kurbonoff/createProduct`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setValue({
//         id: null,
//         name: "",
//         productId: "",
//         productTitle: "",
//         description: "",
//         category_id: 1,
//         created_at: "",
//       });
//       setImageFile(null);
//       setPdfFile(null);

//       message.success("Продукт успешно создан!");
//     } catch (error) {
//       console.error("Ошибка при создании продукта:", error);
//     }
//   };

//   // удаление категории
//   const handleDeleteCategory = async (categoryData) => {
//     try {
//       await axios.delete(
//         `http://10.251.4.131/kurbonoff/deleteCategory?category_id=${categoryData.id}`
//       );
//       message.success("Категория успешно удалена");
//     } catch (error) {
//       console.log("Ошибка при удалении категории:", error);
//     }
//   };

//   //удаление продукта
//   const handleDeleteProduct = async (params) => {
//     if (params.id === 0 || params.id === undefined || params.id === null) {
//       message.info("Заполните или введите правильное значение!");
//       return;
//     }

//     try {
//       await axios.delete(
//         `http://10.251.4.131/kurbonoff/deleteProduct?id=${params.id}`
//       );
//       setDeleteProductValue({ id: 0 });
//       message.success("Продукт успешно удалён!");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const props = {
//     value,
//     categoryIdData,
//     handleCategoryOnChange,
//     handleCreateCategory,
//     handleCreateProduct,
//     handleDateOnChange,
//     handleImageChange,
//     handlePdfChange,
//     imageFile,
//     pdfFile,
//     handleDeleteProduct,
//     deleteCategoryValue,
//     handleDeleteCategoryOnChange,
//     //
//     deleteProductValue,
//     handleDeleteProductOnChange,
//     //
//     handleDeleteCategory,
//     // Редактирование
//     editProductValue,
//     setEditProductValue,
//     handleUpdateProductOnChange,
//     setImageFileToUpdate,
//     setPdfFileToUpdate,
//     handleUpdateProduct,
//     handleUpdateImageChange,
//     handleUpdatePdfChange,

//     //
//     productData,
//   };

//   return (
//     <>
//       <AdminPanel {...props} />
//     </>
//   );
// };

// export default AdminPanelBusiness;

import axios from "axios";
import { useEffect, useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import { message } from "antd";

const API_BASE_URL = "http://10.251.4.131/kurbonoff"; // Базовый URL

// Универсальная функция для отправки запросов
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

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
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

      message.success("Продукт успешно создан!");
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
    formData.append("image", imageFileToUpdate);
    formData.append("pdf", pdfFileToUpdate);
    formData.append("category_id", category_id);

    if (!productTitle || !description || !category_id) {
      message.info("Одно или несколько полей пусты!");
      return;
    }

    try {
      await apiRequest("PUT", "/updateProduct", formData, {
        "Content-Type": "multipart/form-data",
      });

      message.success("Продукт успешно обновлён!");
      setEditProductValue({
        id: null,
        productTitle: "",
        description: "",
        category_id: 1,
        created_at: "",
      });
      setImageFileToUpdate(null);
      setPdfFileToUpdate(null);
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
      message.success("Категория успешно удалена");
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
