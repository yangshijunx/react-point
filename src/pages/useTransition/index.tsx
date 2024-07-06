import { useState, useTransition, ChangeEvent } from "react";

const UseTransition: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    // 使用 useTransition 来进行列表更新
    startTransition(() => {
      const newList = Array(20000).fill(value);
      setList(newList);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransition;
