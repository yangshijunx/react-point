import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  //   console.log("让我看看这个callback", callback);
  window.addEventListener("resize", callback);
  return () => {
    // react 会在组件卸载时调用
    window.removeEventListener("resize", callback);
  };
};

// 获取当前窗口宽度
function getSnapshot(): number {
  return window.innerWidth;
}

const UseSyncExternalStore = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div>
      <h1>窗口宽度：{width}</h1>
    </div>
  );
};

export default UseSyncExternalStore;
