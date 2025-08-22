import { useRef } from "react";
import { useState } from "react";

function UseRef2() {
  const [inputValue, setInputValue] = useState("");
  const counterRef = useRef(0);
  const handleChange = (e) => {
    setInputValue(e.target.value);
    counterRef.current = counterRef.current + 1;
  };
  console.log(counterRef);
  return (
    <>
      <input value={inputValue} onChange={handleChange} />
    </>
  );
}

export default UseRef2;
