import { useContext } from "react";
import { numberContext } from "../index";

const ParentChild = () => {
  const { num, setNum: setContextNum } = useContext(numberContext);
  return (
    <div>
      <h1>ParentChild</h1>
      <p>number: {num}</p>
      <button onClick={() => setContextNum(num + 1)}>按键加一</button>
    </div>
  );
};

export default ParentChild;
