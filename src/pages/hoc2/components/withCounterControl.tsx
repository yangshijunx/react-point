import React, { Component, ComponentType, RefObject } from "react";

interface EnhancedComponentProps {
  visible: boolean;
}
const withCounterControl = <T extends object>(
  WrappedComponent: ComponentType<T>
): ComponentType<T & EnhancedComponentProps> => {
  return class extends Component<T & EnhancedComponentProps> {
    private wrappedInstance: RefObject<any>;

    constructor(props: T & EnhancedComponentProps) {
      super(props);
      this.wrappedInstance = React.createRef();
    }

    componentDidMount() {
      // 访问包裹组件的 increment 方法
      if (
        this.wrappedInstance.current &&
        this.wrappedInstance.current.increment
      ) {
        this.wrappedInstance.current.increment();
      }
    }

    render() {
      console.log(this.state);
      if (this.props.visible) {
        return <WrappedComponent ref={this.wrappedInstance} {...this.props} />;
      } else {
        return (
          <>
            <h1>暂无内容，因为反向继承控制了 render函数</h1>
          </>
        );
      }
      //   return <WrappedComponent ref={this.wrappedInstance} {...this.props} />;
    }
  };
};

export default withCounterControl;
