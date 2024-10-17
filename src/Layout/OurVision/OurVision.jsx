import classes from "./ourvision.module.scss";
import stickyBackground from "/public/assets/OurVision/background.jpg";

const OurVision = () => {
  return (
    <div className={classes["ourvision-container"]}>
      <div className={classes["content"]}>
        <img
          width={"100%"}
          height={500}
          src={stickyBackground}
          alt="stickyBacground"
        />
        <div className={classes["content__info-text"]}>
          <h2>Our Vision</h2>
          <br />
          <p>
            Offer the realiable solar products with best price to our clients.
          </p>
          <br />
          <p>
            Offer the realiable solar products with best price to our clients.
            br Offer the realiable solar products with best price to our
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
