import classes from "./ourvision.module.scss";

const OurVision = () => {
  return (
    <div className={classes["ourvision-container"]}>
      <div className={classes["content"]}>
        <div className={classes["content__info-text"]}>
          <h2>Наша миссия</h2>
          <br />
          <p>
            Предлагать надежные солнечные продукты по лучшим ценам для наших
            клиентов.
          </p>
          <br />
          <p>
            Предлагать надежные солнечные продукты по лучшим ценам для наших
            клиентов. Предлагать надежные солнечные продукты по лучшим ценам для
            наших клиентов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
