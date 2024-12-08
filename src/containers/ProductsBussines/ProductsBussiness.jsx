import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../Layout/Products/Products";
import {
  getProducts,
  getProductsCategories,
} from "../../store/slices/products";

const ProductsBussiness = () => {
  const dispatch = useDispatch();

  const categoriesData = useSelector(({ products }) => products.categoriesData);
  const records = useSelector(({ products }) => products.records);
  const total_count = useSelector(({ products }) => products.total_count);
  const isLoading = useSelector(({ products }) => products.isLoading);

  useEffect(() => {
    dispatch(getProductsCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Products
        categoriesData={categoriesData}
        records={records}
        total_count={total_count}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProductsBussiness;
