import React from "react";
import CarPlaque from "./carPlaque";
import { convert_english_numbers_to_persisn } from "./helper";

const ModelAndPlaque = ({ item }) => {
   
  const value = item?.value
    ? convert_english_numbers_to_persisn(item?.value)
    : "";
  return (
    <div key={item?.name} className={`mx-5 text-[18px] whitespace-nowrap`}>
      {item?.name === "col2" ? (
        <CarPlaque item={item} />
      ) : (
        <div>{`${item?.label}${item?.label ? ": " : ""} ${value}`}</div>
      )}
    </div>
  );
};

export default ModelAndPlaque;
