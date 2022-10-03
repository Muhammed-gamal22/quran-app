import { Chapter } from "../../typings";
import ChapterItem from "./ChapterItem";
import { Dispatch, SetStateAction } from "react";

interface chaptersProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chapters: Chapter[];
  chapterHandler: (chapter: Chapter) => void;
}
const Chapters = ({ setIsOpen, chapters, chapterHandler }: chaptersProps) => {
  return (
    <div onClick={() => setIsOpen(true)} className={`sm:mx-5 rounded p-4`}>
      <div className="grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  grid-cols-2 gap-2">
        {chapters?.map((chapter: Chapter) => (
          <ChapterItem chapter={chapter} chapterHandler={chapterHandler} />
        ))}
      </div>
    </div>
  );
};

export default Chapters;
