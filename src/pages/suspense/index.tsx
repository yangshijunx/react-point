import { Suspense, lazy } from "react";
const LazyComponent = lazy(() => import("./components/LazyComponent"));

const SuspenseComponent = () => {
  // 从 React 18 开始，React 引入了新的异步渲染机制，其中 Suspense 不再强制要求使用 fallback 属性来捕获加载过程中的等待状态。
  // 如果在 Suspense 中没有指定 fallback 属性，React 会等待所有异步操作完成后，再一次性地渲染整个组件树。
  // 这意味着可以更灵活地使用 Suspense，不再需要为每个异步加载点都设置 fallback，从而简化了代码。
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <div>组件挂载</div>
    </>
  );
};

export default SuspenseComponent;
