import React from "react";
import styles from "./styles/slider.module.css";
import Carousel from "@/components/slider/Carousel";
import Image from "next/image";
const Slider = () => {
  const imgs = [
    "/images/bikes/bike-01.jpg",
    "/images/bikes/bike-02.jpg",
    "/images/bikes/bike-03.jpg",
    "/images/bikes/bike-04.jpg",
    "/images/bikes/bike-05.jpg",
    "/images/bikes/bike-06.jpg",
    "/images/bikes/ktm-02.jpg",
    "/images/bikes/ktm-02.jpg",
    "/images/bikes/ktm200-01.jpg",
    "/images/bikes/ktm200.jpg",
  ];
  return (
    <div className={styles.sliderMain}>
      <div>
        <Carousel>
          {imgs.map((img, idx) => {
            return (
              <Image alt="img" height={200} key={idx} width="100" src={img} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
