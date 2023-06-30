import React from "react";
import SongCard from "./SongCard";

const SongDiv = ({Arr=undefined,HeadTxt=""}) => {
  return (
    <div className="flex flex-col gap-6 m-4">
      <p className="text-white font-bold text-xl">
        {HeadTxt}
      </p>
      {/* song Cards */}
      <div className="flex gap-5">
        {Arr && Arr.map((el, i) => {
          return <SongCard key={i} ImageSrc={el.image} Title={el.songTitle} />;
        })}
      </div>
    </div>
  );
};

export default SongDiv;
