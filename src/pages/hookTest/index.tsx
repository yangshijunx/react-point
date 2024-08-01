import useKeypress from "@/hooks/useKeyPress";

const TestHook = () => {
  const keyPress = useKeypress();
  console.log("点击了", keyPress);
  return (
    <>
      <h1>Test Hook</h1>
    </>
  );
};

export default TestHook;
