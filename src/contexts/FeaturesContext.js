import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const featuresContext = createContext();

export const FeaturesContextProvider = function ({ children }) {
  const [isAmazingView, changeIsAmazingView] = useInput(true);
  const [isBeachView, changeIsBeachView] = useInput(true);
  const [isCamp, changeIsCamp] = useInput(true);
  const [isCold, changeIsCold] = useInput(true);
  const [isCountryside, changeIsCountryside] = useInput(true);
  const [isDesign, changeIsDesign] = useInput(true);
  const [isFarmHouse, changeIsFarmHouse] = useInput(true);
  const [isHandicapped, changeIsHandicapped] = useInput(true);
  const [isNew, changeIsNew] = useInput(true);
  const [isPool, changeIsPool] = useInput(true);
  const [isTinyHouse, changeIsTinyHouse] = useInput(true);
  const [isTrending, changeIsTrending] = useInput(true);
  const [isTropical, changeIsTropical] = useInput(true);
  const [isVilla, changeIsVilla] = useInput(true);

  return (
    <featuresContext.Provider
      value={{
        amazingView: [isAmazingView, changeIsAmazingView],
        beachView: [isBeachView, changeIsBeachView],
        camp: [isCamp, changeIsCamp],
        cold: [isCold, changeIsCold],
        countryside: [isCountryside, changeIsCountryside],
        design: [isDesign, changeIsDesign],
        farmhouse: [isFarmHouse, changeIsFarmHouse],
        handicapped: [isHandicapped, changeIsHandicapped],
        new: [isNew, changeIsNew],
        pool: [isPool, changeIsPool],
        tinyHouse: [isTinyHouse, changeIsTinyHouse],
        trending: [isTrending, changeIsTrending],
        tropical: [isTropical, changeIsTropical],
        villa: [isVilla, changeIsVilla],
      }}
    >
      {children}
    </featuresContext.Provider>
  );
};

export default featuresContext;
