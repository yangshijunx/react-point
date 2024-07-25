import React from "react";

interface HocProps {
  vif: boolean;
}

const HocRender = <P extends object>(
  WrapComponent: React.ComponentType<P>
): React.ComponentType<P & HocProps> => {
  return class extends React.Component<P & HocProps> {
    constructor(props: P & HocProps) {
      super(props);
      console.log("constructor", props);
    }
    render() {
      const { vif, ...restProps } = this.props as HocProps & P;
      if (!vif) {
        return <>v-if设置为false了</>;
      }
      return <WrapComponent {...(restProps as P)} />;
    }
  };
};

export default HocRender;
// 导出类型
export type { HocProps };
