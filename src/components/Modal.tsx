import React, { Dispatch, SetStateAction } from "react";
import { Chapter, Reciter } from "../../typings";
import ReactAudioPlayer from "react-audio-player";

import { XMarkIcon } from "@heroicons/react/24/outline";
interface modalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chapterDetail: Chapter | undefined;
  reciterDetail: Reciter | undefined;
}
const Modal = ({ setIsOpen, reciterDetail, chapterDetail }: modalProps) => {
  function url(id: number | undefined, server: string | undefined) {
    return `${server}/${("00" + id).slice(-3)}.mp3`;
  }

  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-main">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-8 z-50 text-white bg-green-400 w-10 h-10 flex justify-center items-center rounded-full"
      >
        <XMarkIcon className="cursor-pointer" />
      </div>
      <div className="relative z-20 flex justify-center items-center h-screen w-screen">
        {reciterDetail ? (
          <ReactAudioPlayer
            src={url(chapterDetail?.id, reciterDetail?.Server)}
            autoPlay
            controls
            className="absolute"
          />
        ) : (
          <p className="text-white">Please Select Your Favourite Reciter</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
