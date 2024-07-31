import React, { Profiler, Suspense } from "react";
import Test from "./components/test";

const NewTest = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: Test,
      } as any);
    }, 2000);
  });
});

class LazyComponent extends React.Component<object> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  renderComplete(...arg: any) {
    console.log("renderComplete", arg);
    /**
        0 -id: root  ->  Profiler 树的 id 。
        1 -phase: mount ->  mount 挂载 ， update 渲染了。
        2 -actualDuration: 6.685000262223184  -> 更新 committed 花费的渲染时间。
        3 -baseDuration:  4.430000321008265  -> 渲染整颗子树需要的时间
        4 -startTime : 689.7299999836832 ->  本次更新开始渲染的时间
        5 -commitTime : 698.5799999674782 ->  本次更新committed 的时间
        6 -interactions: set{} -> 本次更新的 interactions 的集合
     */
  }

  render() {
    return (
      <>
        <Profiler id="LazyComponent" onRender={this.renderComplete}>
          <h1>Lazy Component</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <NewTest />
          </Suspense>
        </Profiler>
      </>
    );
  }
}

export default LazyComponent;
