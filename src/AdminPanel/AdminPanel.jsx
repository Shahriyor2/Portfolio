import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./adminpanel.module.scss";

const AdminPanel = ({
  value,
  categoryIdData,
  handleCategoryOnChange,
  handleCreateCategory,
  handleCreateProduct,
  handleDateOnChange,
  handleImageChange,
  handlePdfChange,
  handleDeleteProduct,
  deleteCategoryValue,
  handleDeleteCategoryOnChange,
  handleDeleteProductOnChange,
  handleDeleteCategory,
  deleteProductValue,
  productData,
  editProductValue,
  handleUpdateProduct,
  handleUpdateProductOnChange,
  handleUpdateImageChange,
  handleUpdatePdfChange,
}) => {
  const mapOption = categoryIdData?.map((item) => {
    return (
      <option value={item.id} key={item.id}>
        {item?.name}
      </option>
    );
  });

  return (
    <div className={classes["admin-container"]}>
      {/* content */}
      <div className={classes["content"]}>
        {/* создание категории */}
        <div className={classes["createCatageries"]}>
          <h1>Создание категории</h1>
          <div className={classes["createCatageries__content"]}>
            {/* name-category */}
            <div className={classes["createCatageries__content_name"]}>
              <p>Введите имя-категории:</p>
              <input
                type="text"
                name="name"
                value={value?.name}
                placeholder="имя-категории"
                onChange={handleCategoryOnChange}
              />
            </div>
          </div>
          <button onClick={() => handleCreateCategory(value)}>
            Создать категорию
          </button>
        </div>

        {/* создание продукта */}
        <div className={classes["createProduct"]}>
          <h1>Создание продукта</h1>
          <div className={classes["createProduct__content"]}>
            {/* name-product */}
            <div className={classes["createProduct__content_name"]}>
              <p>Введите заголовок-продукта:</p>
              <input
                type="text"
                name="productTitle"
                value={value?.productTitle}
                placeholder="заголовок-продукта"
                onChange={handleCategoryOnChange}
                className={classes["createProduct__content_name_firstInput"]}
              />
            </div>

            {/* description-product */}
            <div className={classes["createProduct__content_description"]}>
              <p>Введите описание-продукта:</p>
              <textarea
                type="text"
                name="description"
                value={value?.description}
                placeholder="описание-продукта"
                onChange={handleCategoryOnChange}
              />
            </div>

            {/* category_id-product */}
            <div className={classes["createProduct__content_categoryId"]}>
              <p>Введите категорию-продукта:</p>
              <select
                name="category_id"
                value={value?.category_id}
                onChange={handleCategoryOnChange}
              >
                {mapOption}
              </select>
            </div>

            {/* DatePicker для даты */}
            <div
              className="relative max-w-sm left-[340px];
    top-[527px] display-flex"
            >
              <p>Выберите дату: </p>
              <DatePicker
                selected={value?.created_at}
                onChange={(date) => handleDateOnChange(date)}
                placeholderText="Выберите дату"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                popperPlacement="bottom"
              />
            </div>
            <div className={classes["createProduct__content_image"]}>
              <p>Выберите изображение: </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className={classes["createProduct__content_image"]}>
              <p>Выберите файл PDF: </p>
              {/* <input type="file" accept=".pdf" onChange={handlePdfChange} /> */}
              <input type="file" onChange={handlePdfChange} />
            </div>
          </div>
          <button onClick={() => handleCreateProduct(value)}>
            Создать продукт
          </button>
        </div>

        {/* Удалить категорию */}
        <div
          style={{ border: "1px solid red", marginBottom: "45px" }}
          className={classes["createCatageries"]}
        >
          <h1 style={{ color: "red" }}>Удаление категории</h1>
          <div className={classes["createCatageries__content"]}>
            {/* name-category */}
            <div className={classes["createCatageries__content_name"]}>
              <p>Введите ID категории для удаления:</p>

              <select
                name="id"
                value={deleteCategoryValue?.id || ""}
                onChange={handleDeleteCategoryOnChange}
              >
                {mapOption}
              </select>
            </div>
          </div>
          <button
            className={classes["delate-btn"]}
            onClick={() => handleDeleteCategory(deleteCategoryValue)}
          >
            Удалить категории
          </button>
        </div>

        {/* Удаление продукта */}
        <div
          style={{ border: "1px solid red" }}
          className={classes["createCatageries"]}
        >
          <h1 style={{ color: "red" }}>Удаление продукта</h1>
          <div className={classes["createCatageries__content"]}>
            <div className={classes["createCatageries__content_name"]}>
              <p>Введите ID продукта для удаления:</p>

              <select
                name="id"
                onChange={handleDeleteProductOnChange}
                value={deleteProductValue.id || ""}
              >
                <option value="">Выберите продукт</option>
                {productData?.records?.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className={classes["delate-btn"]}
            onClick={() => handleDeleteProduct(deleteProductValue)}
          >
            Удалить продукт
          </button>
        </div>

        {/* Editing Product */}
        <div className={classes["createProduct"]}>
          <h1>Обновить продукт</h1>
          <div className={classes["createProduct__content"]}>
            {/* name-product */}
            <div className={classes["createProduct__content_name"]}>
              <p>Введите заголовок-продукта:</p>
              <input
                type="text"
                name="productTitle"
                value={editProductValue?.productTitle}
                placeholder="заголовок-продукта"
                onChange={handleUpdateProductOnChange}
                className={classes["createProduct__content_name_firstInput"]}
              />
            </div>

            {/* description-product */}
            <div className={classes["createProduct__content_description"]}>
              <p>Введите описание-продукта:</p>
              <textarea
                type="text"
                name="description"
                value={editProductValue?.description}
                placeholder="описание-продукта"
                onChange={handleUpdateProductOnChange}
              />
            </div>

            {console.log(editProductValue)}
            {/* category_id-product */}
            <div className={classes["createProduct__content_categoryId"]}>
              <p>Введите категорию-продукта:</p>
              <select
                name="category_id"
                value={editProductValue?.category_id}
                onChange={handleUpdateProductOnChange}
              >
                {mapOption}
              </select>
            </div>

            {/* DatePicker для даты */}
            {/* <div
              className="relative max-w-sm left-[340px];
    top-[527px] display-flex"
            >
              <p>Выберите дату: </p>
              <DatePicker
                name="created_at"
                selected={editProductValue?.created_at}
                onChange={(date) => setEditProductValue(date)}
                placeholderText="Выберите дату"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                popperPlacement="bottom"
              />
            </div> */}

            <div className={classes["createProduct__content_image"]}>
              <p>Выберите изображение: </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleUpdateImageChange}
              />
            </div>
            <div className={classes["createProduct__content_image"]}>
              <p>Выберите файл PDF: </p>
              {/* <input type="file" accept=".pdf" onChange={handlePdfChange} /> */}
              {/* <input type="file" onChange={setImageFileToUpdate} /> */}
              <input type="file" onChange={handleUpdatePdfChange} />
            </div>
          </div>
          <button onClick={() => handleUpdateProduct(editProductValue)}>
            Обновить продукт
          </button>
        </div>
      </div>
    </div>
  );
};

AdminPanel.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    created_at: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  categoryIdData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCategoryOnChange: PropTypes.func.isRequired,
  handleCreateCategory: PropTypes.func.isRequired,
  handleCreateProduct: PropTypes.func.isRequired,
  handleDateOnChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired, 
  handlePdfChange: PropTypes.func.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
  deleteCategoryValue: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  handleDeleteCategoryOnChange: PropTypes.func.isRequired,
  handleDeleteProductOnChange: PropTypes.func.isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  deleteProductValue: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  productData: PropTypes.shape({
    records: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default AdminPanel;
