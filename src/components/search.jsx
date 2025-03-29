import { searchSchema } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import DatePickerInput from "./datePickerInput";
import GuestDropdown from "./guestDropdown";
import LocationInput from "./locationInput";

export default function Search() {
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get("location") || "";
  const capacityParam = searchParams.get("capacity") || 2;
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");

  const [location, setLocation] = useState(locationParam);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const [dateRange, setDateRange] = useState([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)),
  ]); // [startDate, endDate]
  const [startDate, endDate] = dateRange;

  const navigate = useNavigate();

  const [adults, setAdults] = useState(capacityParam);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);

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
    <form onSubmit={handleSubmit(handleSearch)}>
      <div className="p-6 shadow-md bg-white rounded-r-3xl rounded-l-3xl flex flex-row justify-between ">
        <LocationInput
          register={register}
          errors={errors}
          location={location}
          setLocation={setLocation}
        />

        <DatePickerInput dateRange={dateRange} setDateRange={setDateRange} />

        <GuestDropdown
          adults={adults}
          setAdults={setAdults}
          kids={kids}
          setKids={setKids}
          rooms={rooms}
          setRooms={setRooms}
        />

        <button
          type="submit"
          className="bg-[#3258E8] text-white py-4 px-8 rounded-xl "
        >
          <IoSearchOutline size={28} color="white" />
        </button>
      </div>
    </form>
  );
}
