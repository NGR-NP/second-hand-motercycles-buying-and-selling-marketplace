"use client";
import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import Image from "next/image";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="font-sans text-base antialiased font-normal bg-gray-50 leading-default text-slate-500">
      <AdminAsideSec />
      <main className="relative h-full max-h-screen rounded-xl transition-all duration-200 md:ml-56 ease-soft-in-out xl:ml-68">
        <nav
          className="flex relative flex-wrap justify-between items-center px-0 py-2 mx-6 rounded-2xl shadow-none transition-all duration-250 ease-soft-in lg:flex-nowrap lg:justify-start"
          navbar-scroll="true"
        >
          <div className="flex justify-between items-center px-4 py-1 mx-auto w-full flex-wrap-inherit">
            <nav>
              <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="text-sm leading-normal">
                  <Link className="opacity-50 text-slate-700" href="#">
                    Pages
                  </Link>
                </li>
                <li
                  className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
            </nav>

            <div className="flex justify-end items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <div className="flex items-center md:ml-au md:pr-4">
                <div className="flex relative flex-wrap items-stretch w-full rounded-lg transition-all ease-soft">
                  <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-pxlex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="pl-6 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center">
                  <Link
                    href="profile"
                    className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500"
                  >
                    <i className="fa fa-user sm:mr-1"></i>
                    <Image
                      src={"/images/reaction/shock.jpeg"}
                      height={1}
                      width={1}
                      className="w-10 h-10 rounded-full"
                      alt="profile img"
                    />
                  </Link>
                </li>
                <li className="flex items-center pl-4 xl:hidden">
                  <Link
                    href="#"
                    className="block p-0 text-sm transition-all ease-nav-brand text-slate-500"
                  >
                    <div className="w-4.5 overflow-hidden">
                      <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                      <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                      <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                    </div>
                  </Link>
                </li>
                <li className="flex items-center px-4">
                  <Link
                    href="#"
                    className="p-0 text-sm transition-all ease-nav-brand text-slate-500"
                  >
                    <i className="cursor-pointer fa fa-cog"></i>
                  </Link>
                </li>

                <li className="flex relative items-center pr-2">
                  <p className="hidden transform-dropdown-show"></p>
                  <Link
                    href="#"
                    className="block p-0 text-sm transition-all ease-nav-brand text-slate-500"
                    aria-expanded="false"
                  >
                    <i className="cursor-pointer fa fa-bell"></i>
                  </Link>

                  <ul className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                    <li className="relative mb-2">
                      <Link
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                        href="#"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="inline-flex justify-center items-center mr-4 w-9 max-w-none h-9 text-sm text-white rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal">
                              <span className="font-semibold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">
                              <i className="mr-1 fa fa-clock"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="relative mb-2">
                      <Link
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                        href="#"
                      >
                        <div className="flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="inline-flex justify-center items-center mr-4 w-9 max-w-none h-9 text-sm text-white bg-gradient-to-tl from-gray-900 rounded-xl to-slate-800"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal">
                              <span className="font-semibold">New album</span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">
                              <i className="mr-1 fa fa-clock"></i>1 day
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="relative">
                      <Link
                        className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                        href="#"
                      >
                        <div className="flex py-1">
                          <div className="inline-flex justify-center items-center my-auto mr-4 w-9 h-9 text-sm text-white bg-gradient-to-tl rounded-xl transition-all duration-200 ease-nav-brand from-slate-600 to-slate-300">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      ></path>
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-1 text-sm font-normal leading-normal">
                              Payment successfully completed
                            </h6>
                            <p className="mb-0 text-xs leading-tight text-slate-400">
                              <i className="mr-1 fa fa-clock"></i>2 days
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
    // <div className="ml-60">
    //   <div className="top flex justify-between w-[70%]">
    //     <div className="flex flex-col items-center p-6 w-52 text-center bg-white rounded-lg total-user">
    //       <FaUserLarge size={30} />
    //       Total User
    //       <p>1000</p>
    //     </div>

    //     <div className="flex flex-col items-center p-6 w-52 text-center bg-white rounded-lg total-user">
    //       <FaUserLarge size={30} />
    //       Total User
    //       <p>1000</p>
    //     </div>

    //     <div className="flex flex-col items-center p-6 w-52 text-center bg-white rounded-lg total-user">
    //       <FaUserLarge size={30} />
    //       Total User
    //       <p>1000</p>
    //     </div>

    //     <div className="flex flex-col items-center p-6 w-52 text-center bg-white rounded-lg total-user">
    //       <FaUserLarge size={30} />
    //       Total User
    //       <p>1000</p>
    //     </div>
    //   </div>

    //   <div className="middle mt-10 w-[70%]">
    //     <div className="grid grid-cols-3 gap-4">
    //       <div className="flex col-span-2 py-10 bg-white rounded-lg">
    //         <div className="p-10">
    //           Built by developers
    //           <p>Soft UI Dashboard</p>
    //           <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>

    //         </div>
    //         <div className="p-12 image">
    //           <BsFillRocketFill size={150} />
    //         </div>
    //       </div>
    //         <div className=" bg-indigo-300 bg-[url(/images/bikes/bike-01.jpg)] rounded-lg py-10 p-10 bg-	opacity-3 ">
    //           <p>Work with the rockets</p>
    //         <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
    //         {/* <img className="object-contain cursor-pointer" src="/images/bikes/bike-01.jpg" alt="" /> */}
    //       </div>
    //     </div>
    //   </div>

    // </div>
  );
};

export default AdminDashboard;
