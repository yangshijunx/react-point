import React from "react";
import HocRender from "./components/hocRender";

const Index: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

const EnhancedIndex = HocRender(Index);
export default EnhancedIndex;
