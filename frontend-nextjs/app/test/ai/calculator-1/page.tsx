'use client';

import { useState } from 'react';

// Calculator component
export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Handle digit input
  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  // Handle decimal point input
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Clear all values
  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  // Toggle positive/negative sign
  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  // Calculate percentage
  const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  // Perform calculation
  const calculateResult = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  // Handle operation input
  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = calculateResult(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  // Calculate final result
  const calculate = () => {
    if (!operation || previousValue === null) return;

    const inputValue = parseFloat(display);
    const result = calculateResult(previousValue, inputValue, operation);
    
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  // Button component
  const CalculatorButton = ({ 
    children, 
    onClick, 
    variant = 'number',
    span2 = false 
  }: { 
    children: React.ReactNode; 
    onClick: () => void; 
    variant?: 'number' | 'operation' | 'function';
    span2?: boolean;
  }) => {
    const baseStyles = 'h-16 text-xl font-semibold rounded-full transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl';
    
    const variantStyles = {
      number: 'bg-gray-700 text-white hover:bg-gray-600',
      operation: 'bg-orange-500 text-white hover:bg-orange-400',
      function: 'bg-gray-500 text-white hover:bg-gray-400'
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${span2 ? 'col-span-2' : ''}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Calculator
        </h1>

        {/* Calculator Container */}
        <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700">
          {/* Display Screen */}
          <div className="bg-gray-900 rounded-2xl p-5 mb-5 border border-gray-700 min-h-[100px] flex flex-col justify-end">
            {/* Show previous value and operation */}
            {operation && previousValue !== null && (
              <div className="text-gray-400 text-sm text-right mb-2">
                {previousValue} {operation}
              </div>
            )}
            {/* Current display value */}
            <div className="text-white text-5xl font-light text-right truncate">
              {display}
            </div>
          </div>

          {/* Calculator Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 - Function buttons */}
            <CalculatorButton onClick={clearAll} variant="function">
              AC
            </CalculatorButton>
            <CalculatorButton onClick={toggleSign} variant="function">
              +/-
            </CalculatorButton>
            <CalculatorButton onClick={inputPercent} variant="function">
              %
            </CalculatorButton>
            <CalculatorButton onClick={() => performOperation('÷')} variant="operation">
              ÷
            </CalculatorButton>

            {/* Row 2 - Numbers 7-9 */}
            <CalculatorButton onClick={() => inputDigit('7')} variant="number">
              7
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('8')} variant="number">
              8
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('9')} variant="number">
              9
            </CalculatorButton>
            <CalculatorButton onClick={() => performOperation('×')} variant="operation">
              ×
            </CalculatorButton>

            {/* Row 3 - Numbers 4-6 */}
            <CalculatorButton onClick={() => inputDigit('4')} variant="number">
              4
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('5')} variant="number">
              5
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('6')} variant="number">
              6
            </CalculatorButton>
            <CalculatorButton onClick={() => performOperation('-')} variant="operation">
              −
            </CalculatorButton>

            {/* Row 4 - Numbers 1-3 */}
            <CalculatorButton onClick={() => inputDigit('1')} variant="number">
              1
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('2')} variant="number">
              2
            </CalculatorButton>
            <CalculatorButton onClick={() => inputDigit('3')} variant="number">
              3
            </CalculatorButton>
            <CalculatorButton onClick={() => performOperation('+')} variant="operation">
              +
            </CalculatorButton>

            {/* Row 5 - Zero, decimal and equals */}
            <CalculatorButton onClick={() => inputDigit('0')} variant="number" span2>
              0
            </CalculatorButton>
            <CalculatorButton onClick={inputDecimal} variant="number">
              .
            </CalculatorButton>
            <CalculatorButton onClick={calculate} variant="operation">
              =
            </CalculatorButton>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-center mt-4 text-sm">
          Simple Calculator Application
        </p>
      </div>
    </div>
  );
}
