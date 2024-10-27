// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Carousel.module.scss";

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
        {/* <div> */}
        <img src="/public/assets/Carousel/1-ый слайд.webp" alt="" />
        <img src="/public/assets/Carousel/2-ой слайд.webp" alt="" />
        {/* </div> */}
      </Slider>
    </div>
  );
};
export default Carousel;
