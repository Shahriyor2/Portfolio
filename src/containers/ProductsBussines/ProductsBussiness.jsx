import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../Layout/Products/Products";
import {
  getProducts,
  getProductsCategories,
} from "../../store/slices/products";
import { Button, Typography } from "antd";

const ProductsBussiness = () => {
  const dispatch = useDispatch();

  const categoriesData = useSelector(({ products }) => products.categoriesData);
  const records = useSelector(({ products }) => products.records);
  const total_count = useSelector(({ products }) => products.total_count);
  const isLoading = useSelector(({ products }) => products.isLoading);
  const total_pages = useSelector(({ products }) => products.total_pages);
  const perpage = useSelector(({ products }) => products.perpage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProductsCategories());
    dispatch(getProducts({ page: currentPage }));

    window.scroll({ top: 70, behavior: "smooth" });
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Products
        categoriesData={categoriesData}
        records={records}
        total_count={total_count}
        isLoading={isLoading}
        perpage={perpage}
      />
      {/* Пагинация */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <div>
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ marginRight: 8 }}
          >
            Назад
          </Button>
          <span>
            Страница <Typography.Text strong>{currentPage}</Typography.Text> из
            <Typography.Text strong style={{ marginLeft: 5 }}>
              {total_pages}
            </Typography.Text>
          </span>

          <Button
            disabled={currentPage === total_pages}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ marginLeft: 8 }}
          >
            Вперед
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductsBussiness;
