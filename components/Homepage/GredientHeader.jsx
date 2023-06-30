import React from "react";
import NaviBtn from "@/core/NaviBtn";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdArrowCircleDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const GredientHeader = () => {
  return (
    <div
      className="bg-gradient-to-b from-green-500 from-10% text-[#B3B3B3] h-[80px] flex justify-between shadow-lg shadow-gray-900 z-10"
    >
      <div className="flex gap-2 m-4">
        <NaviBtn icon={<MdKeyboardArrowLeft size={30} />} />
        <NaviBtn icon={<MdKeyboardArrowRight size={30} />} />
      </div>
      <div className="flex gap-2 m-4">
        <div className="bg-white text-black text-xs font-bold p-2 rounded-full w-[120px] h-[40px] flex gap-2 items-center justify-center align-middle">
          Explore Premium
        </div>
        <div className="bg-[#171717] text-white text-xs font-bold p-2 rounded-full w-[120px] h-[40px] flex gap-1 items-center justify-center align-middle">
          <MdArrowCircleDown size={20} />
          <p>Install App</p>
        </div>
      </div>
    </div>
  );
};

export default GredientHeader;
