import { useState, useEffect } from "react";

const HookLifeCircle = () => {
  // 使用 useState 创建组件的内部状态
  const [count, setCount] = useState(0);

  // 模拟 componentDidMount
  useEffect(() => {
    console.log("组件挂载了");

    // 返回的函数用于模拟 componentWillUnmount
    return () => {
      console.log("组件即将卸载");
    };
  }, []); // 空的依赖数组确保此 useEffect 仅在组件挂载和卸载时运行

  // 模拟 componentDidUpdate
  useEffect(() => {
    console.log(`组件更新了：count 现在是 ${count}`);
  }, [count]); // 依赖数组包含 count，当 count 变化时运行此 useEffect

  // 另一个模拟 componentDidUpdate 的例子，监听多个依赖
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(`组件更新了：text 现在是 "${text}"`);
  }, [text]); // 依赖数组包含 text，当 text 变化时运行此 useEffect

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加 Count</button>
      <p>Text: {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default HookLifeCircle;
