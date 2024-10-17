import classes from "./boxcard.module.scss";
import mill from "/public/assets/boxcard/мельница.webp";
import world from "/public/assets/boxcard/мир.webp";
import sunBattеry from "/public/assets/boxcard/солн.батареи.webp";
import sun from "/public/assets/boxcard/солнце.webp";

const BoxCard = () => {
  const boxesCard = [
    {
      img: sun,
      title: "About company",
      text: "Professional manufacturer of solar panel and solar system in the market for more than 13 years",
    },
    {
      img: sunBattеry,
      title: "We are engaged in",
      text: "Production of solar panel,solar system,and solar system integration.",
    },
    {
      img: mill,
      title: "Hybrid energy",
      text: "Our solar system can be designed and operated with hybrid energy,such as grid power,generator and wind turbine.",
    },
    {
      img: world,
      title: "After-sale service",
      text: "Our solar products and solar system are convenient for customers to maintain and provide customers with the best after-sales service.",
    },
  ];

  return (
    <section className={classes["boxcard-container"]}>
      {/* block */}
      <div className={classes["block-content"]}>
        {boxesCard.map((item, key) => {
          return (
            <div key={key} className={classes["card"]}>
              {/* card-img */}
              <div className={classes["card__img"]}>
                <img width={75} height={75} src={item.img} alt="чтото" />

                <h2>{item.title}</h2>
                <hr />
              </div>

              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BoxCard;
