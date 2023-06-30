"use client";
import GredientHeader from "@/components/Homepage/GredientHeader";
import { SpotiExl, TrendSong, TrySong } from "@/components/Homepage/HomeDummy";
import SongDiv from "@/components/Homepage/SongDiv";

export default function Home() {
  return (
    <div className="flex gap-2 bg-[#171717] h-full flex-col rounded-lg ">
      <GredientHeader />
      {/* Songs main div  */}
      <div className="z-0 overflow-y-scroll scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-green-400 scrollbar-rounded ">
        <SongDiv
          HeadTxt={"Spotify original & exclusive podcasts"}
          Arr={SpotiExl}
        />
        <SongDiv HeadTxt={"Trending now near you"} Arr={TrendSong} />
        <SongDiv HeadTxt={"Try something else"} Arr={TrySong} />
      </div>
    </div>
  );
}
