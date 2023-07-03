import React from "react";
import styles from "@/styles/slider.module.css";
import Carousel from "@/components/slider/Carousel";
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
              <img
                alt="img"
                height={400}
                width={500}
                key={idx}
                className="w-full h-auto"
                src={img}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
