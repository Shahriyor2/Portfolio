import classes from "./rotatecarts.module.scss";
import firstImg from "/public/assets/SolarSystem/first.webp";
import second from "/public/assets/SolarSystem/second.webp";
import third from "/public/assets/SolarSystem/third.webp";

const mapCartObj = [
  {
    image: firstImg,
    text: "We save costs for our clients.",
    backText:
      "We are offering the whole complete solar system to our global customers to save their total cost.",
  },
  {
    image: second,
    text: "We save costs for our clients.",
    backText:
      "With our professional design of the solar system, clients can install the system quickly and easily..",
  },
  {
    image: third,
    text: "We save costs for our clients.",
    backText:
      "Our system is convenient for clients to maintain and we will provide the best after-sales service.",
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
                    alt={`Image ${index}`}
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
