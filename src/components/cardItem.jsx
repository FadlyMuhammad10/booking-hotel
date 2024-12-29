import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function CardItem() {
  return (
    <div className="card border shadow-md rounded-2xl  p-6">
      <img
        src="assets/images/hotel-1.jpg"
        alt=""
        className="w-full  object-cover rounded-2xl"
      />
      <span className="flex flex-row gap-1 pt-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <TiStarFullOutline key={index} size={20} className="text-[#FF9900]" />
        ))}
      </span>
      <h1 className="text-2xl font-semibold pt-4">Hotel A</h1>
      <span className="flex flex-row text-[#848484] py-2">
        <FaLocationDot size={20} />
        <p className="pl-1">Jakarta, Indonesia</p>
      </span>
      <div className="flex flex-row gap-4 pt-4">
        <button
          type="button"
          className="bg-[#3258E8] text-white py-2 px-6 rounded-xl font-semibold cursor-pointer"
        >
          Book Now
        </button>
        <Link
          to="/hotel/1"
          className="bg-white text-[#3258E8] py-2 px-6 rounded-xl font-medium border border-[#3258E8] "
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
