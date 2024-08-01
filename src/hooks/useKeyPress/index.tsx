import { useEffect, useState } from "react";

const useKeypress = () => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  const handleKeyDown = (e: KeyboardEvent) => {
    setKeyPressed(e.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return keyPressed;
};

export default useKeypress;
