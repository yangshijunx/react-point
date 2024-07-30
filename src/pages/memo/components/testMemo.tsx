import React from "react";

interface TestMemoProps {
  data: {
    id: number;
    name: string;
  };
}

// 如果没有React.memo则父组件重新渲染子组件也会重新渲染
const TestMemo = React.memo(
  (props: TestMemoProps) => {
    console.log("TestMemo rendered", props.data.name);
    const { id, name } = props.data;
    const [number, setNumber] = React.useState(0);
    return (
      <>
        <div>TestMemo1</div>
        <div>props-name:{name}</div>
        <div>props-id:{id}</div>
        <div>state-number{number}</div>
        {/* 
      memo 对于state的改变还是会重新渲染 只会处理props
      */}
        <button onClick={() => setNumber(number + 1)}>stateNumber+1</button>
      </>
    );
  },
  //   memo 的第二个参数的返回值决定是否重新渲染 true false
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
);

export default TestMemo;
