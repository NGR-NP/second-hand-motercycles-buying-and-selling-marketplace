"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "../style/carousel.module.css";
const Carousel = ({ children: slider }: any) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
  };
  const next = () => {
    setCurrent((curr) => (curr === slider.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className={styles.carousel}>
      <div
        className={styles.cont}
        style={{ transform: `translateX(-${current * 100}%)` }}
        // style={{ transform: "translateX(-400%)" }}
      >
        {slider}
      </div>
      <div className={styles.buttonsCont}>
        <button onClick={prev}>
          <BiChevronLeft />
        </button>
        <button onClick={next}>
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
