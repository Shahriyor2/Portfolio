"use client";
import throttle from "lodash.throttle";
import { useEffect, useState } from "react";
import classes from "./navbar.module.scss";
import logo from "/public/assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`${classes["navbar-container"]} ${
        isScrolled ? classes["navbar-sticky"] : ""
      }`}
    >
      <div className={classes["content"]}>
        <img width={111} height={60} src={logo} alt="logo" />

        {/* навигация */}
        <div className={classes["navbar-container__navigation"]}>
          {/* <MenuList /> */}
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about-us">
              <li>About us</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
