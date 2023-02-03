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
