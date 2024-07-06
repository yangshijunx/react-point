import React, { useState, useEffect } from "react";

const UseEffect: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<string | null>(null);

  // 使用 useEffect 进行副作用处理
  useEffect(() => {
    console.log("Component mounted or updated");
    // 模拟数据获取
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setData(result.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // 清理函数（类似于 componentWillUnmount）
    return () => {
      console.log("Cleanup");
    };
  }, []); // 依赖数组为空，只在组件挂载和卸载时运行

  // 使用 useEffect 监听 count 变化
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // 清理函数（在 count 变化前执行）
    return () => {
      console.log(`Count before update: ${count}`);
    };
  }, [count]); // 依赖 count，count 变化时执行

  return (
    <div>
      <h1>useEffect Demo</h1>
      <p>{data ? `Fetched Data: ${data}` : "Loading data..."}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffect;
