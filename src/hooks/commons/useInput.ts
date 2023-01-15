import { useCallback, useState } from "react";

const useInput = <T = any>(
  initialValue: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<T>>
] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value as unknown as T);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
