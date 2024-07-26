// 首先什么事 hook
// React Hooks 是 React 16.8 引入的一项功能，允许你在函数组件中使用状态和其他 React 特性，
// 而不需要编写类组件。React Hooks 通过一组预定义的函数，
// 让你能够更简洁和优雅地管理组件的状态、副作用和上下文等。
// 区别于之前函数式纯组件的区别

import { useMemo, useState } from "react";

// 常用的 usestate usecallback usememo useeffect usecontext usereducer useref

// 如果自定义hooks没有设计好，比如返回一个改变state的函数，但是没有加条件限定限定，
// 就有可能造成不必要的上下文的执行，更有甚的是组件的循环渲染执行。
const useFormatList = (list: string[]): string[] => {
  //   console.log("useFormatList 执行");
  //   return list.map((item) => item.toUpperCase());
  return useMemo(() => {
    console.log("useFormatList 执行");
    return list.map((item) => item.toUpperCase());
  }, [list]);
};
const list = ["a", "b", "c"];
const CustomHook = () => {
  const formatList = useFormatList(list);
  const [number, setNumber] = useState(0);
  return (
    <div>
      {formatList.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
      <h1>{number}</h1>
      <button
        // 如果我们在写自定义hook的时候不对hook的执行时机进行处理就会出现一个问题
        // 反复执行或者死循环的出现 比如这个例子中 useFormatList 只要点击就会执行
        // 所以一个好用的自定义hooks,一定要配合useMemo ,useCallback 等api一起使用。
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        测试会不会多次执行
      </button>
    </div>
  );
};

export default CustomHook;
