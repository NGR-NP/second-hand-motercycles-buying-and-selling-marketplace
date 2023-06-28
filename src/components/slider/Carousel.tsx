"use client";
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "@/styles/carouselComponents.module.css";
const Carousel = ({ children: slider }: any) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
  };
  const next = () => {
    setCurrent((curr) => (curr === slider.length - 1 ? 0 : curr + 1));
  };

  const containerRef: any = useRef(null);
  const [isDragging, setIsDragging] = useState<any>(false);
  const [startPosition, setStartPosition] = useState<any>(null);
  const [startScrollPosition, setStartScrollPosition] = useState<any>(null);

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
    setStartPosition(event.pageX);
    setStartScrollPosition(containerRef?.current.scrollLeft);
  };

  const handleMouseMove = (event: any) => {
    if (isDragging) {
      const distance = event.pageX - startPosition;
      containerRef.current.scrollLeft = startScrollPosition - distance;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className={styles.carousel}>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={styles.cont}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slider}
      </div>
      <div className={styles.buttonsCont}>
        <button className="flex items-center" onClick={prev}>
          <BiChevronLeft />
        </button>
        <button className="flex items-center" onClick={next}>
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
