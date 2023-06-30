"use client";
import NaviBtn from "@/core/NaviBtn";
import Onediv from "./Onediv";
import Twodiv from "./Twodiv";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleTheAnimate } from "@/slice/SidebarSlice";

const Sidebar = ({ children }) => {
  const { isOpen } = useSelector((store) => store.sidebarSlice);
  const dispatch = useDispatch();
  const handleTheSideBtn = () => {
    dispatch(handleTheAnimate());
    console.log("open=>", isOpen);
  };
  return (
    <div className="flex gap-1 bg-black h-screen">
      {/* sidebar */}
      <div
        style={{ transitionDelay: "500ms" }}
        className={`relative flex z-10 bg-black ${
          isOpen
            ? "transition-[width] duration-300 w-[250px]"
            : "transition-[width] duration-300 w-[60px]"
        }`}
      >
        <div className="flex flex-col p-2 gap-3 overflow-hidden">
          <Onediv />
          <Twodiv />
        </div>
        <div onClick={handleTheSideBtn}>
          <NaviBtn
            classname={`h-[40px] w-[40px] ${
              isOpen ? "rotate-0" : "-rotate-180"
            } duration-300 bg-white absolute right-[-20px] top-[30px]`}
            icon={<MdKeyboardArrowRight size={30} />}
          />
        </div>
      </div>
      {/* home  */}
      <div className="flex-grow rounded-lg overflow-hidden z-0 m-2">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
