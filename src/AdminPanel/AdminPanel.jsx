import {
  Button,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  Upload,
  Tabs,
} from "antd";
import "antd/dist/reset.css";
import PropTypes from "prop-types";
import classes from "./adminpanel.module.scss";
import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

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
  handleCreateCategoryOnChange,
  handleUpdateProductId,
  handleUpdateProducCategorytId,
}) => {
  const categoryOptions = categoryIdData?.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const productOptions = productData.records?.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const productColumns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
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
        <Button
          style={{ marginRight: 8 }}
          onClick={() => handleDeleteProduct(record)}
          danger
        >
          Delete
        </Button>
      ),
    },
  ];

  const categoryColumns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Название категории",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Редактор",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handleDeleteCategory(record)} danger>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className={classes["admin-container"]}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Создание категории" key="1">
          <div
            className={classes["createCatageries"]}
            style={{ marginBottom: 40 }}
          >
            <h1>Создание категории</h1>
            <Form
              onFinish={() => handleCreateCategory(value)}
              layout="vertical"
            >
              <Form.Item
                label="Название категории"
                rules={[
                  { required: true, message: "Please enter category name" },
                ]}
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
        </TabPane>

        <TabPane tab="Создание продукта" key="2">
          <div
            className={classes["createProduct"]}
            style={{ marginBottom: 80 }}
          >
            <h1>Создание продукта</h1>
            <Form onFinish={() => handleCreateProduct(value)} layout="vertical">
              <Form.Item
                label="Заголовок продукта"
                rules={[
                  { required: true, message: "Please enter product title" },
                ]}
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
                  {
                    required: true,
                    message: "Please enter product description",
                  },
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
                <Select
                  value={value?.category_id}
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
                    onChange={handleImageChange}
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
                    onChange={handlePdfChange}
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
        </TabPane>

        <TabPane tab="Изменения продукта" key="3">
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
              <Form.Item label="Id" name="id">
                <Select
                  value={editProductValue?.id}
                  onChange={handleUpdateProductId}
                  options={productOptions}
                  placeholder="Выберите продукт"
                />
              </Form.Item>
              <Form.Item
                label="Заголовок продукта"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста введите заголовок продукта",
                  },
                ]}
              >
                <Input
                  name="productTitle"
                  initialValue={editProductValue?.productTitle}
                  placeholder="Введите заголовок продукта"
                  onChange={handleUpdateProductOnChange}
                />
              </Form.Item>

              <Form.Item
                label="Описание продукта"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста введите описание продукта",
                  },
                ]}
              >
                <Input.TextArea
                  name="description"
                  initialValue={editProductValue?.description}
                  placeholder="Введите описание продукта"
                  onChange={handleUpdateProductOnChange}
                />
              </Form.Item>

              <Form.Item label="Категория" name="category_id">
                <Select
                  value={editProductValue?.category_id}
                  onChange={handleUpdateProducCategorytId}
                  options={categoryOptions}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Update Product
              </Button>
            </Form>
          </div>
        </TabPane>

        <TabPane tab="Таблицы" key="4">
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
        </TabPane>
      </Tabs>
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
