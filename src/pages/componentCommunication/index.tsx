import ChildList from "./components/childList";
import { useState } from "react";

const ComponentsCommunication = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      组件通讯 子组件:
      <ChildList
        number={num}
        setNum={(value) => {
          console.log("修改", value);
          setNum(value);
        }}
      />
    </div>
  );
};
export default ComponentsCommunication;
