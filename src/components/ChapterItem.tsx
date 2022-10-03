import { Chapter } from "../../typings";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import ModeContext from "../store/mode-context";
const ChapterItem: React.FC<{
  chapter: Chapter;
  chapterHandler: (chapter: Chapter) => void;
}> = ({ chapter, chapterHandler }) => {
  const { isMode } = useContext(ModeContext);
  return (
    <div
      onClick={() => {
        chapterHandler(chapter);
      }}
      className={`bg-white p-2 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-75 delay-75  rounded-xl ${
        isMode && "bg-[#1a222c]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full p-1 text-center h-10 w-10  flex items-center justify-center  bg-green-100 ${
            isMode && "bg-white"
          } text-green-400`}
        >
          {chapter.id}
        </span>
        <div className="w-5 h-5 b">
          <HeartIcon className="text-green-400 cursor-pointer" />
        </div>
      </div>
      <h2 className={`my-2 ${isMode && "text-white"}`}>
        {chapter.name_simple}
      </h2>
      <span className="text-gray-200 text-sm font-md">
        {chapter.translated_name.name}
      </span>
    </div>
  );
};

export default ChapterItem;
