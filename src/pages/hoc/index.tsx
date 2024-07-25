import React from "react";
import HocRender from "./components/hocRender";
import type { HocProps } from "./components/hocRender";

const Index: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

const EnhancedIndex: React.ComponentType<
  {
    message: string;
  } & HocProps
> = HocRender(Index);
export default EnhancedIndex;
