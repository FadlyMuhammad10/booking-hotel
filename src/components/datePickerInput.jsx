import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function DatePickerInput({
  dateRange,
  setDateRange,
  disabled = false,
}) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [minDate] = useState(new Date());
  const [startDate, endDate] = dateRange;
  return (
    <div
      className="border p-4 rounded-md flex items-center justify-between cursor-pointer relative gap-28"
      onClick={() => setIsDatePickerOpen(!isDatePickerOpen && !disabled)}
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
          <label htmlFor="checkout" className=" text-[#848484] ">
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
  );
}
