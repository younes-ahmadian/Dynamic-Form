import React from "react";
import { convert_english_numbers_to_persisn } from "./helper";

const DetailsInfo = ({ item }) => {
  const value = item?.value
    ? convert_english_numbers_to_persisn(item?.value)
    : "";
  return (
    <div key={item?.name} className={`flex justify-start mx-5 mt-3 whitespace-nowrap text-[12px] basis-1/5`}>
      {`${item?.label}${item?.label ? ": " : ""} ${value}`}
    </div>
  );
};

export default DetailsInfo;
