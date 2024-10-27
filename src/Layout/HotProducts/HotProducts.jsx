import classes from "./hotproducts.module.scss";
import Products from "./Products";
import { motion } from "framer-motion";

const HotProducts = () => {
  return (
    <>
      <motion.div
        key={"firstTab"}
        className="box"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: 0.3, delay: 0.4 }}
        animate="visible"
      >
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
      </motion.div>
    </>
  );
};

export default HotProducts;
