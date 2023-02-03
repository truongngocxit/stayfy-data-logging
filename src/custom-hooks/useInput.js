import { useState } from "react";

export default function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleResetValue() {
    setValue("");
  }

  return [value, handleValueChange, handleResetValue];
}
