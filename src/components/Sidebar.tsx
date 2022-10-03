import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import ModeContext from "../store/mode-context";

const Sidebar = () => {
  const { isMode, switchHandler } = useContext(ModeContext);
  return (
    <div
      className={`sticky basis-[10%] sm:basis-[5%] h-screen  top-0 left-0 bg-white ${
        isMode && "bg-[#1a222c]"
      } flex flex-col justify-between items-center border-b-2 border-solid p-2`}
    >
      <div className="flex-1">
        <img
          src="./Logo.png"
          alt="quran"
          className="w-[50px] h-[50px] object-cover"
        />
      </div>
      <div className="w-5 h-5">
        <HeartIcon className={`${isMode && "text-white"}`} />
      </div>
      <div className="w-5 h-5 my-2 cursor-pointer" onClick={switchHandler}>
        {isMode ? (
          <SunIcon className={`${isMode && "text-white"}`} />
        ) : (
          <MoonIcon className={`${isMode && "text-white"}`} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
