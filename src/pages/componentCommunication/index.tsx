import ChildList from "./components/childList";
import { Dispatch, SetStateAction, createContext, useState } from "react";

// 定义 Context 的类型
interface NumberContextType {
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}

const numberContext = createContext<NumberContextType>({
  num: 0,
  setNum: () => {},
});
const ComponentsCommunication = () => {
  const [num, setNum] = useState(0);
  return (
    <numberContext.Provider value={{ num, setNum }}>
      <div>
        组件通讯 子组件:
        <ChildList
          number={num}
          setNum={(value) => {
            console.log("修改", value);
            setNum(value);
          }}
        >
          <div>我是子组件插槽内容</div>
        </ChildList>
      </div>
    </numberContext.Provider>
  );
};
export default ComponentsCommunication;
export { numberContext };
