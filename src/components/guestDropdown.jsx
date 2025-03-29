import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function GuestDropdown({
  adults,
  setAdults,
  kids,
  setKids,
  rooms,
  setRooms,
}) {
  const [isOpenDropdownGuest, setIsOpenDropdownGuest] = useState(false);
  const toggleDropdownGuest = () => {
    setIsOpenDropdownGuest(!isOpenDropdownGuest);
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };
  return (
    <button
      type="button"
      className="border max-w-max p-4 rounded-md flex items-center  relative"
      onClick={toggleDropdownGuest}
    >
      <div className="bg-[#E8EDFF] p-2 rounded-md">
        <CiUser size={24} color="#3258E8" />
      </div>
      <div className="ml-3 font-semibold">
        {adults} Adults, {kids} kids, {rooms} Room
      </div>
      <HiOutlineChevronDown size={24} className="ml-10" />
      {isOpenDropdownGuest && (
        <div
          className="absolute -bottom-4 right-0 bg-white border p-4 rounded-md translate-y-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Adults</span>
            <div className="flex items-center space-x-4 border">
              <button
                className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF] disabled:opacity-50"
                onClick={() => decrement(setAdults, adults)}
                disabled={adults === 1}
              >
                <AiOutlineMinus size={24} color="#3258E8" />
              </button>
              <span>{adults}</span>
              <button
                className="w-10 h-10  flex items-center justify-center  hover:bg-[#E8EDFF]"
                onClick={() => increment(setAdults, adults)}
              >
                <AiOutlinePlus size={24} color="#3258E8" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Children</span>
            <div className="flex items-center space-x-4 border">
              <button
                className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF] disabled:opacity-50"
                onClick={() => decrement(setKids, kids)}
                disabled={kids === 0}
              >
                <AiOutlineMinus size={24} color="#3258E8" />
              </button>
              <span>{kids}</span>
              <button
                className="w-10 h-10  flex items-center justify-center  hover:bg-[#E8EDFF]"
                onClick={() => increment(setKids, kids)}
              >
                <AiOutlinePlus size={24} color="#3258E8" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Rooms</span>
            <div className="flex items-center space-x-4 border">
              <button
                className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF] disabled:opacity-50"
                onClick={() => decrement(setRooms, rooms)}
                disabled={rooms === 1}
              >
                <AiOutlineMinus size={24} color="#3258E8" />
              </button>
              <span>{rooms}</span>
              <button
                className="w-10 h-10  flex items-center justify-center  hover:bg-[#E8EDFF]"
                onClick={() => increment(setRooms, rooms)}
              >
                <AiOutlinePlus size={24} color="#3258E8" />
              </button>
            </div>
          </div>
          <div className="border-b my-4"></div>
          <button
            type="button"
            className="w-full py-2 bg-[#3258E8] text-white rounded-md"
            onClick={toggleDropdownGuest}
          >
            Apply
          </button>
        </div>
      )}
    </button>
  );
}
