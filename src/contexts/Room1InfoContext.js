import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const room1Context = createContext();

export const Room1ContextProvider = function ({ children }) {
  const [room1Name, onChangeRoom1Name, onResetRoom1Name] =
    useInput("Private Room");
  const [room1Price, onChangeRoom1Price, onResetRoom1Price] = useInput(
    (Math.random() * 20 + 40).toFixed(2)
  );
  const [room1Beds, onChangeRoom1Beds, onResetRoom1Beds] = useInput(
    ["1 queen bed, 1 sofa", "1 king bed", "1 extra large bed"][
      Math.floor(Math.random() * 3)
    ]
  );
  const [room1Type, onChangeRoom1Type, onResetRoom1Type] = useInput("private");

  const [room1Image, onChangeRoom1Image, onResetRoom1Image] = useInput("");

  return (
    <room1Context.Provider
      value={{
        room1Name: [room1Name, onChangeRoom1Name, onResetRoom1Name],
        room1Price: [room1Price, onChangeRoom1Price, onResetRoom1Price],
        room1Bed: [room1Beds, onChangeRoom1Beds, onResetRoom1Beds],
        room1Type: [room1Type, onChangeRoom1Type, onResetRoom1Type],
        room1Image: [room1Image, onChangeRoom1Image, onResetRoom1Image],
      }}
    >
      {children}
    </room1Context.Provider>
  );
};

export default room1Context;
