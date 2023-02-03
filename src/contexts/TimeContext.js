import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const timeContext = createContext();

export const TimeContextProvider = function ({ children }) {
  const [checkin, changeCheckin] = useInput("12:00");
  const [checkout, changeCheckout] = useInput("10:00");

  return (
    <timeContext.Provider
      value={{
        checkin: [checkin, changeCheckin],
        checkout: [checkout, changeCheckout],
      }}
    >
      {children}
    </timeContext.Provider>
  );
};

export default timeContext;
