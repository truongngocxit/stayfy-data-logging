import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const room2Context = createContext();

export const Room2ContextProvider = function ({ children }) {
  const randomNumberOfBeds = Math.ceil(Math.random() * 3) + 2;
  const [room2Name, onChangeRoom2Name, onResetRoom2Name] =
    useInput("Shared room");
  const [room2Price, onChangeRoom2Price, onResetRoom2Price] = useInput(
    (Math.random() * 20 + 20).toFixed(2)
  );
  const [room2Quantity, onChangeRoom2Quantity, onResetRoom2Quantity] = useInput(
    Math.floor(Math.random() * 2 + 2)
  );
  const [room2Beds, onChangeRoom2Beds, onResetRoom2Beds] = useInput(
    `${randomNumberOfBeds} twin bunk beds`
  );

  const [room2Sleeps, onChangeRoom2Sleeps, onResetRoom2Sleeps] = useInput(
    randomNumberOfBeds * 2
  );
  const [room2Type, onChangeRoom2Type, onResetRoom2Type] = useInput("shared");

  const [room2Image, onChangeRoom2Image, onResetRoom2Image] = useInput("");

  return (
    <room2Context.Provider
      value={{
        room2Name: [room2Name, onChangeRoom2Name, onResetRoom2Name],
        room2Price: [room2Price, onChangeRoom2Price, onResetRoom2Price],
        room2Quantity: [
          room2Quantity,
          onChangeRoom2Quantity,
          onResetRoom2Quantity,
        ],
        room2Bed: [room2Beds, onChangeRoom2Beds, onResetRoom2Beds],
        room2Sleeps: [room2Sleeps, onChangeRoom2Sleeps, onResetRoom2Sleeps],
        room2Type: [room2Type, onChangeRoom2Type, onResetRoom2Type],
        room2Image: [room2Image, onChangeRoom2Image, onResetRoom2Image],
      }}
    >
      {children}
    </room2Context.Provider>
  );
};

export default room2Context;
