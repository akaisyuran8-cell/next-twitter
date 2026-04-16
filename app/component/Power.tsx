import { useState } from "react";

function Power() {
  const [power, setPower] = useState(false);

  return (
    <div>
      <h1>電源 {power ? "ON" : "OFF"} </h1>

      <button onClick={() => setPower(!power)}>電源切り替え</button>
    </div>
  );
}

export default Power;
