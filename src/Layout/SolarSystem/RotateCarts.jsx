import classes from "./rotatecarts.module.scss";
import firstImg from "/public/assets/SolarSystem/first.webp";
import second from "/public/assets/SolarSystem/second.webp";
import third from "/public/assets/SolarSystem/third.webp";

const mapCartObj = [
  {
    image: firstImg,
    text: "Мы экономим расходы для наших клиентов.",
    backText:
      "Мы предлагаем полную солнечную систему для наших глобальных клиентов, чтобы снизить их общие затраты.",
  },
  {
    image: second,
    text: "Мы экономим расходы для наших клиентов.",
    backText:
      "С нашим профессиональным дизайном солнечной системы клиенты могут установить систему быстро и легко.",
  },
  {
    image: third,
    text: "Мы экономим расходы для наших клиентов.",
    backText:
      "Наша система удобна для обслуживания клиентов, и мы предоставим лучший сервис после продажи.",
  },
];

const RotateCarts = () => {
  return (
    <div className={classes["rotatecarts-container"]}>
      <div className={classes["content"]}>
        {mapCartObj.map((item, index) => {
          return (
            <div key={index} className={classes["cart"]}>
              <div className={classes["cart-inner"]}>
                <div className={classes["front"]}>
                  <img
                    width={318}
                    height={245}
                    src={item.image}
                    alt={`Изображение ${index}`}
                  />
                  <p>{item.text}</p>
                </div>
                <div className={classes["back"]}>
                  <div className={classes["back__border"]}>{item.backText}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotateCarts;
