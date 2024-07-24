import { useEffect, useLayoutEffect } from "react";

// 代数效应
const AlgebraicEffect = () => {
  useEffect(() => {
    console.log("algebraicEffect");
  });
  //   layout
  useLayoutEffect(() => {
    console.log("layoutEffect");
  });
  return (
    <div>
      <h1>代数效应</h1>
    </div>
  );
};

export default AlgebraicEffect;
