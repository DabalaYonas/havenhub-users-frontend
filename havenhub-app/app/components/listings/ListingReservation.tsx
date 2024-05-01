"use client";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";
import { useState } from "react";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = () => {

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const onSubmit = () =>{

  }
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {300}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        // disabledDates={disabledDates}
        onChange={(value) => setDateRange(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button 
        // disabled={disabled}
         label="Reserve" 
        onClick={onSubmit} 
        />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${200}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
