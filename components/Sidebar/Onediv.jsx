"use client";
import React, { useState } from "react";
import { TbBrandGoogleHome } from "react-icons/tb";
import { LuListMusic } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const sideIcon = [
  {
    text: "Home",
    icon: TbBrandGoogleHome,
  },
  {
    text: "Listen",
    icon: LuListMusic,
  },
  {
    text: "Search",
    icon: FiSearch,
  },
];

const Onediv = () => {
  const [selectText, setSelectText] = useState(sideIcon[0].text);
  const { isOpen } = useSelector((store) => store.sidebarSlice);

  return (
    <div className="text-white bg-[#171717] rounded-lg p-2 font-semibold relative">
      <div className="flex gap-3 flex-col h-auto min-h-[80px]">
        {sideIcon.map((el, i) => {
          if (el.text == selectText) {
            return (
              <div
                key={i}
                onClick={() => setSelectText(el.text)}
                className="flex cursor-pointer gap-4 align-middle text-white text-sm"
              >
                {<el.icon className="mt-1" />}
                <p
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`${
                    isOpen
                      ? "transition duration-300"
                      : "opacity-0 translate-x-20 duration-300"
                  }`}
                >
                  {el.text}
                </p>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                onClick={() => setSelectText(el.text)}
                className="flex cursor-pointer gap-4 align-middle text-[#B3B3B3] text-sm font-semibold"
              >
                {<el.icon className="mt-1" />}
                <p
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`${
                    isOpen
                      ? "transition duration-300"
                      : "opacity-0 translate-x-20 duration-300"
                  }`}
                >
                  {el.text}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Onediv;
