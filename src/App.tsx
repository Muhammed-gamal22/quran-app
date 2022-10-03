import { useQuery } from "react-query";
import Sidebar from "./components/Sidebar";
import { useContext, useState, useEffect } from "react";
import Modal from "./components/Modal";
import { Chapter, Reciter } from "../typings";
import ModeContext from "./store/mode-context";
import HomeScreen from "./pages/HomeScreen";
import StartingScreen from "./pages/StartingScreen";
const fetchChapters = () => {
  return fetch("https://api.quran.com/api/v4/chapters").then((res) =>
    res.json()
  );
};
const fetchReciters = () => {
  return fetch("https://mp3quran.net/api/_english.php").then((res) =>
    res.json()
  );
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [reciterDetail, setReciterDetail] = useState<Reciter>();
  const [chapterDetail, setChapterDetail] = useState<Chapter>();
  const { data } = useQuery("chapters", fetchChapters);
  const { data: reciters } = useQuery("reciters", fetchReciters);
  const { isMode } = useContext(ModeContext);
  const [isStarting, setIsStarting] = useState(true);
  const reciterHandler = (reciter: Reciter) => {
    setReciterDetail(reciter);
  };
  const chapterHandler = (chapter: Chapter) => {
    setChapterDetail(chapter);
  };

  useEffect(() => {
    setTimeout(() => setIsStarting(false), 5000);
  });

  return (
    <div className={` max-w-full  bg-[#eee] ${isMode && "bg-[#212C39]"}`}>
      {isStarting ? (
        <StartingScreen isStarting={isStarting} />
      ) : (
        <div className="flex">
          <Sidebar />
          <HomeScreen
            setIsOpen={setIsOpen}
            chapters={data?.chapters}
            chapterHandler={chapterHandler}
            reciters={reciters?.reciters}
            reciterHandler={reciterHandler}
          />
        </div>
      )}
      {/* <Chapters /> */}

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          chapterDetail={chapterDetail}
          reciterDetail={reciterDetail}
        />
      )}
    </div>
  );
}

export default App;
