import { useEffect, useRef } from "react";
import Child from "./components/child";

const RefComponent = () => {
  // 直接获取获取不到 必须使用 forwardRef
  const childRef = useRef<{ setNumbers: (number: number[]) => void }>(null);
  useEffect(() => {
    console.log("red", childRef);
    if (childRef.current) {
      childRef.current.setNumbers([1, 2, 3]);
    }
  }, []);
  return (
    <div>
      <h1>Ref</h1>
      <Child ref={childRef} />
    </div>
  );
};

export default RefComponent;
