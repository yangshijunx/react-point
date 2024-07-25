import React from "react";

const HocRender = <P extends object>(
  WrapComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  return class extends React.Component<P> {
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
};

export default HocRender;
