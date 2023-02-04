import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const hostInfoContext = createContext();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const HostInfoContextProvider = function ({ children }) {
  const [hostName, onChangeHostName, onResetHostName] = useInput("");
  const [hostImage, onChangeHostImage, onResetHostImage] = useInput(
    `https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/host-images%2Fhost-${Math.ceil(
      Math.random() * 15
    )}.webp?alt=media&token=88d0e964-badf-4bbc-b6db-f5885d5930f3`
  );
  const hostEmail = `${hostName.toLowerCase().replace(" ", "")}@mail.com`;
  const [hostPhone, onChangeHostPhone, onResetHostPhone] = useInput(
    Math.random().toFixed(9).toString().replace(".", "")
  );
  const [hostDate, onChangeHostDate, onResetHostDate] = useInput(
    `${months[randomNumber(0, 11)]} ${randomNumber(1, 30)} 20${randomNumber(
      18,
      22
    )}`
  );

  return (
    <hostInfoContext.Provider
      value={{
        hostName: [hostName, onChangeHostName, onResetHostName],
        hostEmail,
        hostImage: [hostImage, onChangeHostImage, onResetHostImage],
        hostPhone: [hostPhone, onChangeHostPhone, onResetHostPhone],
        hostDate: [hostDate, onChangeHostDate, onResetHostDate],
      }}
    >
      {children}
    </hostInfoContext.Provider>
  );
};

export default hostInfoContext;

function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}
