"use client";

import useCities, { ethioCities } from "@/app/hooks/useCities";
import Select from "react-select";

export type CitySelectValue = {
  label: string;
  latlng: number[];
  value: number;
};

interface CountrySelectProps {
  value?: CitySelectValue;
  onChange: (value: CitySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const  getAll = ethioCities;

  return (
    <div className="z-10">
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll}
        value={value}
        onChange={(value) => onChange(value as CitySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>
              {option.label}
              {/* <span className="text-neutral-800 ml-1">{option.region}</span> */}
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
