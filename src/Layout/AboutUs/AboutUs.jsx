import classes from "./page.module.scss";
import background from "/public/assets/about-us/background.jpg";
import { Home, Play, Slash } from "lucide-react";
import videoImg from "/public/assets/about-us/video-img.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className={classes["container"]}>
      {/* показ навигации */}
      <div className={classes["bread-background"]}>
        <img height={205} src={background} alt="" />
        <div className={classes["bread-background__title"]}>
          <Link toq="/">
            <Home />
            <h1>Home</h1>
          </Link>
          <span>
            <Slash />
          </span>
          <h1>About us</h1>
        </div>
      </div>

      <div className={classes["aboutUs__title"]}>About us</div>

      <div className={classes["content"]}>
        {/* right section */}
        <div className={classes["content__left-section"]}>
          <h1>PVSYS Energy</h1>
          <p>
            For over a decade, Pvsys Energy has been a trusted provider in the
            solar energy sector, specializing in the production of solar panels,
            hybrid inverters, LifePO4 batteries, and mounting brackets. Our
            integrated solar storage solutions, featuring a built-in hybrid
            inverter, mppt controller, and LifePO4 battery equipped with a
            Battery Management System, are designed for use in areas without
            power. They also offer significant energy cost savings for our
            customers. Understanding that each customer has unique needs, we
            provide personalized solar system customization. We are committed to
            finding the perfect fit for everyone.
          </p>
        </div>

        {/* left section */}
        <div className={classes["content__right-section"]}>
          <img width={"max-content"} height={305} src={videoImg} alt="video" />
          <div className={classes["content__right-section_pulse"]}>
            <Play />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
