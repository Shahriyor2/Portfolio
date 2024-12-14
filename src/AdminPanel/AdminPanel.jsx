import {
  Button,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  Upload,
} from "antd";
import "antd/dist/reset.css";
import PropTypes from "prop-types";
import classes from "./adminpanel.module.scss";
import { UploadOutlined } from "@ant-design/icons";

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
  //
  handleCreateCategoryOnChange,
}) => {
  const categoryOptions = categoryIdData?.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const productColumns = [
    {
      title: "Название продукта",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Категория",
      dataIndex: "category_id",
      key: "category_id",
      render: (categoryId) => {
        const category = categoryIdData.find((cat) => cat.id === categoryId);
        return category ? category.name : "N/A";
      },
    },
    {
      title: "Редактор",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            style={{ marginRight: 8 }}
            onClick={() => handleDeleteProduct(record)}
            danger
          >
            Delete
          </Button>
          {/* <Button onClick={() => handleUpdateProduct(record)} type="primary">
            Edit
          </Button> */}
        </>
      ),
    },
  ];

  const categoryColumns = [
    {
      title: "Название категории",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Редактор",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={() => handleDeleteCategory(record)} danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  {
    console.log("value: ", value);
  }

  return (
    <div className={classes["admin-container"]}>
      {/* Category Management */}
      <div className={classes["createCatageries"]} style={{ marginBottom: 40 }}>
        <h1>Создание категории</h1>
        <Form onFinish={() => handleCreateCategory(value)} layout="vertical">
          <Form.Item
            label="Название категории"
            rules={[{ required: true, message: "Please enter category name" }]}
          >
            <Input
              name="name"
              placeholder="Enter category name"
              value={value?.name}
              onChange={handleCategoryOnChange}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Create Category
          </Button>
        </Form>
      </div>

      {/* Product Management */}
      <div className={classes["createProduct"]} style={{ marginBottom: 80 }}>
        <h1>Создание продукта</h1>
        <Form onFinish={() => handleCreateProduct(value)} layout="vertical">
          <Form.Item
            label="Заголовок продукта"
            rules={[{ required: true, message: "Please enter product title" }]}
          >
            <Input
              name="productTitle"
              initialValue={value?.productTitle}
              placeholder="Enter product title"
              onChange={handleCategoryOnChange}
            />
          </Form.Item>

          <Form.Item
            label="Описание продукта"
            rules={[
              { required: true, message: "Please enter product description" },
            ]}
          >
            <Input.TextArea
              name="description"
              initialValue={value?.description}
              placeholder="Enter product description"
              onChange={handleCategoryOnChange}
            />
          </Form.Item>

          <Form.Item label="Категория" name="category_id">
            {console.log(value.category_id)}
            <Select
              value={value?.category_id}
              // onChange={handleCategoryOnChange}
              onChange={handleCreateCategoryOnChange}
              options={categoryOptions}
              placeholder="Select category"
            />
          </Form.Item>

          <Row>
            <Form.Item
              label="Дата создания"
              name="created_at"
              className={classes["form-item-spacing"]}
            >
              <DatePicker
                value={value?.created_at}
                onChange={handleDateOnChange}
                className="date-picker"
              />
            </Form.Item>

            <Form.Item
              label="Картина продукта"
              className={classes["form-item-spacing"]}
            >
              <Upload
                beforeUpload={handleImageChange}
                showUploadList={false}
                accept="image/*"
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              label="PDF - файл"
              className={classes["form-item-spacing"]}
            >
              <Upload
                beforeUpload={handlePdfChange}
                showUploadList={false}
                accept=".pdf"
              >
                <Button icon={<UploadOutlined />}>Upload PDF</Button>
              </Upload>
            </Form.Item>
          </Row>

          <Button type="primary" htmlType="submit">
            Create Product
          </Button>
        </Form>
      </div>

      {/* Tables */}
      <div className={classes["admin-tables"]}>
        <h2>Категория</h2>
        <Table
          columns={categoryColumns}
          dataSource={categoryIdData}
          rowKey="id"
        />

        <h2>Продукты</h2>
        <Table
          columns={productColumns}
          dataSource={productData?.records || []}
          rowKey="id"
        />
      </div>

      {/* Deleting Category */}
      {/* <div className={classes["deleteCategory"]}>
        <h1 style={{ color: "red" }}>Delete Category</h1>
        <Form
          layout="inline"
          onFinish={() => handleDeleteCategory(deleteCategoryValue)}
        >
          <Form.Item label="Select Category" name="id">
            <Select
              value={deleteCategoryValue?.id || ""}
              onChange={handleDeleteCategoryOnChange}
              options={categoryOptions}
            />
          </Form.Item>
          <Button type="danger" htmlType="submit">
            Delete Category
          </Button>
        </Form>
      </div> */}

      {/* Deleting Product */}
      {/* <div className={classes["deleteProduct"]}>
        <h1 style={{ color: "red" }}>Delete Product</h1>
        <Form
          layout="inline"
          onFinish={() => handleDeleteProduct(deleteProductValue)}
        >
          <Form.Item label="Select Product" name="id">
            <Select
              value={deleteProductValue?.id || ""}
              onChange={handleDeleteProductOnChange}
            >
              {productData?.records?.map((product) => (
                <Select.Option key={product.id} value={product.id}>
                  {product.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="danger" htmlType="submit">
            Delete Product
          </Button>
        </Form>
      </div> */}

      {/* Create Product */}
      {/* <div
        className={classes["editProduct"]}
        style={{ paddingBottom: 80, marginTop: 40 }}
      >
        <h1>Создание продукта</h1>
        <Form
          onFinish={() => handleUpdateProduct(editProductValue)}
          layout="vertical"
        >
          <Form.Item
            label="Product Title"
            name="productTitle"
            initialValue={editProductValue?.productTitle}
            rules={[{ required: true, message: "Please enter product title" }]}
          >
            <Input
              placeholder="Enter product title"
              onChange={handleUpdateProductOnChange}
            />
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            initialValue={editProductValue?.description}
            rules={[
              { required: true, message: "Please enter product description" },
            ]}
          >
            <Input.TextArea
              placeholder="Enter product description"
              onChange={handleUpdateProductOnChange}
            />
          </Form.Item>

          <Form.Item label="Category" name="category_id">
            <Select
              value={editProductValue?.category_id}
              onChange={handleUpdateProductOnChange}
              options={categoryOptions}
            />
          </Form.Item>

          <Form.Item label="Product Image">
            <Upload
              beforeUpload={handleUpdateImageChange}
              showUploadList={false}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="PDF File">
            <Upload
              beforeUpload={handleUpdatePdfChange}
              showUploadList={false}
              accept=".pdf"
            >
              <Button icon={<UploadOutlined />}>Upload PDF</Button>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Create Product
          </Button>
        </Form>
      </div> */}

      {/* Edit Product */}
      <div
        className={classes["editProduct"]}
        style={{ paddingBottom: 80, marginTop: 40 }}
      >
        <h1>
          Изменения продукта
          <span style={{ color: "gray" }}> (ручной ввод данных) </span>
        </h1>
        <Form
          onFinish={() => handleUpdateProduct(editProductValue)}
          layout="vertical"
        >
          <Form.Item
            label="Product Title"
            rules={[{ required: true, message: "Please enter product title" }]}
          >
            <Input
              name="productTitle"
              initialValue={editProductValue?.productTitle}
              placeholder="Enter product title"
              onChange={handleUpdateProductOnChange}
            />
          </Form.Item>

          <Form.Item
            label="Product Description"
            rules={[
              { required: true, message: "Please enter product description" },
            ]}
          >
            <Input.TextArea
              name="description"
              initialValue={editProductValue?.description}
              placeholder="Enter product description"
              onChange={handleUpdateProductOnChange}
            />
          </Form.Item>

          <Form.Item label="Category" name="category_id">
            <Select
              value={editProductValue?.category_id}
              onChange={handleUpdateProductOnChange}
              options={categoryOptions}
            />
          </Form.Item>

          {/* <Form.Item label="Product Image">
            <Upload
              beforeUpload={handleUpdateImageChange}
              showUploadList={false}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="PDF File">
            <Upload
              beforeUpload={handleUpdatePdfChange}
              showUploadList={false}
              accept=".pdf"
            >
              <Button icon={<UploadOutlined />}>Upload PDF</Button>
            </Upload>
          </Form.Item> */}

          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form>
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
