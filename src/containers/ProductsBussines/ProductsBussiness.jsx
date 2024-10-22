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

  //   console.log(total_count);

  useEffect(() => {
    dispatch(getProductsCategories());
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Products
        categoriesData={categoriesData}
        records={records}
        total_count={total_count}
      />
    </>
  );
};

export default ProductsBussiness;
