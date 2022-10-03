import React, { SetStateAction, Dispatch } from "react";
import { Chapter, Reciter } from "../../typings";
import Chapters from "../components/Chapters";
import Reciters from "../components/Reciters";
interface homeScreenProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chapters: Chapter[];
  chapterHandler: (chapter: Chapter) => void;
  reciters: Reciter[];
  reciterHandler: (reciter: Reciter) => void;
}
const HomeScreen = ({
  setIsOpen,
  chapters,
  chapterHandler,
  reciters,
  reciterHandler,
}: homeScreenProps) => {
  return (
    <div className="h-full  max-w-[90%] sm:max-w-[95%]">
      <Reciters reciters={reciters} reciterHandler={reciterHandler} />
      <Chapters
        setIsOpen={setIsOpen}
        chapters={chapters}
        chapterHandler={chapterHandler}
      />
    </div>
  );
};

export default HomeScreen;
