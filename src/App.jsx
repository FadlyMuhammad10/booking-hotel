import { useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import Header from "./components/header";
import CardItem from "./components/cardItem";

function App() {
  const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
  const [startDate, endDate] = dateRange;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [minDate, setMinDate] = useState(new Date());

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isOpenDropdownGuest, setIsOpenDropdownGuest] = useState(false);

  const toggleDropdownGuest = () => {
    setIsOpenDropdownGuest(!isOpenDropdownGuest);
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <>
      <div className="relative">
        <div className="w-full h-[704px]">
          <img
            src="assets/images/banner.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-[30%]"></div>
        </div>
        <Header />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="text-[#BBBDC3] text-xl font-semibold mb-2">
            Life Is Too Short For A Wide And Beautiful World
          </h3>
          <h1 className="text-white text-6xl font-bold">
            Enjoy Your Tour With Heavenly <br /> Experience You{"'"}ve Never Had
          </h1>
        </div>
      </div>

      <div className="container -translate-y-[60%] ">
        <div className="max-w-max inline-flex items-center p-6 translate-y-1  rounded-tr-3xl bg-white z-0">
          <img src="assets/icons/hotel.svg" alt="" />
          <span className="ml-3 text-[#232631]">Hotel</span>
        </div>
        <div className="p-6 shadow-md bg-white rounded-r-3xl rounded-b-3xl flex flex-row justify-between ">
          <div className="border max-w-max p-4 rounded-md flex items-center">
            <div className="bg-[#E8EDFF] p-2 rounded-md">
              <FaLocationDot size={24} color="#3258E8" />
            </div>
            <input
              type="text"
              placeholder="Where Are You Going ?"
              className="ml-3   focus:outline-none placeholder:text-[#848484]"
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
                      className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF]"
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
                      className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF]"
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
                      className="w-10 h-10   flex items-center justify-center  hover:bg-[#E8EDFF]"
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
          >
            <IoSearchOutline size={28} color="white" />
          </button>
        </div>
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
              className="bg-white text-[#7B7B7B] py-4 px-8 rounded-xl font-medium"
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
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <CardItem key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
