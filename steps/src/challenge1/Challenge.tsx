import React, { useState } from "react";

export default function Challenge() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const dateNow = new Date();
  dateNow.setDate(dateNow.getDate() + count);

  return (
    <div className="step">
      <p>
        <button onClick={() => setStep((s) => s - 1)}>-</button>Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </p>
      <p>
        <button onClick={() => setCount((c) => c - step)}>-</button>Count:{" "}
        {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </p>
      <p>
        {count === 0
          ? `Today is ${dateNow.toDateString()}`
          : "" || count > 0
          ? `${count} days from now is ${dateNow.toDateString()}`
          : "" || count < 0
          ? `${Math.abs(count)} days ago is ${dateNow.toDateString()}`
          : ""}
      </p>
    </div>
  );
}
