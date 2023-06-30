"use client";
import { TbBrandGoogleHome } from "react-icons/tb";
import { LuListMusic } from "react-icons/lu";
import { TbBrandAirtable } from "react-icons/tb";
import { TbCookie } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { TbWebhook } from "react-icons/tb";
import { useState } from "react";
import LibraryCard from "@/core/LibraryCard";

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

const Sidebar = ({ children }) => {
  const [selectText, setSelectText] = useState(sideIcon[0].text);
  return (
    <div className="flex gap-1 bg-black h-screen">
      {/* sidebar */}
      <div className="bg-black w-[250px] flex flex-col p-2 gap-3 overflow-hidden">
        {/* one  */}
        <div className="text-white flex gap-3 flex-col bg-[#171717] rounded-lg h-auto p-2 font-semibold">
          {sideIcon.map((el, i) => {
            if (el.text == selectText) {
              return (
                <div
                  key={i}
                  onClick={() => setSelectText(el.text)}
                  className="flex cursor-pointer gap-4 align-middle text-white text-sm"
                >
                  {<el.icon className="mt-1" />}
                  <p>{el.text}</p>
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
                  <p>{el.text}</p>
                </div>
              );
            }
          })}
        </div>
        {/* two */}
        <div className="bg-[#171717] rounded-lg flex flex-col justify-between flex-grow p-2 text-[#B3B3B3] text-sm font-semibold">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <TbBrandAirtable className="m-1" />
                <p>Your Library</p>
              </div>
              <AiOutlinePlus className="m-1" />
            </div>
            {/* middle content  */}
            {/* cards */}
            <div className="flex flex-col gap-2">
              {LibraryCardItems.map((el, i) => {
                return (
                  <LibraryCard
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
            <div className="flex gap-3">
              {LanguageBtn.map((el, i) => {
                return (
                  <div key={i} className="flex px-3 py-1 gap-2 border-2 border-[#B3B3B3] rounded-2xl">
                    {<el.icon className="mt-[2px]" />}
                    <p>{el.text}</p>
                  </div>
                );
              })}
            </div>
            {/* sidebar footer  */}
            <div className="flex gap-2">
              <TbCookie className="mt-[2px]" />
              <p>Cookie</p>
            </div>
          </div>
        </div>
      </div>

      {/* home  */}
      <div className="flex-grow rounded-lg overflow-hidden m-2">{children}</div>
    </div>
  );
};

export default Sidebar;
