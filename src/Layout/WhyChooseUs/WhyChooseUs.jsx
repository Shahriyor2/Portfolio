import BoxCard from "./BoxCard";
import classes from "./whychooseus.module.scss";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <>
      <div className={classes["whychooseus-container"]}>
        {/* Заголовок */}
        <motion.div
          key={"firstTab"}
          className="box"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", duration: 0.3, delay: 0.4 }}
          animate="visible"
        >
          <div className={classes["whychooseus-content"]}>
            <h1>ПОЧЕМУ ВЫБИРАЮТ НАС</h1>

            <div className={classes["whychooseus-content__hr"]}>
              <hr />
            </div>

            <p>Профессионализм; Опыт; Энтузиазм; Надежность</p>
          </div>
        </motion.div>
      </div>
      <BoxCard />
    </>
  );
};

export default WhyChooseUs;
