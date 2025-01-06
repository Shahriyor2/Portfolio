import classes from "./ourvision.module.scss";

const OurVision = () => {
  return (
    <div className={classes["ourvision-container"]}>
      <div className={classes["content"]}>
        <div className={classes["content__info-text"]}>
          <h2>Наша миссия</h2>
          <br />
          <p>
            Предлагаем надежные солнечные продукты по лучшей цене для наших
            клиентов.
          </p>
          <br />
          <p>
            Предлагаем стандартизированную солнечную систему, чтобы помочь нашим
            клиентам быстро и легко установить систему. Предлагаем лучший
            сервис, чтобы помочь нашим клиентам продлить срок службы всей
            системы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
