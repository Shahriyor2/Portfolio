"use client";

import throttle from "lodash.throttle";
import { ChevronUpIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import classes from "./touppbutton.module.scss";

const ToUppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY >= 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 250);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToTop = useCallback(() => {
    window.scroll({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div className={isVisible ? classes.container : classes.btnVisible}>
      <button onClick={handleToTop}>
        <ChevronUpIcon />
      </button>
    </div>
  );
};

export default ToUppButton;
