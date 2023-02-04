import { useState } from "react";

export default function useCheckbox(initialValue) {
  const [has, setHas] = useState(initialValue);

  function hasChange() {
    setHas((has) => !has);
  }

  return [has, hasChange];
}
