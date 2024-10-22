import { useDispatch } from "react-redux";
import { Home, Slash } from "lucide-react";
import { Link } from "react-router-dom";
import classes from "./products.module.scss";
import background from "/public/assets/about-us/background.jpg";
import { useState } from "react";
import { getProductsByCategory } from "../../store/slices/products";

const Products = ({ categoriesData, records, total_count }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch(); // Для использования dispatch

  const handleClassOnChange = () => {
    setIsActive(!isActive);
  };

  const handleCategoryClick = (categoryId) => {
    // Диспатчим запрос по категории при клике
    dispatch(getProductsByCategory(categoryId));
  };

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
          <h1>Products</h1>
        </div>
      </div>

      <div className={classes["overlay"]}>
        <div
          className={`${classes["productsCategories-container"]} ${
            isActive ? classes["hide-ul"] : ""
          }`}
        >
          <h1 onClick={handleClassOnChange}>Products</h1>
          {categoriesData?.map((item) => (
            <ul key={item.id}>
              <li
                onClick={() => handleCategoryClick(item.id)} // Обработчик клика
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </li>
            </ul>
          ))}
        </div>

        <div className={classes["products-container"]}>
          <h1>Products</h1>

          <div className={classes["products-container__box"]}>
            {records.map((item) => {
              return (
                <Link
                  to={`/products/${item.id}`}
                  key={item.id}
                  className={classes["products-container__box_cart"]}
                >
                  <img src={item.image_path} alt="image" />
                  <p>{item.description}</p>
                </Link>
              );
            })}
          </div>
          <p className={classes["products-container__total-count"]}>
            Общее количество продуктов: <span>{total_count}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
