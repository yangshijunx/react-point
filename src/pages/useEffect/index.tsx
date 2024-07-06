import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
} from "react";

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

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
  }, [count]);

  //   在所有 DOM 变更之前运行，所以它只会在组件挂载时运行一次。
  useInsertionEffect(() => {
    console.log("useInsertionEffect called");
    // useInsertionEffect 只会执行一次 uesEffect和uselayoutEffect执行了两次
    // 在严格模式下（React.StrictMode），React 会在开发环境中有意双调用（mount 和 unmount）组件的生命周期方法和副作用，
    // 以帮助开发者发现意外的副作用。这是为了确保副作用逻辑是幂等的（即多次调用不会产生副作用）。
    // 添加样式
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: ${count % 2 === 0 ? "red" : "blue"};
    }`;
    document.head.appendChild(style);
    return () => {
      console.log("useInsertionEffect cleanup called");
      document.head.removeChild(style);
    };
  }, [count]);

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
