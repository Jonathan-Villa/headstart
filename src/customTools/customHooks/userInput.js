import { useState } from "react";

export const useUserInput = (initalVal) => {
  const [value, setValue] = useState(initalVal); // pass the props

  const resetVal = () => {
    // offical value
    setValue(initalVal);
  };

  const bind = {
    // setval on every bind
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, resetVal]; // our hook
};
