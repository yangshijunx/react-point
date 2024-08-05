import { useEffect, useState } from "react";

function IfHookComponent({
  flag,
  updateBoolean,
}: {
  flag: boolean;
  updateBoolean: any;
}) {
  // 条件语句中的 Hook
  if (flag) {
    const [value, setValue] = useState("Flag is true");
    useEffect(() => {
      console.log("Effect for value");
    }, [value]);
  }

  // 始终会执行的 Hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          updateBoolean();
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default IfHookComponent;
