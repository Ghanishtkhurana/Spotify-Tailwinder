import React from "react";

const NaviBtn = ({ icon,classname="" }) => {
  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-full ${classname}`}
    >
      {icon}
    </button>
  );
};

export default NaviBtn;
