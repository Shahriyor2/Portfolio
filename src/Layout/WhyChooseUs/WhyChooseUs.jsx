import classes from "./whychooseus.module.scss";
import BoxCard from "./BoxCard";

const WhyChooseUs = () => {
  return (
    <>
      <div className={classes["whychooseus-container"]}>
        {/* заголовок */}
        <div className={classes["whychooseus-content"]}>
          <h1>WHY DO YOU CHOOSE US</h1>

          <div className={classes["whychooseus-content__hr"]}>
            <hr />
          </div>

          <p>Professional;Experienced;Enthusiastic;Reliable</p>
        </div>
      </div>
      <BoxCard />
    </>
  );
};

export default WhyChooseUs;
