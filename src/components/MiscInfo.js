import InputGroup from "./InputGroup";
import Input from "./Input";
import { useContext } from "react";
import miscInfoContext from "../contexts/MiscInfoContext";

const MiscInfo = function () {
  const {
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
  } = useContext(miscInfoContext);
  return (
    <InputGroup heading="Miscellaneous">
      <Input
        label="Maximum number of animals"
        value={numOfAnimalsAllowed}
        onChange={changeNumOfAnimalsAllowed}
      />
      <Input
        label="Maximum number of babies"
        value={numOfBabiesAllowed}
        onChange={changeNumOfBabiesAllowed}
      />
      <label className="select">
        <span>Prepayment amount</span>
        <select value={prepayment} onChange={changePrepayment}>
          {["full", "half", "none"].map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="select">
        <span>Refund amount when cancellation</span>
        <select value={refund} onChange={changeRefund}>
          {["full", "half", "none"].map((r) => (
            <option value={r}>{r}</option>
          ))}
        </select>
      </label>
    </InputGroup>
  );
};

export default MiscInfo;
