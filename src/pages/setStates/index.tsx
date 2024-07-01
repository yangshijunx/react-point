import { Button } from "antd";
import { useState } from "react";
import { flushSync } from "react-dom";

const SetState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        +1
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          // 最后一个 在数据层，将多个状态更新合并成一次处理（在视图层，将多次渲染合并成一次渲染）
          setCount(count + 1);
        }}
      >
        批量处理+3
      </Button>

      <Button
        type="primary"
        onClick={() => {
          setCount((pre) => pre + 1);
          setCount((pre) => pre + 1);
          setCount((pre) => pre + 1);
        }}
      >
        不要批量处理+3
      </Button>

      <Button
        type="primary"
        onClick={() => {
          flushSync(() => {
            setCount(count + 2);
            setCount(count + 1);
            setCount(count + 2);
          });
          flushSync(() => {
            setCount(count + 2);
            setCount(count + 1);
            // 只保留这个
            setCount(count + 1);
          });
        }}
      >
        不要批量处理+3
      </Button>
    </>
  );
};

export default SetState;
