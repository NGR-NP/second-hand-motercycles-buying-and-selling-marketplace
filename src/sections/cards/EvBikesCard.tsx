import ProductCardWIthMinimamData from "@/components/cards/ProductCardWIthMinimamData";
const EvBikesCard = () => {
  const ngClass = { hover: "h-[2px]  bg-red-500" };

  const imgArray = new Array(100).fill("/images/bikes/bike-02.jpg");

  return (
    <section className="pt-8 mx-auto max-w-screen-xl">
      <div className="px-4 my-4 shadow-lg bg-white1">
        <div className="my-4 text-2xl font-bold">
          <h4>Electric Zone</h4>
        </div>
        <ul className="flex overflow-x-auto my-4 overflow-ellipsis hideScroollbar">
          <li className="mx-2 whitespace-nowrap cursor-pointer hover:text-red3">
            Bikes
            <div className={`${ngClass.hover} absolute bottom-1`} />
          </li>
          <li className="mx-2 whitespace-nowrap cursor-pointer hover:text-red3">
            Scooters
            <div className={`${ngClass.hover} absolute bottom-1`} />
          </li>
        </ul>
        <div className="w-full h-[2px] bg-slate-400" />

        <div className="flex overflow-x-scroll pt-8 pb-12 rounded-lg duration-300 snap-x hideScroollbar">
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

export default EvBikesCard;
