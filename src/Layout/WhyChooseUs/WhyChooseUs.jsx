import classes from "./whychooseus.module.scss";
import BoxCard from "./BoxCard";

const WhyChooseUs = () => {
  return (
    <>
      <div className={classes["whychooseus-container"]}>
        {/* Заголовок */}
        <div className={classes["whychooseus-content"]}>
          <h1>ПОЧЕМУ ВЫБИРАЮТ НАС</h1>

          <div className={classes["whychooseus-content__hr"]}>
            <hr />
          </div>

          <p>Профессионализм; Опыт; Энтузиазм; Надежность</p>
        </div>
      </div>
      <BoxCard />
    </>
  );
};

export default WhyChooseUs;
