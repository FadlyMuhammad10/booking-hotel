import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DynamicSelect from "@/components/dynamicSelect";
import { Button } from "@/components/ui/button";
import { getRoomsById } from "@/services/guestService";
import formatRupiah from "@/utils/formatRupiah";
import { useState } from "react";
import { IoClose, IoRestaurantOutline, IoWifiOutline } from "react-icons/io5";
import { LuCircleParking } from "react-icons/lu";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { PiElevatorLight, PiSwimmingPoolDuotone } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";
import { TbAirConditioning, TbRulerMeasure } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function DetailCard() {
  const hotel = useLoaderData();
  // console.log("hotel", hotel);

  const [startDate, setStartDate] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [room, setRoom] = useState({});
  const [duration, setDuration] = useState({});

  const navigate = useNavigate();

  const [selectedRoomUnits, setSelectedRoomUnits] = useState({});

  const handleSelectChange = (roomId, unit) => {
    setSelectedRoomUnits((prevSelectedRoomUnits) => ({
      ...prevSelectedRoomUnits,
      [roomId]: unit,
    }));
  };

  const handleDateChange = (e, roomId) => {
    setStartDate((prevStartDate) => ({
      ...prevStartDate,
      [roomId]: e.target.value,
    }));
  };

  const toggleModalOpen = async (data) => {
    const room = await getRoomsById(data);

    setIsOpen(!isOpen);
    setRoom(room);
  };

  const toggleModalClose = () => {
    setIsOpen(false);
  };

  // Fungsi untuk menambah durasi kamar spesifik
  const incrementDuration = (roomId) => {
    setDuration((prevDuration) => ({
      ...prevDuration,
      [roomId]: (prevDuration[roomId] || 0) + 1,
    }));
  };

  const endDate = (startDate, duration) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + duration);
    return date;
  };

  // Fungsi untuk mengurangi durasi kamar spesifik
  const decrementDuration = (roomId) => {
    setDuration((prevDuration) => {
      const currentDuration = prevDuration[roomId] || 0;
      if (currentDuration > 0) {
        return {
          ...prevDuration,
          [roomId]: currentDuration - 1,
        };
      }
      return prevDuration;
    });
  };

  const generateUniqueCode = Math.floor(10000 + Math.random() * 900);

  const handleChooseRoom = async (roomId) => {
    const selectedUnit = selectedRoomUnits[roomId];

    if (!selectedUnit) {
      alert("Please select a room unit first!");
      return;
    }

    // console.log("Selected Hotel ID:", hotel._id);
    // console.log("Selected Room ID:", roomId);
    // console.log("Selected Room Unit Id:", selectedUnit);
    // console.log("Duration:", duration[roomId] || 0);
    // console.log("Start Date:", startDate[roomId]);

    navigate(`/hotel/${hotel._id}/booking`, {
      state: {
        roomId: roomId,
        roomUnitId: selectedUnit,
        duration: duration[roomId] || 0,
        startDate: new Date(startDate[roomId]).toISOString("yyyy-MM-dd"),
        endDate: endDate(startDate[roomId], duration[roomId] || 0).toISOString(
          "yyyy-MM-dd"
        ),
        uniqueCode: generateUniqueCode,
      },
    });
  };

  return (
    <>
      <div>
        <div className="container relative flex flex-row gap-8 mt-16 ">
          <div className="w-[70%] rounded-sm">
            <Carousel className="w-full">
              <CarouselContent>
                {hotel.images.map((hotel, i) => (
                  <CarouselItem key={i}>
                    <div className="">
                      <img
                        src={hotel?.image_url}
                        alt="image hotel"
                        className="w-full h-[500px] object-cover rounded-sm"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 translate-x-1/2 " />
              <CarouselNext className="absolute right-0 -translate-x-1/2 " />
            </Carousel>
          </div>
          <div className="grid grid-rows-2 gap-4 w-[30%]">
            <div className="border rounded-lg  overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${hotel?.latitude},${hotel?.longitude}&hl=id&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="border rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-[#152C5B]">Facilities</h2>
              </div>
              <div className="grid grid-cols-2  gap-4 items-center ">
                <div className="flex flex-row items-center gap-2 ">
                  <TbAirConditioning size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">AC</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <LuCircleParking size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">Parking</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <IoWifiOutline size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">Wifi</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <PiElevatorLight size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">Elevator</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <IoRestaurantOutline size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">Restaurant</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <PiSwimmingPoolDuotone size={24} className="text-[#3258E8]" />
                  <span className="text-sm ">Swimming Pool</span>
                </div>
                <div className="flex flex-row items-center gap-2 ">
                  <Ri24HoursLine size={24} className="text-[#3258E8]" />
                  <span className="text-sm">24 Hours Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-8 ">
          <div className="max-w-5xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-[#152C5B]">
                  {hotel?.name}
                </h1>
                <span className="flex flex-row gap-1">
                  {Array.from({ length: hotel?.rating }).map((_, index) => (
                    <TiStarFullOutline
                      key={index}
                      size={20}
                      className="text-[#FF9900]"
                    />
                  ))}
                </span>
              </div>
              <button
                type="button"
                className="bg-orange-500 text-white py-2 px-6 rounded-xl cursor-pointer"
              >
                <a href="#room">Select Room</a>
              </button>
            </div>
            <div
              className="mt-4 text-[#848484]"
              dangerouslySetInnerHTML={{ __html: hotel?.description }}
            ></div>
            <div className="my-10">
              <h1 className="text-xl font-semibold text-[#152C5B]" id="room">
                Available Type Rooms
              </h1>
              <Table className="mt-4 border">
                <TableHeader className="bg-gray-100 ">
                  <TableRow>
                    <TableHead className="w-36 border-r font-semibold">
                      Type Room
                    </TableHead>

                    <TableHead className="w-16 border-r font-semibold">
                      Price / Night
                    </TableHead>
                    <TableHead className="w-32  border-r font-semibold">
                      Duration
                    </TableHead>
                    <TableHead className="w-32  border-r font-semibold">
                      Start Date
                    </TableHead>
                    <TableHead className="w-20 border-r">Select Room</TableHead>
                    <TableHead className="w-20 border-r"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hotel?.rooms
                    .filter((room) =>
                      room.roomUnits.some((unit) => unit.status === "available")
                    )
                    .map((room, i) => (
                      <TableRow key={i}>
                        <TableCell className=" border-r ">
                          <span
                            className="font-bold text-lg hover:text-orange-600 cursor-pointer text-[#152C5B]"
                            onClick={() => toggleModalOpen(room._id)}
                          >
                            {room.name}
                          </span>
                        </TableCell>
                        <TableCell className=" border-r text-md font-semibold text-orange-600">
                          {formatRupiah(room.price)}
                        </TableCell>
                        <TableCell className="border-r ">
                          <div className="inline-flex items-center justify-between w-full shadow-sm">
                            <Button
                              variant="primary"
                              size="icon"
                              onClick={() => decrementDuration(room._id)}
                              className="bg-[#E74C3C] text-white "
                            >
                              -
                            </Button>
                            <span className="text-[#152C5B]">
                              {duration[room._id] || 0}
                            </span>
                            <Button
                              variant="primary"
                              size="icon"
                              onClick={() => incrementDuration(room._id)}
                              className="bg-[#1ABC9C] text-white "
                            >
                              +
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className=" border-r text-center">
                          <div className="flex items-center gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#3258E8] overflow-hidden">
                            <img
                              src="/assets/icons/calendar-black.svg"
                              className="w-6 h-6"
                              alt="icon"
                            />
                            <input
                              type="date"
                              onChange={(e) => handleDateChange(e, room._id)}
                              value={startDate[room._id] || ""}
                              name="started_at"
                              className="relative border rounded-sm py-2 px-3 appearance-none outline-none w-full bg-transparent font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                            />
                          </div>
                        </TableCell>

                        <TableCell className=" border-r ">
                          <DynamicSelect
                            items={room.roomUnits}
                            selectedValue={selectedRoomUnits[room._id]}
                            placeholder="Select Unit"
                            onChange={(value) =>
                              handleSelectChange(room._id, value)
                            }
                            valueKey="_id"
                            labelKey="roomNumber"
                          />
                        </TableCell>
                        <TableCell className=" border-r text-center">
                          <button
                            type="button"
                            className="bg-orange-500 text-white py-2 px-6 rounded-xl cursor-pointer font-semibold text-medium"
                            onClick={() => handleChooseRoom(room._id)}
                          >
                            Choose
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center text-[#152C5B]"
            onClick={toggleModalClose}
          >
            <div
              className="bg-white  p-4 rounded-lg shadow-lg w-[60%] "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-lg font-semibold ">{room?.name}</h2>
                <button onClick={toggleModalClose}>
                  <IoClose size={20} />
                </button>
              </div>
              <div className="mt-4 flex flex-row">
                <div className="w-[63%] rounded-sm">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {room.images.map((data, i) => (
                        <CarouselItem key={i}>
                          <div className="">
                            <img
                              src={data.image_url}
                              alt=""
                              className="w-full h-[500px] object-cover rounded-sm"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 translate-x-1/2 " />
                    <CarouselNext className="absolute right-0 -translate-x-1/2 " />
                  </Carousel>
                </div>
                <div className="w-[37%] px-4 overflow-y-scroll max-h-[500px] ">
                  <div className="flex flex-col py-4">
                    <div className="text-sm font-bold mb-3">Info Room</div>
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2">
                        <TbRulerMeasure size={24} />
                        <div className="text-sm ">
                          20 M<sup>2</sup>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <MdOutlinePeopleOutline size={24} />
                        <div className="text-sm ">2 Guests</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-t" />
                  <div className="flex flex-col py-4">
                    <div className="text-sm font-bold mb-3">
                      Facilities Room
                    </div>
                    <ul className="grid grid-cols-2 list-disc pl-4">
                      <li>AC</li>
                      <li>TV</li>
                      <li>Wifi</li>
                      <li>Room Service</li>
                      <li>Meja</li>
                    </ul>
                  </div>
                  <div className="flex border-t" />
                  <div className="flex flex-col py-4">
                    <div className="text-sm font-bold mb-3">
                      Description Room
                    </div>
                    <div
                      className="text-sm text-[#848484]"
                      dangerouslySetInnerHTML={{ __html: room.description }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
