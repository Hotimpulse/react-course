import "./App.css";
import { useState } from "react";
import Challenge from "./challenge1/Challenge";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
    return;
  };

  const handleNext = () => {
    if (step < messages.length) {
      console.log("🚀 ~ handleNext ~ step:", step);
      setStep((s) => s + 1);
    }
    return;
  };

  return (
    <>
      <Challenge />
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <button
        className="close-btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        &times;
      </button>
    </>
  );
}

export default App;
