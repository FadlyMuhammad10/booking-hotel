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
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Search from "../../components/search";

export default function DetailCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="">
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
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <img
                        src="/assets/images/hotel-1.jpg"
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
          <div className="grid grid-rows-2 gap-4 w-[30%]">
            <div className="border rounded-lg  overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3953.407469088419!2d110.3553055!3d-7.746532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2d747cc8d%3A0xba7c703a016a750e!2sUniversitas%20Teknologi%20Yogyakarta!5e0!3m2!1sid!2sid!4v1735112732887!5m2!1sid!2sid"
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
                <h1 className="text-2xl font-semibold">Hotel A</h1>
                <span className="flex flex-row gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
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
                Select Room
              </button>
            </div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos
              sunt dolor quae sapiente aspernatur reiciendis consequuntur, at
              provident esse tempore quibusdam eum illo dolores necessitatibus
              nesciunt dignissimos? Earum, officiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id eos sunt dolor quae sapiente
              aspernatur reiciendis consequuntur, at provident esse tempore
              quibusdam eum illo dolores necessitatibus nesciunt dignissimos?
              Earum, officiis. <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magni cupiditate ipsum ut necessitatibus laborum? Voluptas itaque
              natus non, maxime, ea sit unde sint eos perferendis id quae
              officiis dolorem. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. A unde eaque animi itaque rerum quam est
              distinctio quibusdam in nisi dolor, officiis, dolorem, fuga modi
              vero nihil harum! Iure, nam?.
            </div>
            <div className="my-10">
              <h1 className="text-xl font-semibold">Available Type Rooms</h1>
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
                  <TableRow>
                    <TableCell className=" border-r ">
                      <span
                        className="font-bold text-lg hover:text-orange-600 cursor-pointer"
                        onClick={toggleModalOpen}
                      >
                        Standard Room
                      </span>
                    </TableCell>
                    <TableCell className="border-r ">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 2 }).map((_, index) => (
                          <IoMdPerson size={20} key={index} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className=" border-r text-md font-semibold text-orange-600">
                      $100.00
                    </TableCell>
                    <TableCell className=" border-r ">
                      <Select className="w-full ">
                        <SelectTrigger className="">
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <SelectItem key={index} value={index + 1}>
                              {index + 1}
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
                  Standar Room
                </h2>
                <button onClick={toggleModalClose}>
                  <IoClose size={20} />
                </button>
              </div>
              <div className="mt-4 flex flex-row">
                <div className="w-[63%] rounded-sm">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="">
                            <img
                              src="/assets/images/hotel-1.jpg"
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
                    <div className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos recusandae error tempore beatae dolore
                      molestiae ut illum voluptatum mollitia obcaecati ad, dolor
                      nihil quaerat a quis repellat repellendus cumque
                      doloremque! Quia laudantium iste atque, aspernatur, optio
                      asperiores quis vero unde, nesciunt cupiditate soluta illo
                      voluptatum molestias magnam! Blanditiis hic tempore earum
                      tenetur ipsum? In quas quo corrupti ex ut impedit. Et
                      assumenda dolorum consequatur maxime soluta perspiciatis
                      ratione. Id adipisci debitis molestiae odio consectetur
                      voluptatem accusamus earum, suscipit aut ex voluptas,
                      necessitatibus quis dolores provident, sint facere tempore
                      rem consequuntur. Amet vitae nulla nemo magnam et eius
                      aliquam dignissimos placeat ut suscipit rem, asperiores ab
                      incidunt quaerat perferendis voluptates voluptatibus optio
                      neque quasi. Culpa quae porro nemo modi dolores corrupti?
                    </div>
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
