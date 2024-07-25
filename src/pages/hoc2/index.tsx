import React, { Component } from "react";
import withCounterControl from "./components/withCounterControl";

interface BaseComponentState {
  count: number;
}

// 在TypeScript中，Component 泛型接受两个类型参数：
// Props（组件接受的属性类型）
// State（组件的状态类型）

class BaseComponent extends Component<object, BaseComponentState> {
  state: BaseComponentState = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const EnhancedComponent: React.ComponentType<{ visible: boolean }> =
  withCounterControl(BaseComponent);

export default EnhancedComponent;
