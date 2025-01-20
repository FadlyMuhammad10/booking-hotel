import { getHotels } from "@/services/guestService";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get("location") || "";
  const capacityParam = searchParams.get("capacity") || 2;
  const startDateParam = searchParams.get("startDate") || null;
  const endDateParam = searchParams.get("endDate") || null;

  const [location, setLocation] = useState(locationParam);

  const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
  const [startDate, endDate] = dateRange;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [minDate, setMinDate] = useState(new Date());

  const navigate = useNavigate();

  const [isOpenDropdownGuest, setIsOpenDropdownGuest] = useState(false);

  const [adults, setAdults] = useState(capacityParam);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const toggleDropdownGuest = () => {
    setIsOpenDropdownGuest(!isOpenDropdownGuest);
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  useEffect(() => {
    setLocation(locationParam); // Update input ketika URL berubah
    setAdults(parseInt(capacityParam));

    if (startDateParam) {
      const startDate = new Date(startDateParam);
      const endDate = new Date(endDateParam);
      setDateRange([startDate, endDate]);
    }
  }, [locationParam, capacityParam, startDateParam, endDateParam]);

  const handleSearch = async () => {
    // redirect ke halaman hasil pencarian
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("location", location);
    searchParams.set("capacity", adults);

    if (startDate) searchParams.set("startDate", startDate.toISOString());
    if (endDate) searchParams.set("endDate", endDate.toISOString());

    navigate(`/search?${searchParams.toString()}`);
  };
  return (
    <>
      <div className="p-6 shadow-md bg-white rounded-r-3xl rounded-l-3xl flex flex-row justify-between ">
        <div className="border max-w-max p-4 rounded-md flex items-center">
          <div className="bg-[#E8EDFF] p-2 rounded-md">
            <FaLocationDot size={24} color="#3258E8" />
          </div>
          <input
            type="text"
            placeholder="Where Are You Going ?"
            className="ml-3   focus:outline-none placeholder:text-[#848484]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div
          className="border p-4 rounded-md flex items-center justify-between cursor-pointer relative gap-28"
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
        >
          <div className="flex items-center">
            <div className="bg-[#E8EDFF] p-2 rounded-md">
              <FaRegCalendarAlt size={24} color="#3258E8" />
            </div>
            {/* checkin */}
            <div className="flex flex-col ml-3">
              <label htmlFor="checkin" className=" text-[#848484] w-20">
                Check In
              </label>
              <span className="font-bold">
                {startDate
                  ? startDate.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </div>
          </div>

          <MdOutlineArrowForwardIos size={24} />

          <div className="flex items-center">
            <div className="bg-[#E8EDFF] p-2 rounded-md">
              <FaRegCalendarAlt size={24} color="#3258E8" />
            </div>
            {/* checkout */}
            <div className="flex flex-col ml-3">
              <label htmlFor="checkout" className=" text-[#848484] w-20">
                Check Out
              </label>
              <span className="font-bold">
                {endDate
                  ? endDate.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </div>
          </div>

          {isDatePickerOpen && (
            <div className="absolute -top-2 right-0 translate-y-[40%] z-50 block">
              <DatePicker
                selected={startDate}
                onChange={(update) => {
                  setDateRange(update); // update contains [startDate, endDate]
                  if (update[0] && update[1]) {
                    // Close the picker only after selecting both dates
                    setIsDatePickerOpen(false);
                  }
                }}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                onClickOutside={() => setIsDatePickerOpen(false)}
                dateFormat="dd MMM yyyy"
                className="focus:outline-none font-bold "
                inline
                selectsRange
              />
            </div>
          )}
        </div>

        <button
          type="button"
          className="border max-w-max p-4 rounded-md flex items-center  relative"
          onClick={toggleDropdownGuest}
        >
          <div className="bg-[#E8EDFF] p-2 rounded-md">
            <CiUser size={24} color="#3258E8" />
          </div>
          <div className="ml-3 font-semibold">
            {adults} Adults, {children} Children, {rooms} Room
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
                    onClick={() => decrement(setChildren, children)}
                    disabled={children === 0}
                  >
                    <AiOutlineMinus size={24} color="#3258E8" />
                  </button>
                  <span>{children}</span>
                  <button
                    className="w-10 h-10  flex items-center justify-center  hover:bg-[#E8EDFF]"
                    onClick={() => increment(setChildren, children)}
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

        <button
          type="button"
          className="bg-[#3258E8] text-white py-4 px-8 rounded-xl "
          onClick={handleSearch}
        >
          <IoSearchOutline size={28} color="white" />
        </button>
      </div>
    </>
  );
}
