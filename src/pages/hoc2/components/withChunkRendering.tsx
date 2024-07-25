import React from "react";
import { ComponentType, ReactNode } from "react";

interface WithChunkRenderingProps {
  /**
   * 是否需要分片渲染
   */
  chunkRendering?: boolean;
  /**
   * 分片渲染的组件
   */
  chunkComponent?: ReactNode;
  // chunkSize
  chunkSize?: number;
}

const withChunkRendering = <P extends object>(
  WrapComponent: ComponentType<P>
): ComponentType<P & WithChunkRenderingProps> => {
  return class extends React.Component<P & WithChunkRenderingProps> {
    constructor(props: P & WithChunkRenderingProps) {
      super(props);
    }
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
};

export default withChunkRendering;
