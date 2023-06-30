import React from "react";

const LibraryCard = ({index,HeaderTxt="",contentTxt="",BtnTxt="",classname=""}) => {
  return (
    <div style={{transitionDelay : `${index+3}00ms`}} className={`bg-[#242424] p-4 rounded-lg flex flex-col gap-4 items-start text-xs ${classname}`}>
      <div className="flex flex-col gap-1">
        <p className="text-white text-sm font-bold">
          {HeaderTxt}
        </p>
        <p className="text-xs">{contentTxt}</p>
      </div>
      <button className="bg-white text-black text-xs font-bold p-2 rounded-2xl w-[120px]">
        {BtnTxt}
      </button>
    </div>
  );
};

export default LibraryCard;
