import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.module.scss";
import logo from "/public/assets/logo.jpg";
import { throttle } from "lodash";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 250);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? classes.active : "";
  };

  return (
    <nav
      className={`${classes["navbar-container"]} ${
        isScrolled ? classes["navbar-sticky"] : ""
      }`}
      aria-label="Основное меню"
    >
      <div className={classes["content"]}>
        <Link to="/" aria-label="Перейти на главную страницу">
          <img width={111} height={60} src={logo} alt="Логотип компании" />
        </Link>

        {/* Навигация */}
        <div className={classes["navbar-container__navigation"]}>
          <ul>
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={getLinkClass("/about-us")}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="/products" className={getLinkClass("/products")}>
                Продукты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
