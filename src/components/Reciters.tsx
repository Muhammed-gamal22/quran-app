import React from "react";
import { Reciter } from "../../typings";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef, useContext } from "react";
import ModeContext from "../store/mode-context";
interface recitersProps {
  reciters: Reciter[];
  reciterHandler: (reciter: Reciter) => void;
}
const Reciters = ({ reciters, reciterHandler }: recitersProps) => {
  const [selectedReciter, setSelectedReciter] = useState("");
  const rowRef = useRef<HTMLDivElement>(null);
  const { isMode } = useContext(ModeContext);
  const moveHandler = (direction: string) => {
    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef?.current;
      const ScrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: ScrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="relative max-w-[92%] md:max-w-[95%] sm:ml-2 top-0 left-0  mb-4">
      <ChevronLeftIcon
        onClick={() => moveHandler("left")}
        className={`w-5 cursor-pointer h-5 absolute left-2 top-3.5 bg-white text-black rounded-full ${
          isMode && "!bg-[#1a222c] !text-white"
        }`}
      />
      <div
        ref={rowRef}
        className="gap-x-3 overflow-scroll flex items-center justify-center   h-[50px] ml-8 mt-8 scrollbar-hide"
      >
        {reciters?.map((reciter) => (
          <div
            className={`min-w-fit cursor-pointer basis-auto shrink-1  ${
              isMode && "text-white"
            } transition-all duration-75 delay-75  ${
              selectedReciter === reciter.id && "!text-green-400"
            }`}
            onClick={() => {
              reciterHandler(reciter);
              setSelectedReciter(reciter.id);
            }}
          >
            {reciter?.name}
          </div>
        ))}
      </div>
      <ChevronRightIcon
        onClick={() => moveHandler("right")}
        className={`cursor-pointer w-5 h-5 absolute -right-6 top-4 bg-white rounded-full ${
          isMode && "!bg-[#1a222c] !text-white"
        }`}
      />
    </div>
  );
};

export default Reciters;
