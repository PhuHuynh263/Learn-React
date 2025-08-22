import { memo } from "react";

function Box(props) {
  const { onCounter } = props;
  const { onReset } = props;

  const handleClick = () => {
    onCounter();
  };

  const handleReset = () => {
    onReset();
  };

  console.log("render box");

  return (
    <>
      <button onClick={handleClick}>Counter!!!</button>
      <button onClick={handleReset}>Reset!!!</button>
    </>
  );
}

export default memo(Box);
