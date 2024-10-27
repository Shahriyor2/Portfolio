import NothingToHave from "../NothingToHave";
import classes from "./products.module.scss";
import first from "/public/assets/hotProducts/1-ая.webp";
import second from "/public/assets/hotProducts/2-ая.webp";
import third from "/public/assets/hotProducts/3-тья.webp";
import fourth from "/public/assets/hotProducts/4-ая.webp";

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
        {!productsObj || productsObj.length === 0 ? (
          <NothingToHave />
        ) : (
          productsObj.slice(0, 11)?.map((item, key) => {
            return (
              <div className={classes["card"]} key={key}>
                <img
                  width={"100%"}
                  height={205}
                  src={item.image}
                  alt="картина"
                />
                <a href="#">
                  <p>{item.text}</p>
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
