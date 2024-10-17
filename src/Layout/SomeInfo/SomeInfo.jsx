import classes from "./someinfo.module.scss";
import remont from "/public/assets/Ремонт.webp";

const SomeInfo = () => {
  return (
    <div className={classes["someinfo-container"]}>
      <div className={classes["content"]}>
        <img width={460} height={312} src={remont} alt="ремонт" />

        {/* текст правой части */}
        <div className={classes["content__right-section"]}>
          <h1>PVSYS ENERGY GROUP LIMITED</h1>

          {/* первый текст */}
          <p>
            PVSYS ENERGY GROUP LIMITED is the professional manufacturer of solar
            panel,solar storage system in the market for more than 13 years.
          </p>
          <br />
          {/* второй текст */}
          <p>
            We always seem Quality is our life, without good quality,we can not
            go any further. We blieve with our effort,we will make the world
            better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SomeInfo;
