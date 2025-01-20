import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { TiStarFullOutline } from "react-icons/ti";

export default function FilterAccordion({
  title,
  filterType,
  options,
  selectedFilter,
  onChange,
}) {
  return (
    <Accordion type="single" collapsible className="border-none mt-0">
      <AccordionItem value={filterType}>
        <AccordionTrigger className="font-semibold first:pt-0">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3 space-y-0 "
              >
                <Checkbox
                  id={`${filterType}-${option}`}
                  checked={selectedFilter.includes(option)}
                  onCheckedChange={() => onChange(filterType, option)}
                />
                <label
                  htmlFor={`${filterType}-${option}`}
                  className="flex flex-row items-center gap-1 capitalize"
                >
                  {typeof option === "number" ? (
                    <>
                      {Array.from({ length: option }).map((_, i) => (
                        <TiStarFullOutline
                          key={i}
                          size={20}
                          className="text-[#FF9900]"
                        />
                      ))}
                    </>
                  ) : (
                    option
                  )}
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
