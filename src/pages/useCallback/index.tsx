import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  //   子组件不会重新渲染
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [otherState]); // 空数组意味着这个函数不会因为组件重新渲染而改变
  //   会重新渲染
  //   const increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onClick={increment} />
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
};

export default Parent;
