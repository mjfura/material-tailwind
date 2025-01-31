/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export default function CountriesSelect() {
  const { countries } = useCountries();

  return (
    <div className="w-72">
      <Select
        size="lg"
        label="Select Country"
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            className: "flex items-center px-0 gap-2 pointer-events-none",
          })
        }
      >
        {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
