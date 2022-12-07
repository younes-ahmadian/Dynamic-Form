import React from "react";
import DetailsInfo from "./detailsInfo";
import ModelAndPlaque from "./modelAndPlaque";
import DropDown from "./dropDown";

const Box = ({ data }) => {
  return (
    <>
      {data["carsList"]?.map(car => (
        <div className="flex relative" key={Object.keys(car)}>
          <div
            className={`flex justify-center items-center mb-3 w-[5%] lg:w-[3%] rounded-r-[13px] ${
              car?.isActive === true ? "bg-[#11DA00]" : "bg-[#F3B001]"
            }`}
          >
            <p className="whitespace-nowrap rotate-90 text-white">
              {car?.isActive === true ? "فعال" : "غیر فعال"}
            </p>
          </div>

          <div className="absolute top-[20px] left-[10px]">
            <DropDown />
          </div>
          <div
            key={Object.keys(car)}
            className="flex flex-col  border-1 border-gray-500 shadow-lg bg-white mb-3 rounded-l-[13px] w-full p-3"
          >
            <div className="flex">
              {car[Object.keys(car)[0]]?.map((item, index) => {
                if (item?.label === "")
                  return <ModelAndPlaque key={index} item={item} />;
              })}
            </div>

            <div className="flex flex-wrap mt-3">
              {car[Object.keys(car)[0]]?.map((item, index) => {
                if (item?.label !== "")
                  return <DetailsInfo key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
