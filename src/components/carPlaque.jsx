import React from "react";
import { convert_english_numbers_to_persisn } from "./helper";

const CarPlaque = ({ item }) => {
  let plaqueNumber = convert_english_numbers_to_persisn(item?.value);
  return (
    <div className="flex justify-start">
      <div className="border-2 border-black border-l-gray-400 h-[35px] w-[40px] rounded-r flex flex-col justify-center items-center p-[2px] text-[10px]">
        <small className="">ایران</small>
        <strong className="text-[15px]">
          {plaqueNumber && plaqueNumber.substring(6, 8)}
        </strong>
      </div>
      <strong className="border-y-2 border-black h-[35px] w-[90px] flex flex-col justify-center items-center p-[2px] text-[15px]">
        {plaqueNumber && `${plaqueNumber.substring(3, 6)} ${plaqueNumber.substring(2,3)} ${plaqueNumber.substring(0, 2)}`}
      </strong>
      <div className="border-y-2 border-black border-r-gray-400 bg-plaque bg-cover h-[35px] w-[23px] rounded-l"></div>
    </div>
  );
};
export default CarPlaque;
