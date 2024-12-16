import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../Layout/Products/Products";
import {
  getProducts,
  getProductsCategories,
} from "../../store/slices/products";
import { Button } from "antd";

const ProductsBussiness = () => {
  const dispatch = useDispatch();

  const categoriesData = useSelector(({ products }) => products.categoriesData);
  const records = useSelector(({ products }) => products.records);
  const total_count = useSelector(({ products }) => products.total_count);
  const isLoading = useSelector(({ products }) => products.isLoading);
  const total_pages = useSelector(({ products }) => products.total_pages);

  const [currentPage, setCurrentPage] = useState(1); // Состояние текущей страницы

  useEffect(() => {
    dispatch(getProductsCategories());
    dispatch(getProducts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= total_pages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Products
        categoriesData={categoriesData}
        records={records}
        total_count={total_count}
        isLoading={isLoading}
      />
      {/* Пагинация */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          <span>{`Страница ${currentPage} из ${total_pages}`}</span>
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
