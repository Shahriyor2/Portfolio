import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Carousel.module.scss";
import first from "/assets/Carousel/1-ый слайд.webp";
import second from "/assets/Carousel/2-ой слайд.webp";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={classes["carousel-container"]}>
      <Slider {...settings}>
        <div className={classes["slide"]}>
          <img src={first} alt="Слайд 1" />
          <div className={classes["text"]}>
            <h2>Заряжайте будущее, освещая завтрашний день</h2>
            <p>Эксперт по солнечным системам</p>
          </div>
        </div>

        <div className={classes["slide"]}>
          <img src={second} alt="Слайд 2" />
          <div className={classes["text"]}>
            <h2>Заряжайте будущее, освещая завтрашний день</h2>
            <p>Эксперт по солнечным системам</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
