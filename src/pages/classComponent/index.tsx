import React, { Component } from "react";

interface MyComponentProps {
  // 这里定义组件的 props 类型
  name: string;
}

interface MyComponentState {
  // 这里定义组件的 state 类型
  count: number;
}

class MyClassComponent extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    // 初始化 state
    this.state = {
      count: 0,
    };
  }

  // 事件处理方法
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
MyClassComponent.prototype.handleIncrement = () => {
  console.log(222);
}; /* 方法: 绑定在 Index 原型链的 方法*/
// 这个并不会生效
// 因为在 class 类内部，箭头函数是直接绑定在实例对象上的，
// 而第二个 handleClick 是绑定在 prototype 原型链上的，
// 它们的优先级是：实例对象上方法属性 > 原型链对象上方法属性。

export default MyClassComponent;
