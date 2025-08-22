import { useRef } from "react";
import { useState } from "react";

function UseRef() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const counterObj = {
    current: 0,
  };

  const handleClick = () => {
    setCounter(counter + 1);
    counterRef.current = counterRef.current + 1;
  };

  console.log("Counter: " + counter);
  console.log("CounterRef: " + counterRef);
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseRef;
