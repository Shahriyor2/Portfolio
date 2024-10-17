import classes from "./hotproducts.module.scss";
import Products from "./Products";

const HotProducts = () => {
  return (
    <>
      <div className={classes["hotproducts-container"]}>
        {/* заголовок */}
        <div className={classes["hotproducts-content"]}>
          <h1>HOT PRODUCTS</h1>

          <div className={classes["hotproducts-content__hr"]}>
            <hr />
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default HotProducts;
