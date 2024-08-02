import React, { useState } from "react";

export default function CalculatorComponent() {
  const [bill, setBill] = useState<number>(0);
  const [percentageOne, setPercentageOne] = useState<number>(0);
  const [percentageTwo, setPercentageTwo] = useState<number>(0);

  const tip = +bill * ((percentageOne + percentageTwo) / 2 / 100);

  const handleReset = () => {
    setBill(0);
    setPercentageOne(0);
    setPercentageTwo(0);
  };

  return (
    <>
      <div className="content-box">
        <Bill billValue={bill} onSetBill={setBill} />
        <SelectPercentage
          percentage={percentageOne}
          onSelect={setPercentageOne}
        >
          <p>Did you like the service?</p>
        </SelectPercentage>
        <SelectPercentage
          percentage={percentageTwo}
          onSelect={setPercentageTwo}
        >
          <p>Did your friend like the service?</p>
        </SelectPercentage>

        {+bill > 0 && (
          <>
            <TotalCost billValue={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </>
  );
}

const Bill = ({ billValue, onSetBill }) => {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="number"
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Bill value"
        value={billValue}
      />
    </>
  );
};

const SelectPercentage = ({ children, percentage, onSelect }) => {
  return (
    <>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>"It was decent (5%)"</option>
        <option value={10}>"It was good (10%)"</option>
        <option value={20}>"Absolutely amazing (20%)"</option>
      </select>
    </>
  );
};

const TotalCost = ({ billValue, tip }) => {
  return (
    <>
      <h3>
        You pay ${Math.round(billValue + tip)} (${billValue} + $
        {Math.round(tip)} tip)
      </h3>
    </>
  );
};

const Reset = ({ onReset }) => {
  return (
    <>
      <button onClick={onReset}>Reset</button>
    </>
  );
};
