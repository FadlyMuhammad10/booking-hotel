import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoClose, IoRestaurantOutline, IoWifiOutline } from "react-icons/io5";
import { LuCircleParking } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlinePeopleOutline } from "react-icons/md";
import { PiElevatorLight, PiSwimmingPoolDuotone } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";
import { TbAirConditioning, TbRulerMeasure } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/header";
import Search from "../../components/search";
import formatRupiah from "@/utils/formatRupiah";
import { getRoomsById } from "@/services/guestService";
import { useMutation } from "react-query";

export default function DetailCard() {
  const hotel = useLoaderData();
  console.log("hotel", hotel);

  const [isOpen, setIsOpen] = useState(false);
  const [room, setRoom] = useState({});

  const toggleModalOpen = async (data) => {
    const room = await getRoomsById(data);

    setIsOpen(!isOpen);
    setRoom(room);
  };

  const toggleModalClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <div className="bg-blue-800 w-full h-[204px] relative">
          <Header />
          <div className="container relative top-[100%] -translate-y-1/2 z-10">
            <Search />
          </div>
        </div>

        <div className="container relative flex flex-row gap-8 mt-28 ">
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
                <h2 className="font-semibold">Facilities</h2>
                <div className="inline-flex items-center gap-1 text-[#3258E8] text-sm hover:text-blue-500">
                  <Link to="" className="">
                    See All
                  </Link>
                  <MdKeyboardArrowRight size={20} />
                </div>
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
                <h1 className="text-2xl font-semibold">{hotel?.name}</h1>
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
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: hotel?.description }}
            ></div>
            <div className="my-10">
              <h1 className="text-xl font-semibold" id="room">
                Available Type Rooms
              </h1>
              <Table className="mt-4 border">
                <TableHeader className="bg-gray-100 ">
                  <TableRow>
                    <TableHead className=" border-r font-semibold">
                      Type Room
                    </TableHead>
                    <TableHead className="w-32  border-r font-semibold">
                      Guests
                    </TableHead>
                    <TableHead className="w-56 border-r font-semibold">
                      Price / Night
                    </TableHead>
                    <TableHead className="w-20 border-r">Select Room</TableHead>
                    <TableHead className="w-56 border-r"></TableHead>
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
                            className="font-bold text-lg hover:text-orange-600 cursor-pointer"
                            onClick={() => toggleModalOpen(room._id)}
                          >
                            {room.name}
                          </span>
                        </TableCell>
                        <TableCell className="border-r ">
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: room.capacity }).map(
                              (_, index) => (
                                <IoMdPerson size={20} key={index} />
                              )
                            )}
                          </div>
                        </TableCell>
                        <TableCell className=" border-r text-md font-semibold text-orange-600">
                          {formatRupiah(room.price)}
                        </TableCell>
                        <TableCell className=" border-r ">
                          <Select className="w-full ">
                            <SelectTrigger className="">
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({
                                length: room.roomUnits.length,
                              }).map((_, index) => (
                                <SelectItem key={index} value={index + 1}>
                                  {room.roomUnits[index].roomNumber}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className=" border-r text-center">
                          <button
                            type="button"
                            className="bg-orange-500 text-white py-2 px-6 rounded-xl cursor-pointer font-semibold text-medium"
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
            className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center"
            onClick={toggleModalClose}
          >
            <div
              className="bg-white  p-4 rounded-lg shadow-lg w-[60%] "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-lg font-semibold text-black">
                  {room?.name}
                </h2>
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
                              // src="/assets/images/hotel-1.jpg"
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
                      className="text-sm"
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
