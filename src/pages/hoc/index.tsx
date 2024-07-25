import React from "react";
import HocRender from "./components/hocRender";

const Index: React.FC = () => {
  return <div>index</div>;
};

const EnhancedIndex = HocRender(Index);
export default EnhancedIndex;
