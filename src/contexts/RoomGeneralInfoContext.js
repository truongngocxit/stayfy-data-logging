import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const roomGeneralInfoContext = createContext();

export const RoomGeneralInfoContextProvider = function ({ children }) {
  const [lodgeName, onLodgeNameChange, onResetLodgeName] =
    useInput(" Homestay");
  const [location, onLocationChange, onResetLocation] = useInput("");
  const [city, onCityChange, onResetCity] = useInput("");
  const [description, onDescriptionChange, onResetDescription] = useInput("");
  const [languages, onLanguagesChange, onResetLanguages] = useInput(
    "Vietnamese, English"
  );

  return (
    <roomGeneralInfoContext.Provider
      value={{
        lodgeName: [lodgeName, onLodgeNameChange, onResetLodgeName],
        location: [location, onLocationChange, onResetLocation],
        city: [city, onCityChange, onResetCity],
        description: [description, onDescriptionChange, onResetDescription],
        languages: [languages, onLanguagesChange, onResetLanguages],
      }}
    >
      {children}
    </roomGeneralInfoContext.Provider>
  );
};

export default roomGeneralInfoContext;
