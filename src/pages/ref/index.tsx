import { Component, useEffect, useRef } from "react";
import Child from "./components/child";
import React from "react";

class MyH1 extends Component<object, { example: string; count: number }> {
  constructor(props: object) {
    super(props);
    this.state = { example: "initial state", count: 0 };
    console.log("constructor: 组件实例化");
  }
  getClassRef = () => {
    console.log("getClassRef: 获取class组件的ref");
  };
  cstate = { num: 0 };
  static getDerivedStateFromProps(
    nextProps: object,
    prevState: { example: string }
  ) {
    console.log("getDerivedStateFromProps: 接收新属性", nextProps);
    return null; // 如果状态不需要改变，返回null
  }

  componentDidMount(): void {
    console.log("componentDidMount: 组件挂载");
  }

  shouldComponentUpdate(
    nextProps: object,
    nextState: { example: string }
  ): boolean {
    console.log("shouldComponentUpdate: 决定是否更新", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: object,
    prevState: { example: string }
  ): null {
    console.log(
      "getSnapshotBeforeUpdate: 获取更新前的快照",
      prevProps,
      prevState
    );
    return null; // 或者返回一些值
  }

  componentDidUpdate(
    prevProps: object,
    prevState: { example: string },
    snapshot: null
  ): void {
    console.log("componentDidUpdate: 组件更新", prevProps, prevState, snapshot);
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount: 组件卸载");
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.log("componentDidCatch: 捕获错误", error, info);
  }

  render() {
    console.log("render: 渲染组件");
    return (
      <>
        <h1 ref={this.getClassRef}>myh1-Ref</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </button>
      </>
    );
  }
}

const RefComponent = () => {
  // 直接获取获取不到 必须使用 forwardRef
  const childRef = useRef<{ setNumbers: (number: number[]) => void }>(null);
  const [count, setCount] = React.useState(0);

  const getRef = () => {
    console.log("getRef");
  };
  useEffect(() => {
    console.log("red", childRef);
    if (childRef.current) {
      childRef.current.setNumbers([1, 2, 3]);
    }
  }, []);
  return (
    <div>
      <h1
        // 当用一个函数来标记 Ref 的时候，将作为 callback 形式，等到真实 DOM 创建阶段，执行 callback ，
        // 获取的 DOM 元素或组件实例，将以回调函数第一个参数形式传入，
        ref={(node) => {
          // 因为这里是箭头函数 每一次更新的时候，都给 ref 赋值了新的函数，
          // 那么 markRef 中就会判断成 current.ref !== ref，
          // 所以就会重新打 Ref 标签，那么在 commit 阶段，就会更新 ref 执行 ref 回调函数了。
          console.log("h1-ref", node);
        }}
      >
        Ref
      </h1>
      {/* 这样也会执行两次 是因为是函数组件 如果是类组件有实例应该就不会了 */}
      <h1 ref={getRef}>getRef-Ref2</h1>
      <h1>{count}</h1>
      <MyH1 />
      <Child ref={childRef} />
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
};

export default RefComponent;
