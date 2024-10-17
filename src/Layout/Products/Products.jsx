import { Home, Slash } from "lucide-react";
import { Link } from "react-router-dom";
import classes from "./products.module.scss";
import background from "/public/assets/about-us/background.jpg";
import { useState } from "react";

const Products = ({ categoriesData }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClassOnChange = () => {
    setIsActive(!isActive);
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
              <li>{item.name}</li>
            </ul>
          ))}
        </div>

        <div className={classes["products-container"]}>
          <h1>Products</h1>
        </div>
      </div>
    </section>
  );
};

export default Products;
