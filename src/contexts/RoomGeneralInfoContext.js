import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const roomGeneralInfoContext = createContext();

export const RoomGeneralInfoContextProvider = function ({ children }) {
  const [lodgeName, onLodgeNameChange, onResetLodgeName] = useInput("");
  const [location, onLocationChange, onResetLocation] = useInput("");
  const [city, onCityChange, onResetCity] = useInput("");

  return (
    <roomGeneralInfoContext.Provider
      value={{
        lodgeName: [lodgeName, onLodgeNameChange, onResetLodgeName],
        location: [location, onLocationChange, onResetLocation],
        city: [city, onCityChange, onResetCity],
      }}
    >
      {children}
    </roomGeneralInfoContext.Provider>
  );
};

export default roomGeneralInfoContext;