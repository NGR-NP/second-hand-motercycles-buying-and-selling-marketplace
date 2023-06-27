"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
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
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          centerPadding: "-30px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "90px",

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerPadding: "60px",

          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-gray-500">
      <div className="px-4 py-2 bg-slate-200">
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

        <div className="mx-3 mt-4 mb-4 max-w-screen-xl xl:mx-auto">
          <Slider {...settings}>
            <div className="inline-block px-3 W-60 snap-center">
              <div className="overflow-hidden w-64 max-w-xs h-64 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div className="">
                  <Image
                    className="object-cover rounded-t-lg h-[100px] w-full"
                    width={100}
                    height={200}
                    src="/images/bikes/bike-02.jpg"
                    alt="img"
                  />
                </div>
                <div className="px-4 py-2">
                  <p>Lorem, ipsum.</p>
                  <p>rs 1.5 Lakh</p>
                  <div className="mt-3 mb-2">
                    <Link href="#">View offers</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block px-3 snap-center">
              <div className="overflow-hidden w-64 max-w-xs h-64 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div>
                  <Image
                    className="object-cover rounded-t-lg h-[100px] w-full"
                    width={100}
                    height={200}
                    src="/images/bikes/bike-02.jpg"
                    alt="img"
                  />
                </div>
                <div className="px-4 py-2">
                  <p>Lorem, ipsum.</p>
                  <p>rs 1.5 Lakh</p>
                  <div className="mt-3 mb-2">
                    <Link href="#">View offers</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block px-3 snap-center">
              <div className="overflow-hidden w-64 max-w-xs h-64 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div>
                  <Image
                    className="object-cover rounded-t-lg h-[100px] w-full"
                    width={100}
                    height={200}
                    src="/images/bikes/bike-02.jpg"
                    alt="img"
                  />
                </div>
                <div className="px-4 py-2">
                  <p>Lorem, ipsum.</p>
                  <p>rs 1.5 Lakh</p>
                  <div className="mt-3 mb-2">
                    <Link href="#">View offers</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block px-3 snap-center">
              <div className="overflow-hidden w-64 max-w-xs h-64 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <div>
                  <Image
                    className="object-cover rounded-t-lg h-[100px] w-full"
                    width={100}
                    height={200}
                    src="/images/bikes/bike-02.jpg"
                    alt="img"
                  />
                </div>
                <div className="px-4 py-2">
                  <p>Lorem, ipsum.</p>
                  <p>rs 1.5 Lakh</p>
                  <div className="mt-3 mb-2">
                    <Link href="#">View offers</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* <div className="flex overflow-x-scroll gap-4 w-max">
          <div className="flex-1 rounded-lg bg-white1">
          snap-center   
          <div className="flex-1 rounded-lg bg-white1">
            <div>
              <Image
                className="rounded-t-lg"
                width={300}
                height={100}
                src="/images/bikes/bike-02.jpg"
                alt="img"
              />
            </div>
            <div className="px-4 py-2">
              <p>Lorem, ipsum.</p>
              <p>rs 1.5 Lakh</p>
              <div className="mt-3 mb-2">
                <Link href="#">View offers</Link>
              </div>
            </div>
          </disnap-center v>
          <div className="rounded-lg bg-white1">
            <div>
              <Image
                className="rounded-t-lg"
                width={300}
                height={1100}
                src="/images/bikes/bike-01.jpg"
                alt="img"
              />
            </div>
            <div className="px-4 py-2">
              <p>Lorem, ipsum.</p>
              <p>rs 1.5 Lakh</p>
              <div className="mt-3 mb-2">
                <Link href="#">View offers</Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TheMostSearchBicks;
