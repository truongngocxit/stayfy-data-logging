import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const timeContext = createContext();

export const TimeContextProvider = function ({ children }) {
  const [checkinStart, changeCheckinStart] = useInput("12:00");
  const [checkinEnd, changeCheckinEnd] = useInput("24:00");
  const [checkoutBefore, changeCheckoutBefore] = useInput("11:00");

  return (
    <timeContext.Provider
      value={{
        checkinStart: [checkinStart, changeCheckinStart],
        checkinEnd: [checkinEnd, changeCheckinEnd],
        checkoutBefore: [checkoutBefore, changeCheckoutBefore],
      }}
    >
      {children}
    </timeContext.Provider>
  );
};

export default timeContext;
