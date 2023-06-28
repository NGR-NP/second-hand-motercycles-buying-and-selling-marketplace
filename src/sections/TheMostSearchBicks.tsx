import ProductCardWIthMinimamData from "@/components/cards/ProductCardWIthMinimamData";
const TheMostSearchBicks = () => {
  const ngClass = { hover: "h-[2px]  bg-red-500" };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    dots: true,
    speed: 500,
  };
  const totalCard = 10;
  const imgArray = new Array(totalCard).fill("/images/bikes/bike-02.jpg");

  return (
    <section className="bg-gray-500">
      <div className="px-4 py-2 bg-white1">
        <div className="my-4 text-2xl font-bold">
          <h4>The most search bicks</h4>
        </div>
        <ul className="flex overflow-x-auto my-4">
          <li className="mx-2 whitespace-nowrap hover:text-red3">
            Ev
            <div className={`${ngClass.hover} absolute bottom-1`} />
          </li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">
            Sports
            <div className={`${ngClass.hover} absolute bottom-1`} />
          </li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Classic</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Adventure</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Scooters</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Off Road</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Off Road</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">Off Road</li>
          <li className="mx-2 whitespace-nowrap hover:text-red3">SuperMoto</li>
        </ul>
        <div className="w-full h-[2px] bg-slate-400" />

        <div className="flex overflow-x-scroll py-12 mt-8 rounded-lg duration-300 snap-x hideScroollbar">
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

export default TheMostSearchBicks;
