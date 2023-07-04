import ProductCardWIthMinimamData from "@/components/cards/ProductCardWIthMinimamData";
import React from "react";

const ElectricBike = () => {
  const ngClass = { hover: "h-[2px]  bg-red-500" };

  const imgArray = new Array(100).fill("/images/bikes/bike-02.jpg");

  return (
    <section className="pt-8 mx-auto max-w-screen-xl">
      <div className="px-4 my-4 shadow-lg bg-white1">
        <div className="my-4 text-2xl font-bold">
          <h4>Electric Bike</h4>
        </div>

        <div className="flex overflow-x-scroll pt-8 pb-12 rounded-lg duration-500 ease-out snap-x hideScroollbar">
          {imgArray.length > 0 &&
            imgArray.map((img, idx) => {
              return (
                <ProductCardWIthMinimamData key={idx} img={img} idx={idx} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ElectricBike;
