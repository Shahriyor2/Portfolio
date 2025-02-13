import classes from "./boxcard.module.scss";
import mill from "/public/assets/boxcard/мельница.webp";
import world from "/public/assets/boxcard/мир.webp";
import sunBattеry from "/public/assets/boxcard/солн.батареи.webp";
import sun from "/public/assets/boxcard/солнце.webp";
import { motion } from "framer-motion";

const BoxCard = () => {
  const boxesCard = [
    {
      img: sun,
      title: "О компании",
      text: "Профессиональный производитель солнечных панелей и систем на рынке более 13 лет.",
    },
    {
      img: sunBattеry,
      title: "Чем мы занимаемся",
      text: "Производство солнечных панелей, систем и их интеграция.",
    },
    {
      img: mill,
      title: "Гибридная энергия",
      text: "Наши системы могут работать с гибридной энергией, такой как сетевое электричество, генераторы и ветряные турбины.",
    },
    {
      img: world,
      title: "Послепродажное обслуживание",
      text: "Наши продукты легко обслуживаются, и мы предоставляем лучший послепродажный сервис.",
    },
  ];

  return (
    <motion.div
      key={"firstTab"}
      className="box"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: "linear", duration: 0.3, delay: 0.4 }}
      animate="visible"
    >
      <section className={classes["boxcard-container"]}>
        {/* блок */}
        <div className={classes["block-content"]}>
          {boxesCard.map((item, key) => {
            return (
              <div key={key} className={classes["card"]}>
                {/* изображение карточки */}
                <div className={classes["card__img"]}>
                  <img
                    width={75}
                    height={75}
                    src={item.img}
                    alt="изображение"
                  />

                  <h2>{item.title}</h2>
                  <hr />
                </div>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default BoxCard;
