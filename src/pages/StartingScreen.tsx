import { BeatLoader } from "react-spinners";
import { CSSProperties } from "react";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  color: "green",
};

interface startingScreenProps {
  isStarting: boolean;
}
const StartingScreen = ({ isStarting }: startingScreenProps) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="./Logo.png"
          alt="quran"
          className="w-[50%] h-[50%] object-cover"
        />
        <BeatLoader
          color="green"
          loading={isStarting}
          cssOverride={override}
          size={10}
        />
      </div>
    </div>
  );
};
export default StartingScreen;
