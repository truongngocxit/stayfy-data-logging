import InputGroup from "./InputGroup";
import { useContext } from "react";
import timeContext from "../contexts/TimeContext";

export default function TimeSelect() {
  const {
    checkinStart: [checkinStart, changeCheckinStart],
    checkinEnd: [checkinEnd, changeCheckinEnd],
    checkoutBefore: [checkoutBefore, changeCheckoutBefore],
  } = useContext(timeContext);
  return (
    <InputGroup heading="Checkin/CheckoutBefore">
      <label className="select">
        <span>Checkin Start</span>
        <select value={checkinStart} onChange={changeCheckinStart}>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="select">
        <span>Checkin End</span>
        <select value={checkinEnd} onChange={changeCheckinEnd}>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="select">
        <span>Checkout Before</span>
        <select value={checkoutBefore} onChange={changeCheckoutBefore}>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
    </InputGroup>
  );
}

const times = [
  "All day",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "24:00",
];
