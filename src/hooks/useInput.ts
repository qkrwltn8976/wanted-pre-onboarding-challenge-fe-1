import { useCallback, useState } from "react";

const useInput = (
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);

  return [value, onChange];
};

export default useInput;
