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
            PVSYS ENERGY GROUP LIMITED — это профессиональный производитель
            солнечных панелей и систем накопления энергии с более чем 13-летним
            опытом на рынке.
          </p>
          <br />
          {/* второй текст */}
          <p>
            Мы всегда придерживаемся мнения, что качество — это наша жизнь. Без
            хорошего качества мы не сможем двигаться дальше. Мы верим, что
            благодаря нашим усилиям мир станет лучше.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SomeInfo;
