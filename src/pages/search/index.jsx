import CardItem from "@/components/cardItem";
import FilterAccordion from "@/components/filterAccordion";
import Header from "@/components/header";
import Search from "@/components/search";
import { getHotelsBySearch } from "@/services/guestService";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [hotels, setHotels] = useState([]);
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location");
  const capacity = searchParams.get("capacity");

  const query = `location=${location}&capacity=${capacity}`;

  const [filters, setFilters] = useState({
    rating: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilter = prevFilters[filterType];
      const updatedFilter = currentFilter.includes(value)
        ? currentFilter.filter((item) => item !== value) // Remove value if already selected
        : [...currentFilter, value]; // Add value if not selected

      return {
        ...prevFilters,
        [filterType]: updatedFilter,
      };
      // Log perubahan filter ke console
    });
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotelsBySearch(query);
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [query]);

  const filteredHotels = hotels.filter((hotel) => {
    console.log(hotel);
    const matchRating =
      !filters.rating.length || filters.rating.includes(hotel.rating);

    return matchRating;
  });

  // console.log(hotels);

  return (
    <div className="bg-blue-800 w-full h-[204px] relative">
      <div className="z-50">
        <Header />
      </div>
      <div className="container relative top-[100%] -translate-y-1/2 z-0">
        <Search />
      </div>
      <div
        className={`container relative  ${
          filteredHotels.length === 0 ? "top-[100%]" : "translate-y-[50%]"
        }  flex flex-row items-start  -z-10`}
      >
        <div className="w-1/4 mr-8 ">
          <FilterAccordion
            title={"Rating Filter"}
            filterType="rating"
            options={[5, 4, 3, 2, 1]}
            selectedFilter={filters.rating}
            onChange={handleFilterChange}
          />
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {filteredHotels.length === 0 && (
            <p className="text-red text-center z-50">No hotels found</p>
          )}
          {filteredHotels.map((hotel, i) => (
            <CardItem key={i} data={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
