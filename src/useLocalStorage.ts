import * as React from "react";
const SecureLS = require('secure-ls')

export default function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: Function | string) => void] {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {

      var ls = new SecureLS({encodingType: 'aes', encryptionSecret: 'pJs(?&4Zyp6dbA`(Qh&s&8]s94C<Lx<H#&Vk5#cn3ttfexeHHv6W#/LW(3v4r8UkE!Cy92]Kf'});

      const item =
        typeof ls !== "undefined" && ls.get(key);

      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: Function | string) => {
    try {

      var ls = new SecureLS({encodingType: 'aes', encryptionSecret: 'pJs(?&4Zyp6dbA`(Qh&s&8]s94C<Lx<H#&Vk5#cn3ttfexeHHv6W#/LW(3v4r8UkE!Cy92]Kf'});

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
