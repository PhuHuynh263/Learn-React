import { useRef } from "react";
import { useState } from "react";

function RandomGift() {
  const gifts = ["SmartPhone", "Laptop", "PC", "KeyBoard"];
  const [result, setResult] = useState("");
  const counterRef = useRef(0);

  const handleRandom = () => {
    if (counterRef.current < 3) {
      const random = Math.floor(Math.random() * gifts.length);
      setResult(gifts[random]);
      counterRef.current = counterRef.current + 1;
    } else {
      alert("You cant spin");
    }
  };

  return (
    <>
      <button onClick={handleRandom}>Random</button>
      <div>You get a ward: {result} !!!</div>
    </>
  );
}

export default RandomGift;
