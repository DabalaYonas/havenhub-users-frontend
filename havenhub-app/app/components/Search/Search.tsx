"use client";
import useCities, { getCitiesByValue } from "@/app/hooks/useCities";
import useSearchModel from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch, BiCalendar, BiChevronDown, BiUser } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModel();
  const params = useSearchParams();
  // const { getByValue } = getCit();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      console.log(locationValue);
      return getCitiesByValue(parseInt(locationValue))?.label;
    }

    return "Anywhere";
  }, [locationValue]);

  const checkInLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return start.toDateString();
    }

    return "Any Week";
  }, [startDate, endDate]);

  const checkOutLabel = useMemo(() => {
    if (startDate && endDate) {
      const end = new Date(endDate as string);

      return end.toDateString();
    }

    return "Check In";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto px-6 py-4 rounded-xl shadow hover:shadow-md transition cursor-pointer max-w-screen-xl"
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="w-72 bg-gray-100 py-2 rounded-md text-sm font-semibold px-3 "><BiSearch className="inline mr-2" size={20}/>{locationLabel}</div>
        
        <div className="hidden sm:block w-36 bg-gray-100 rounded-md text-sm font-semibold px-3 py-2 flex-1 text-center border-x-[1px]"><BiCalendar className="inline mr-2" size={20}/>{checkInLabel}</div>
        <div className="hidden sm:block w-36 bg-gray-100 rounded-md text-sm font-semibold px-3 py-2 flex-1 text-center border-x-[1px]"><BiCalendar className="inline mr-2" size={20}/>{checkOutLabel}</div>

        <div className="hidden sm:block w-56 bg-gray-100 rounded-md text-sm font-semibold px-3 py-2 flex-1 text-center border-x-[1px]"><BiUser className="inline mr-2" size={20}/>{guestLabel}<BiChevronDown className="inline ml-2" size={20}/></div>
        <div className="px-5 py-1.5 company-bg-color rounded-lg text-white">
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
