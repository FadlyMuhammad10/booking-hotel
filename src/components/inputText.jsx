import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function InputText({
  type,
  placeholder,
  name,
  label,
  disabled = false,
  register = () => {},
}) {
  return (
    <div>
      <Label htmlFor={name} className=" text-sm">
        {label}
      </Label>
      <Input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-full focus:outline-none border-[#7186A0] focus:text-black "
        disabled={disabled}
      />
    </div>
  );
}
