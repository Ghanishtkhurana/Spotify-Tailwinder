import React from "react";
import { TbBrandAirtable } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { TbWebhook } from "react-icons/tb";
import LibraryCard from "@/core/LibraryCard";
import { useSelector } from "react-redux";

const LanguageBtn = [
  {
    text: "English",
    icon: TbWebhook,
  },
  {
    text: "hindi",
    icon: TbWebhook,
  },
];

const LibraryCardItems = [
  {
    HeaderTxt: "Create your own playlist",
    ContentTxt: "It's easy, we'll help you",
    BtnTxt: "Create playlist",
  },
  {
    HeaderTxt: "Let's find some podcasts to follow",
    ContentTxt: " We'll keep you updated on new episodes",
    BtnTxt: "Create playlist",
  },
];

const Twodiv = () => {
  const { isOpen } = useSelector((store) => store.sidebarSlice);

  return (
    <div className="bg-[#171717] rounded-lg flex flex-col justify-between flex-grow p-2 text-[#B3B3B3] text-sm font-semibold">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <TbBrandAirtable className="m-1" />
            <p
              className={`${
                !isOpen
                  ? "opacity-0 translate-x-20 transition duration-300"
                  : "transition duration-300"
              }`}
            >
              Your Library
            </p>
          </div>
          <AiOutlinePlus
            className={`m-1 ${
              !isOpen
                ? "opacity-0 translate-x-20 transition duration-300"
                : "transition duration-300"
            }`}
          />
        </div>
        {/* middle content  */}
        {/* cards */}
        <div className="flex flex-col gap-2">
          {LibraryCardItems.map((el, i) => {
            return (
              <LibraryCard
                index={i}
                classname={`${
                  !isOpen
                    ? `opacity-0 translate-x-20 overflow-hidden transition duration-300 `
                    : "transition duration-300"
                }`}
                key={i}
                HeaderTxt={el.HeaderTxt}
                contentTxt={el.ContentTxt}
                BtnTxt={el.BtnTxt}
              />
            );
          })}
        </div>
        {/* cards  */}
      </div>
      {/* middle content */}
      <div className="flex flex-col gap-2">
        {/* language button */}
        <div
          className={`${
            isOpen
              ? "flex gap-3 transition duration-300"
              : "flex flex-col gap-3 transition duration-300"
          }`}
        >
          {LanguageBtn.map((el, i) => {
            return (
              <div
                key={i}
                className={`${
                  isOpen
                    ? "flex px-3 py-1 gap-2 border-2 border-[#B3B3B3] transition duration-300"
                    : "transition duration-300"
                }  rounded-2xl`}
              >
                {<el.icon className="mt-[2px]" />}
                <p
                  className={`${
                    isOpen
                      ? "transition duration-300"
                      : "transition duration-300 translate-x-20 opacity-0"
                  }`}
                >
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
        {/* sidebar footer  */}
        <div className="flex gap-2">
          <TbCookie className="mt-[2px]" />
          {isOpen && (
            <p
            style={{transitionDelay : "500ms"}}
              className={`${
                isOpen
                  ? "transition duration-300"
                  : "transition duration-300 translate-x-20 opacity-0"
              }`}
            >
              Cookie
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Twodiv;
