import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationInput({
  register,
  errors,
  location,
  setLocation,
}) {
  return (
    <div className="border max-w-max p-4 rounded-md flex items-center relative">
      <div className="bg-[#E8EDFF] p-2 rounded-md">
        <FaLocationDot size={24} color="#3258E8" />
      </div>
      <input
        {...register("location")}
        type="text"
        placeholder="Where Are You Going ?"
        className="ml-3   focus:outline-none placeholder:text-[#848484]"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {errors.location && (
        <span className="text-red-500 text-sm absolute  left-2 bottom-1 translate-x-1/2 error-message">
          {errors?.location?.message}
        </span>
      )}
    </div>
  );
}
