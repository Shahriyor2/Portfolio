import { Home, Minus, Plus, Slash } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../../store/slices/products";
import classes from "./products.module.scss";
import background from "/public/assets/about-us/background.jpg";
import ContentLoader from "react-content-loader";

const Products = ({ categoriesData, records, isLoading, perpage }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleClassOnChange = () => {
    setIsActive(!isActive);
  };

  const handleCategoryClick = (categoryId) => {
    dispatch(getProductsByCategory(categoryId));
  };

  useEffect(() => {
    document.title = "Продукты";
  }, []);

  const renderSkeletons = () => (
    <div className={classes.skeletonContainer}>
      {new Array(5).fill(null).map((_, index) => (
        <ContentLoader
          key={index}
          speed={2}
          width={198}
          height={279}
          viewBox="0 0 198 279"
          backgroundColor="#e0e0e0"
          foregroundColor="#ecebeb"
        >
          <rect x="27" y="22" rx="12" ry="12" width="198" height="279" />
        </ContentLoader>
      ))}
    </div>
  );

  return (
    <section className={classes.container}>
      {/* Показ навигации */}
      <div className={classes["bread-background"]}>
        <img height={205} src={background} alt="" />
        <div className={classes["bread-background__title"]}>
          <Link to="/">
            <Home />
            <h1>Home</h1>
          </Link>
          <span>
            <Slash />
          </span>
          <Link to="/products">
            <h1>Products</h1>
          </Link>
        </div>
      </div>

      <div className={classes.overlay}>
        <div
          className={`${classes["productsCategories-container"]} ${
            isActive ? classes["hide-ul"] : ""
          }`}
        >
          <div
            className={classes["minus-block"]}
            style={{ display: "flex", gap: "176px" }}
          >
            <h1 onClick={() => dispatch(getProducts(1))}>Products</h1>
            {isActive ? (
              <Minus onClick={handleClassOnChange} />
            ) : (
              <Plus onClick={handleClassOnChange} />
            )}
          </div>

          <div className={classes["ul-block"]}>
            {categoriesData?.map((item) => (
              <ul key={item.id}>
                <li
                  onClick={() => handleCategoryClick(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className={classes["products-container"]}>
          <h1>Products</h1>

          <div className={classes["products-container__box"]}>
            {isLoading ? (
              renderSkeletons()
            ) : !records || records?.length === 0 ? (
              <p style={{ fontStyle: "italic" }}>
                К сожалению 😕 не удалось получить товары. Попробуйте повторить
                попытку позже.
              </p>
            ) : (
              records?.map((item) => (
                <Link
                  to={`/products/${item.id}`}
                  key={item.id}
                  className={classes["products-container__box_cart"]}
                >
                  <img
                    src={`http://10.251.4.131/kurbonoff/upload?filename=${item.image_path}`}
                    alt="image"
                  />
                  <p>{item?.title}</p>
                </Link>
              ))
            )}
          </div>

          <div className={classes["products-container__total-count"]}>
            <p>
              {records && records.length > 0 && (
                <>
                  Общее количество продуктов: <span>{perpage}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
