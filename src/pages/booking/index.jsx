import DatePickerInput from "@/components/datePickerInput";
import DynamicSelect from "@/components/dynamicSelect";
import Header from "@/components/header";
import InputText from "@/components/inputText";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import formatRupiah from "@/utils/formatRupiah";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaToilet, FaWifi } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { MdOutlineEventNote, MdRoomService } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export default function BookingPage() {
  const { user } = useContext(AuthContext);

  const [searchParams] = useSearchParams();

  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver({
      name: z.string(),
      email: z.string().email("Invalid email address").max(50),
    }),
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
    },
  });

  const [selectedMobileNumber, setSelectedMobileNumber] = useState("");

  const [dateRange, setDateRange] = useState([
    new Date(startDate),
    new Date(endDate),
  ]);

  return (
    <div className="block bg-customGray">
      <Header classNames="bg-blue-800" />
      <form>
        <div className="container h-screen py-16">
          <div className=" h-full   rounded-md w-[75%] mx-auto">
            <h1 className="text-2xl font-semibold">Booking Details</h1>
            <div className="mt-4 flex flex-row  items-start">
              <div className="flex flex-col">
                <div className=" bg-white shadow-sm  rounded-md  flex flex-col ">
                  <div className="p-4 font-semibold">Hotel A</div>
                  <div className="w-[375px]">
                    <img
                      src="assets/images/hotel-1.jpg"
                      alt=""
                      className="w-full h-[150px] object-cover object-center "
                    />
                  </div>
                  <div className="p-4 mt-2">
                    <span className="font-semibold">Deluxe Room</span>
                  </div>
                  <div className="flex flex-col gap-2 px-4">
                    <div className="flex flex-row items-center  text-gray-400">
                      <IoMdPerson />
                      <span className="ml-2 text-sm">2 Guest</span>
                    </div>
                    <div className="flex flex-row items-center  text-gray-400">
                      <IoBed />
                      <span className="ml-2 text-sm">Queen Bad</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center  text-gray-400">
                      <FaWifi />
                      <MdRoomService />
                      <FaToilet />
                    </div>
                  </div>
                  <div className="border-b my-4"></div>
                  <div className="px-4 pb-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                      <RiFileList3Line />
                      <span className="text-sm font-semibold">Room Price</span>
                    </div>
                    <div className="font-semibold text-orange-600">
                      {formatRupiah(1000000)}
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-sm  rounded-md p-4 flex flex-col mt-6">
                  <div className="inline-flex items-center">
                    <MdOutlineEventNote />
                    <span className="font-semibold ml-2">Cancel Policy</span>
                  </div>
                  <div className="flex flex-col mt-4 gap-2">
                    <div className="flex flex-row items-center gap-2 text-gray-500 font-bold">
                      <FaRegCheckCircle />
                      <span className="text-sm">
                        Reservasion is Non Refundable
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-gray-500 font-bold">
                      <FaRegCheckCircle />
                      <span className="text-sm">
                        Non Reschedulable and Non Cancellable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full ml-6">
                <div className="flex flex-col">
                  <div className=" bg-white shadow-sm  rounded-md p-4 flex flex-col">
                    <div className=" font-semibold">Customer Details</div>
                    <div className="flex flex-col mt-4 gap-4">
                      <InputText
                        register={register}
                        label={"Full Name"}
                        name={"name"}
                        type={"text"}
                        placeholder={"John Doe"}
                      />
                      <InputText
                        register={register}
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"oBk3T@example.com"}
                      />
                      <div className="flex flex-row items-end justify-between">
                        <div className="w-1/3">
                          <DynamicSelect
                            items={[
                              { value: "+62", label: "Indonesia (+62)" },
                              { value: "+1", label: "United States (+1)" },
                              { value: "+91", label: "India (+91)" },
                            ].sort((a, b) => a.label.localeCompare(b.label))}
                            onChange={(value) => {
                              console.log(value);
                              setSelectedMobileNumber(value);
                            }}
                            selectedValue={selectedMobileNumber}
                            labelKey="label"
                            valueKey="value"
                            placeholder={"Mobile Number"}
                          />
                        </div>
                        <InputText
                          label={"Phone Number"}
                          name={"phone"}
                          type={"text"}
                          placeholder={"812345678"}
                        />
                        <InputText
                          label={"Number of Room"}
                          name={"unit"}
                          type={"text"}
                          placeholder={"401"}
                          disabled={true}
                        />
                      </div>
                      <DatePickerInput
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className=" bg-white shadow-sm  rounded-md p-4 flex flex-col mt-6">
                    <div className=" font-semibold">Payment Details</div>
                    <div className="flex flex-col mt-4 gap-4">
                      <div className="flex flex-row justify-between">
                        <p>Room Price</p>
                        {formatRupiah(1000000)}
                      </div>
                      <div className="flex flex-row justify-between">
                        <p>
                          Tax {"("}10%{")"}
                        </p>
                        {formatRupiah(1000000)}
                      </div>
                      <div className="border-b" />
                      <div className="flex flex-row justify-between">
                        <p className="font-semibold">Total</p>
                        <span className="font-semibold text-orange-600">
                          {formatRupiah(1000000)}
                        </span>
                      </div>
                      <Button
                        variant={"default"}
                        size={"lg"}
                        onClick={() => {
                          console.log("Continue to Payment");
                        }}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
