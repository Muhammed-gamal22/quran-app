import React, { useEffect, useState } from "react";

interface modeContextProps {
  isMode: boolean;
  switchHandler: () => void;
}

interface childrenProps {
  children: React.ReactNode;
}

const ModeContext = React.createContext<modeContextProps>({
  isMode: false,
  switchHandler: () => {},
});

export default ModeContext;

function getInitialState() {
  const isMode = localStorage.getItem("mode");
  return isMode ? JSON.parse(isMode) : false;
}

export const ModeContextProvider = ({ children }: childrenProps) => {
  const [isMode, setIsMode] = useState(getInitialState);
  useEffect(() => {
    localStorage.setItem("mode", isMode);
  }, [isMode]);

  const switchHandler = () => {
    setIsMode(() => !isMode);
  };
  return (
    <ModeContext.Provider
      value={{ isMode: isMode, switchHandler: switchHandler }}
    >
      {children}
    </ModeContext.Provider>
  );
};
