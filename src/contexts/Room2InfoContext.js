import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const room2Context = createContext();

export const Room2ContextProvider = function ({ children }) {
  const [room2Name, onChangeRoom2Name, onResetRoom2Name] =
    useInput("Shared room");
  const [room2Price, onChangeRoom2Price, onResetRoom2Price] = useInput(
    (Math.random() * 20 + 20).toFixed(2)
  );
  const [room2Beds, onChangeRoom2Beds, onResetRoom2Beds] = useInput(
    ["3 twin bunk beds", "4 twin bunk beds", "5 twin bunk beds"][
      Math.floor(Math.random() * 3)
    ]
  );
  const [room2Type, onChangeRoom2Type, onResetRoom2Type] = useInput("shared");

  const [room2Image, onChangeRoom2Image, onResetRoom2Image] = useInput("");

  return (
    <room2Context.Provider
      value={{
        room2Name: [room2Name, onChangeRoom2Name, onResetRoom2Name],
        room2Price: [room2Price, onChangeRoom2Price, onResetRoom2Price],
        room2Bed: [room2Beds, onChangeRoom2Beds, onResetRoom2Beds],
        room2Type: [room2Type, onChangeRoom2Type, onResetRoom2Type],
        room2Image: [room2Image, onChangeRoom2Image, onResetRoom2Image],
      }}
    >
      {children}
    </room2Context.Provider>
  );
};

export default room2Context;
