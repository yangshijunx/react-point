import { Profiler, Suspense, lazy } from "react";
import LazyComponent from "./components/LazyComponent";
const LazyComponentLazy = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: LazyComponent,
      } as any);
    }, 2000);
  });
});

const SuspenseComponent = () => {
  // 从 React 18 开始，React 引入了新的异步渲染机制，其中 Suspense 不再强制要求使用 fallback 属性来捕获加载过程中的等待状态。
  // 如果在 Suspense 中没有指定 fallback 属性，React 会等待所有异步操作完成后，再一次性地渲染整个组件树。
  // 这意味着可以更灵活地使用 Suspense，不再需要为每个异步加载点都设置 fallback，从而简化了代码。
  return (
    <>
      <Suspense fallback={<div>组件加载中...</div>}>
        <LazyComponentLazy />
      </Suspense>
      <Profiler
        id="LazyComponentLazy"
        onRender={(id, phase, actualDuration) =>
          console.log("会有什么变化", id, phase, actualDuration)
        }
      >
        <Suspense>
          <LazyComponentLazy />
        </Suspense>
      </Profiler>
      <div>组件挂载</div>
    </>
  );
};

export default SuspenseComponent;
