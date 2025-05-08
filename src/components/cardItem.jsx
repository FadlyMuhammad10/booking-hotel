import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import formatRupiah from "@/utils/formatRupiah";

export default function CardItem({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="card border shadow-md rounded-2xl   cursor-pointer overflow-hidden"
      onClick={() => navigate(`/hotel/${data._id}`)}
    >
      <img
        src={`${data.images[0].image_url}`}
        alt=""
        className="w-full h-[200px] object-cover "
      />

      <div className="px-6 py-4 flex flex-col items-start">
        <span className="flex flex-row gap-1 mb-2">
          {Array.from({ length: data.rating }).map((_, index) => (
            <TiStarFullOutline
              key={index}
              size={20}
              className="text-[#FF9900]"
            />
          ))}
        </span>
        <h1 className="text-2xl font-semibold text-[#152C5B]">{data.name}</h1>
        <span className="flex flex-row items-center py-2">
          <FaLocationDot size={20} color="#3258E8" />
          <p className="ml-1 text-[#848484]">{data.city}, Indonesia</p>
        </span>
        <div className="flex flex-row gap-4 pt-2">
          <span className="text-orange-500 font-semibold">
            {formatRupiah(data.rooms[0].price)}
          </span>
        </div>
      </div>
    </div>
  );
}
