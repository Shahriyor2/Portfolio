import RotateCarts from "./RotateCarts";
import classes from "./solarsystem.module.scss";
import { motion } from "framer-motion";

const SolarSystem = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <motion.div
        key={"firstTab"}
        className="box"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: 0.3, delay: 0.4 }}
        animate="visible"
      >
        <div className={classes["solarsystem-container"]}>
          {/* заголовок */}
          <div className={classes["content"]}>
            <h1>СОЛНЕЧНАЯ СИСТЕМА</h1>

            <div className={classes["content__hr"]}>
              <hr />
            </div>

            <p>
              Мы создали нашу систему модульной, что позволяет нашим клиентам
              легко обслуживать систему и нам легко предоставлять лучший сервис
              после продажи.
            </p>
          </div>
        </div>
        <RotateCarts />
      </motion.div>
    </div>
  );
};

export default SolarSystem;
