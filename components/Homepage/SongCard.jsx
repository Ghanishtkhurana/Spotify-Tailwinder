import React from "react";
import Image from "next/image";

const SongCard = ({ ImageSrc = "", Title = "" }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#1f1f1f] hover:bg-[#272727] transition ease-in-out delay-150 h-[240px] p-3 rounded-lg">
      <div>
        <Image src={ImageSrc} height={150} width={150} alt="Song Image" className="rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold text-sm">{Title}</p>
        <p className="text-[#B3B3B3] text-xs font-semibold">Spotify</p>
      </div>
    </div>
  );
};

export default SongCard;
