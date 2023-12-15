import { useState } from "react";

export function useInputValue() {
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(() => e.target.value);
  }

  return [value, handleValueChange];
}
