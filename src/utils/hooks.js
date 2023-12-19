import { useState } from "react";

export function useInputValue() {
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(() => e.target.value);
  }

  return [value, handleValueChange];
}

export async function filterNotes(endpoint, keyword) {
  const resp = await endpoint();

  if (keyword) {
    const filtered = resp.data.filter((i) => {
      return i.title.toLowerCase().includes(keyword.toLocaleLowerCase());
    });
    return filtered;
  }

  return resp.data;
}
