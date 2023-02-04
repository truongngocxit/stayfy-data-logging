import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const miscInfoContext = createContext();

export const MiscInfoContextProvider = function ({ children }) {
  const [
    numOfAnimalsAllowed,
    changeNumOfAnimalsAllowed,
    resetNumOfAnimalsAllowed,
  ] = useInput(Math.floor(Math.random() * 5));
  const [
    numOfBabiesAllowed,
    changeNumOfBabiesAllowed,
    resetNumOfBabiesAllowed,
  ] = useInput(Math.ceil(Math.random() * 3) + 2);

  const [prepayment, changePrepayment, resetPrepayment] = useInput("none");

  const [refund, changeRefund, resetRefund] = useInput("half");

  return (
    <miscInfoContext.Provider
      value={{
        animals: [
          numOfAnimalsAllowed,
          changeNumOfAnimalsAllowed,
          resetNumOfAnimalsAllowed,
        ],
        babies: [
          numOfBabiesAllowed,
          changeNumOfBabiesAllowed,
          resetNumOfBabiesAllowed,
        ],
        prepayment: [prepayment, changePrepayment, resetPrepayment],
        refund: [refund, changeRefund, resetRefund],
      }}
    >
      {children}
    </miscInfoContext.Provider>
  );
};

export default miscInfoContext;
