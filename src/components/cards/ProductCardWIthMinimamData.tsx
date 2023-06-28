import Image from "next/image";
import Link from "next/link";
type data = {
  idx: number;
  img: string;
};

const ProductCardWIthMinimamData = ({ idx, img }: data) => {
  return (
    <div
      key={idx}
      // onDrag={(e) => handleDrag(e)}
      className="inline-block px-3 group snap-center"
    >
      <div className="overflow-hidden w-64 max-w-xs rounded-lg shadow-md transition-shadow duration-300 ease-in-out bg-white1 hover:shadow-xl">
        <Image
          className="object-cover select-none group-hover:scale-105 duration-300 rounded-t-lg h-[150px] w-full"
          width="100"
          height="300"
          src={img}
          alt="img"
        />
        <div className="px-4 pt-6 pb-4">
          <p className="text-base">Lorem, ipsum.</p>
          <p className="text-lg font-semibold">rs 1.5 Lakh</p>
          <Link className="" href="#">
            <div className="px-3 py-1 mt-3 mb-2 text-center rounded-md border duration-300 border-red2 text-red02 hover:text-red3">
              View offers
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardWIthMinimamData;
