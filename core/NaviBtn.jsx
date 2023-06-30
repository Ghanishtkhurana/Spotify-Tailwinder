import React from "react";

const NaviBtn = ({ icon }) => {
  return (
    <button
      type="button"
      className="flex justify-center items-center h-[40px] w-[40px]  rounded-full bg-[#171717]"
    >
      {icon}
    </button>
  );
};

export default NaviBtn;
