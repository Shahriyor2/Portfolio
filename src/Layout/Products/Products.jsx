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

const Products = ({ categoriesData, records, total_count }) => {
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

  return (
    <section className={classes["container"]}>
      {/* показ навигации */}
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

      <div className={classes["overlay"]}>
        <div
          className={`${classes["productsCategories-container"]} ${
            isActive ? classes["hide-ul"] : ""
          }`}
        >
          <div
            className={classes["minus-block"]}
            style={{ display: "flex", gap: 176 }}
          >
            <h1 onClick={() => dispatch(getProducts())}>Products</h1>
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
            {!records || records?.length === 0 ? (
              <p style={{ fontStyle: "italic" }}>
                К сожалению 😕 не удалось получить товары. Попробуйте повторить
                попытку позже.
              </p>
            ) : (
              records.map((item) => {
                return (
                  <Link
                    to={`/products/${item.id}`}
                    key={item.id}
                    className={classes["products-container__box_cart"]}
                  >
                    {console.log(item)}
                    <img
                      src={`http://10.251.4.131/kurbonoff/upload?filename=${item.image_path}`}
                      alt="image"
                    />
                    <p>{item?.title}</p>
                  </Link>
                );
              })
            )}
          </div>
          <p className={classes["products-container__total-count"]}>
            {!records || records?.length === 0 ? null : (
              <>
                Общее количество продуктов: <span>{total_count}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
