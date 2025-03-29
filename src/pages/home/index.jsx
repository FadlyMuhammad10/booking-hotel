import React from "react";

import CardItem from "../../components/cardItem";
import Header from "../../components/header";
import Search from "../../components/search";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const hotels = useLoaderData();
  return (
    <>
      <div className="relative">
        <div className="w-full h-[704px] relative">
          <img
            src="assets/images/banner.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-[30%]"></div>
        </div>
        <Header classNames="absolute  top-0 left-0 w-full z-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="text-[#BBBDC3] text-xl font-semibold mb-2">
            Life Is Too Short For A Wide And Beautiful World
          </h3>
          <h1 className="text-white text-6xl font-bold">
            Enjoy Your Tour With Heavenly <br /> Experience You{"'"}ve Never Had
          </h1>
        </div>
      </div>
      <div className="container -translate-y-[50%]">
        <Search />
      </div>

      <div className="container flex flex-row items-center mb-10">
        <div className="w-1/2 flex flex-wrap gap-14">
          <div className="flex flex-col gap-10">
            <div className="w-[310px] h-[260px] border rounded-2xl relative">
              <img
                src="assets/images/prambanan.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-2xl "></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl">
                Yogyakarta
              </div>
            </div>
            <div className="w-[310px] h-[260px] border rounded-2xl relative">
              <img
                src="assets/images/pura.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-2xl "></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl">
                Bali
              </div>
            </div>
          </div>
          <div className="border w-[45%] rounded-2xl relative -z-10">
            <img
              src="assets/images/borobudur.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl -z-10"
            />
            <div className="absolute inset-0 w-full h-full bg-black opacity-50 rounded-2xl z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl z-10">
              Magelang
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-4 pl-8">
          <span className="text-[#3258E8] text-xl font-semibold">
            New For You
          </span>
          <h1 className="text-5xl font-bold">
            Enjoy Your Vacation <br /> With A New Experience
          </h1>
          <p className="text-[#848484]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            possimus delectus, doloribus voluptatem ipsam ex facere eum,
            accusantium commodi nostrum id quidem cupiditate eaque cum molestias
            nobis necessitatibus deleniti? Dolorem.
          </p>
          <div className="flex flex-row gap-8 my-5">
            <div className="flex flex-col gap-1">
              <span className="text-[#232631] font-semibold text-xl ">
                560+
              </span>
              <p className="text-[#848484]">Destinations</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#232631] font-semibold text-xl">120+</span>
              <p className="text-[#848484]">Luxury Hotels</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#232631] font-semibold text-xl">
                360K+
              </span>
              <p className="text-[#848484]">Happy Tourists</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 pt-2">
            <button
              type="button"
              className="bg-[#3258E8] text-white py-4 px-8 rounded-xl font-semibold"
            >
              Get Started
            </button>
            <button
              type="button"
              className="bg-[#F4F4F5] text-[#000000] py-4 px-8 rounded-xl font-medium hover:border  hover:bg-white hover:border-[#3258E8] hover:text-[#565656]"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      <div className="container flex flex-col py-16 gap-16">
        <div className="text-center">
          <span className="text-[#3258E8] text-xl font-semibold ">
            Best Offer From Us
          </span>
          <h1 className="text-5xl font-bold pt-2">Special Trip Packages</h1>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <CardItem key={i} data={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}
