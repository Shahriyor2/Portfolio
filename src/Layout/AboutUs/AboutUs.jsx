import classes from "./page.module.scss";
import background from "/public/assets/about-us/background.jpg";
import { Home, Play, Slash } from "lucide-react";
import videoImg from "/public/assets/about-us/video-img.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "О нас";
  }, []);

  return (
    <section className={classes["container"]}>
      {/* показ навигации */}
      <div className={classes["bread-background"]}>
        <img height={205} src={background} alt="" />
        <div className={classes["bread-background__title"]}>
          <Link to="/">
            <Home />
            <h1>Главная</h1>
          </Link>
          <span>
            <Slash />
          </span>
          <h1>О нас</h1>
        </div>
      </div>

      <div className={classes["aboutUs__title"]}>О нас</div>

      <div className={classes["content"]}>
        {/* правая секция */}
        <div className={classes["content__left-section"]}>
          <h1>PVSYS Энергия</h1>
          <p>
            Более десяти лет PVSYS Энергия является надежным поставщиком в
            солнечном энергетическом секторе, специализируясь на производстве
            солнечных панелей, гибридных инверторов, батарей LifePO4 и крепежных
            элементов. Наши интегрированные решения для солнечных батарей,
            оснащенные встроенным гибридным инвертором, контроллером MPPT и
            батареей LifePO4 с системой управления батареями, предназначены для
            использования в районах без электроэнергии. Они также обеспечивают
            значительную экономию затрат на энергию для наших клиентов. Понимая,
            что у каждого клиента уникальные потребности, мы предоставляем
            индивидуальную настройку солнечной системы. Мы стремимся найти
            идеальное решение для каждого.
          </p>
        </div>

        {/* левая секция */}
        <div className={classes["content__right-section"]}>
          <img width={"max-content"} height={305} src={videoImg} alt="видео" />
          <div className={classes["content__right-section_pulse"]}>
            <Play />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
