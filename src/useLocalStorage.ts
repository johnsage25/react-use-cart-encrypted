import * as React from "react";
const SecureLS = require('secure-ls')

export default function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: Function | string) => void] {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {

      var ls = new SecureLS();

      const item =
        typeof ls !== "undefined" && ls.get(key);

      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: Function | string) => {
    try {

      var ls = new SecureLS();

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      ls.set(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
