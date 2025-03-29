import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import formatRupiah from "@/utils/formatRupiah";

export default function CardItem({ data, query }) {
  const navigate = useNavigate();
  return (
    <div
      className="card border shadow-md rounded-2xl  p-6 cursor-pointer"
      onClick={() => navigate(`/hotel/${data._id}?${query}`)}
    >
      <img
        src={`${data.images[0].image_url}`}
        alt=""
        className="w-full h-[200px] object-cover rounded-2xl"
      />
      <span className="flex flex-row gap-1 pt-3">
        {Array.from({ length: data.rating }).map((_, index) => (
          <TiStarFullOutline key={index} size={20} className="text-[#FF9900]" />
        ))}
      </span>
      <h1 className="text-2xl font-semibold pt-4">{data.name}</h1>
      <span className="flex flex-row text-[#848484] py-2">
        <FaLocationDot size={20} />
        <p className="pl-1">{data.city}, Indonesia</p>
      </span>
      <div className="flex flex-row gap-4 pt-4">
        <span className="text-orange-500 font-semibold">
          {formatRupiah(data.rooms[0].price)}
        </span>
      </div>
    </div>
  );
}
