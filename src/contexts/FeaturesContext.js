import { createContext } from "react";
import useCheckbox from "../custom-hooks/useCheckbox";

const featuresContext = createContext();

export const FeaturesContextProvider = function ({ children }) {
  const [isAmazingView, changeIsAmazingView] = useCheckbox(randomBoolean());
  const [isBeachView, changeIsBeachView] = useCheckbox(randomBoolean());
  const [isCamp, changeIsCamp] = useCheckbox(randomBoolean());
  const [isCold, changeIsCold] = useCheckbox(randomBoolean());
  const [isCountryside, changeIsCountryside] = useCheckbox(randomBoolean());
  const [isDesign, changeIsDesign] = useCheckbox(randomBoolean());
  const [isFarmHouse, changeIsFarmHouse] = useCheckbox(randomBoolean());
  const [isHandicapped, changeIsHandicapped] = useCheckbox(randomBoolean());
  const [isNew, changeIsNew] = useCheckbox(randomBoolean());
  const [isPool, changeIsPool] = useCheckbox(randomBoolean());
  const [isTinyHouse, changeIsTinyHouse] = useCheckbox(randomBoolean());
  const [isTrending, changeIsTrending] = useCheckbox(randomBoolean());
  const [isTropical, changeIsTropical] = useCheckbox(randomBoolean());
  const [isVilla, changeIsVilla] = useCheckbox(randomBoolean());
  const [isPetsFriendly, changeIsPetsFriendly] = useCheckbox(randomBoolean());
  const [isEntireHouse, changeIsEntireHouse] = useCheckbox(randomBoolean());
  const [isSharedRoom, changeIsSharedRoom] = useCheckbox(randomBoolean());
  const [isPrivate, changeIsPrivate] = useCheckbox(randomBoolean());
  const [isKidsFriendly, changeIsKidsFriendly] = useCheckbox(randomBoolean());
  const [isGolf, changeIsGolf] = useCheckbox(randomBoolean());
  const [isBackpackFriendly, changeIsBackpackFriendly] = useCheckbox(
    randomBoolean()
  );

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
        petsFriendly: [isPetsFriendly, changeIsPetsFriendly],
        entireHouse: [isEntireHouse, changeIsEntireHouse],
        sharedRoom: [isSharedRoom, changeIsSharedRoom],
        private: [isPrivate, changeIsPrivate],
        kidsFriendly: [isKidsFriendly, changeIsKidsFriendly],
        golf: [isGolf, changeIsGolf],
        backpackFriendly: [isBackpackFriendly, changeIsBackpackFriendly],
      }}
    >
      {children}
    </featuresContext.Provider>
  );
};

export default featuresContext;

function randomBoolean() {
  return Math.random() < 0.5 ? true : false;
}
