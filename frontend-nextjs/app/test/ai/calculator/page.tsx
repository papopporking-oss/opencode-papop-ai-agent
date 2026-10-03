"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  function inputDigit(digit: string) {
    if (waitingForSecond) {
      setDisplay(digit);
      setWaitingForSecond(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  }

  function inputDecimal() {
    if (waitingForSecond) {
      setDisplay("0.");
      setWaitingForSecond(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  function clear() {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  function handleOperator(nextOperator: string) {
    const currentValue = parseFloat(display);

    if (firstOperand !== null && operator && !waitingForSecond) {
      const result = calculate(firstOperand, currentValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    } else {
      setFirstOperand(currentValue);
    }

    setOperator(nextOperator);
    setWaitingForSecond(true);
  }

  function calculate(
    a: number,
    b: number,
    op: string
  ): number {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? 0 : a / b;
      default:
        return b;
    }
  }

  function handleEquals() {
    if (firstOperand === null || operator === null) return;

    const currentValue = parseFloat(display);
    const result = calculate(firstOperand, currentValue, operator);

    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  function handlePercent() {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  }

  function handleSign() {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue * -1));
  }

  return (
    <main>
      <h1>Calculator</h1>
      <div>
        <input
          type="text"
          value={display}
          readOnly
        />
        <div>
          <button onClick={clear}>AC</button>
          <button onClick={handleSign}>+/-</button>
          <button onClick={handlePercent}>%</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
        <div>
          <button onClick={() => inputDigit("7")}>7</button>
          <button onClick={() => inputDigit("8")}>8</button>
          <button onClick={() => inputDigit("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>
        <div>
          <button onClick={() => inputDigit("4")}>4</button>
          <button onClick={() => inputDigit("5")}>5</button>
          <button onClick={() => inputDigit("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>
        <div>
          <button onClick={() => inputDigit("1")}>1</button>
          <button onClick={() => inputDigit("2")}>2</button>
          <button onClick={() => inputDigit("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>
        <div>
          <button onClick={() => inputDigit("0")}>0</button>
          <button onClick={inputDecimal}>.</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </main>
  );
}
