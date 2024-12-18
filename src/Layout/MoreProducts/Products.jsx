import classes from "./products.module.scss";
import first from "/public/assets/moreProducts/1-ый.webp";
import second from "/public/assets/moreProducts/2-ой.webp";
import third from "/public/assets/moreProducts/3-ий.webp";
import fourth from "/public/assets/moreProducts/4-ый.webp";

const Products = () => {
  const productsObj = [
    {
      image: first,
      text: "PERC PVS-545W/550W-M10H",
    },
    {
      image: second,
      text: "N-Type Topcon PVS-575W/580W-M10HDT",
    },
    {
      image: third,
      text: "Black frame PVS-410W/420W-M10H",
    },
    {
      image: fourth,
      text: "HJT PVS-710W/720W-M12HDT",
    },
    {
      image: first,
      text: "PERC PVS-545W/550W-M10H",
    },
    {
      image: second,
      text: "N-Type Topcon PVS-575W/580W-M10HDT",
    },
    {
      image: third,
      text: "Black frame PVS-410W/420W-M10H",
    },
    {
      image: fourth,
      text: "HJT PVS-710W/720W-M12HDT",
    },
    {
      image: first,
      text: "PERC PVS-545W/550W-M10H",
    },
    {
      image: second,
      text: "N-Type Topcon PVS-575W/580W-M10HDT",
    },
    {
      image: third,
      text: "Black frame PVS-410W/420W-M10H",
    },
    {
      image: fourth,
      text: "HJT PVS-710W/720W-M12HDT",
    },
  ];

  return (
    <div className={classes["products-container"]}>
      <div className={classes["content"]}>
        {productsObj.map((item, key) => {
          return (
            <div className={classes["card"]} key={key}>
              <img width={"100%"} height={205} src={item.image} alt="картина" />
              <a href="#">
                <p>{item.text}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
