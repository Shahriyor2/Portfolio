import classes from "./moreproduct.module.scss";
import Products from "./Products";

const MoreProducts = () => {
  return (
    <>
      <div className={classes["moreproducts-container"]}>
        {/* заголовок */}
        <div className={classes["moreproducts-content"]}>
          <h1>MORE PRODUCTS</h1>

          <div className={classes["moreproducts-content__hr"]}>
            <hr />
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default MoreProducts;
