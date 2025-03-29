import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DynamicSelect({
  items = [],
  selectedValue,
  placeholder = "Select an option",
  onChange,
  valueKey = "_id",
  labelKey = "label",
}) {
  return (
    <Select className={`w-full  `} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={selectedValue || placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item[valueKey]} value={item[valueKey]}>
            {item[labelKey]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
