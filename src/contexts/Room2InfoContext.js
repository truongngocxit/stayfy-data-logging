import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const room2Context = createContext();

export const Room2ContextProvider = function ({ children }) {
  const isShared = Math.random() > 0.7;
  const hasTwoBeds = Math.random() > 0.5;

  const randomNumberOfBeds = Math.ceil(Math.random() * 3) + 2;
  const [room2Name, onChangeRoom2Name, onResetRoom2Name] = useInput(
    isShared ? "Shared room" : "Suite room"
  );
  const [room2Price, onChangeRoom2Price, onResetRoom2Price] = useInput(
    isShared
      ? (Math.random() * 20 + 20).toFixed(2)
      : (Math.random() * 20 + 50).toFixed(2)
  );
  const [room2Quantity, onChangeRoom2Quantity, onResetRoom2Quantity] = useInput(
    Math.floor(Math.random() * 2 + 2)
  );
  const [room2Beds, onChangeRoom2Beds, onResetRoom2Beds] = useInput(
    isShared
      ? `${randomNumberOfBeds} twin bunk beds`
      : `${hasTwoBeds ? "2 king-sized beds" : "1 king-sized bed"}`
  );

  const [room2Sleeps, onChangeRoom2Sleeps, onResetRoom2Sleeps] = useInput(
    isShared ? randomNumberOfBeds * 2 : hasTwoBeds ? 4 : 2
  );
  const [room2Type, onChangeRoom2Type, onResetRoom2Type] = useInput(
    isShared ? "shared" : "private"
  );

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
