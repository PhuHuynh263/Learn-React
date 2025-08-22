import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function UseRef2() {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current = counterRef.current + 1;
  };
  console.log(counterRef);
  return (
    <>
      <input ref={inputRef} value={inputValue} onChange={handleChange} />
    </>
  );
}

export default UseRef2;
