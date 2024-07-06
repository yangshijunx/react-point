import { useEffect, useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    console.log("usememo useEffect is called");
  }, []);
  const addFn = (num1: number, num2: number) => {
    console.log("usememo addFn is called");
    return num1 + num2;
  };
  const add = useMemo(() => addFn(number1, number2), [number1, number2]);
  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <p>Result: {add}</p>
    </div>
  );
};
export default UseMemoComponent;
