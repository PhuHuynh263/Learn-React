import { useState } from "react";

function Lamp() {
  //   let status = false;

  const [status, setState] = useState(false);

  const handleClick = () => {
    // status != status;
    setState(!status);
  };

  console.log(status);

  return (
    <>
      <button onClick={handleClick}>
        <div>{status ? "On" : "Off"}</div>
      </button>
      <div>{status ? "Den dang tat" : "Den dang bat"}</div>
    </>
  );
}

export default Lamp;
