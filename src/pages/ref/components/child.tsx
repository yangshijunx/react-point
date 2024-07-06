import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  useImperativeHandle(ref, () => ({
    setNumbers: (newNumbers: number[]) => setNumbers(newNumbers),
  }));
  return (
    <div>
      <h1>Child Component, {numbers.join(", ")}</h1>
    </div>
  );
});

export default Child;
