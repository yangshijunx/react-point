import { useState } from "react";
import TestMemo from "./components/testMemo";

const MemoIndex = () => {
  const [data, setData] = useState<any>({
    name: "test",
    id: 20,
  });
  const [number, setNumber] = useState<number>(0);
  //   editData 修改id+1
  const editData = () => setData({ ...data, id: data.id + 1 });
  return (
    <div>
      <h1>memo</h1>
      <p>父组件number: {number}</p>
      <TestMemo data={data} />
      <button onClick={editData}>父组件修改props-id</button>
      <button onClick={() => setNumber(number + 1)}>父组件修改number</button>
    </div>
  );
};

export default MemoIndex;
