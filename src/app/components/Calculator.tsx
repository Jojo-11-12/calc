'use client';

import { useState, useEffect } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
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

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleNumber(e.key);
      } else if (e.key === '.') {
        e.preventDefault();
        handleDecimal();
      } else if (e.key === '+' || e.key === '-') {
        e.preventDefault();
        handleOperation(e.key);
      } else if (e.key === '*') {
        e.preventDefault();
        handleOperation('×');
      } else if (e.key === '/') {
        e.preventDefault();
        handleOperation('÷');
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEquals();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [display, operation, previousValue, waitingForNewValue]);

  const Button = ({
    onClick,
    children,
    className = '',
    variant = 'default',
  }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'operation' | 'equals' | 'function';
  }) => {
    const baseStyles =
      'w-full h-16 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg';
    const variants = {
      default: 'bg-slate-700 hover:bg-slate-600 text-white',
      operation: 'bg-orange-500 hover:bg-orange-600 text-white',
      equals: 'bg-green-500 hover:bg-green-600 text-white col-span-2',
      function: 'bg-slate-600 hover:bg-slate-500 text-white',
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Calculator Container */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
          {/* Display */}
          <div className="mb-6 bg-slate-900 rounded-xl p-6 border border-slate-700">
            <div className="text-right">
              <p className="text-slate-400 text-sm h-6 mb-2">
                {operation && previousValue !== null
                  ? `${previousValue} ${operation}`
                  : ''}
              </p>
              <p className="text-white text-5xl font-bold break-words">
                {display}
              </p>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button onClick={handleClear} variant="function">
              C
            </Button>
            <Button onClick={handleToggleSign} variant="function">
              +/-
            </Button>
            <Button onClick={handlePercentage} variant="function">
              %
            </Button>
            <Button onClick={() => handleOperation('÷')} variant="operation">
              ÷
            </Button>

            {/* Row 2 */}
            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button onClick={() => handleOperation('×')} variant="operation">
              ×
            </Button>

            {/* Row 3 */}
            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button onClick={() => handleOperation('-')} variant="operation">
              -
            </Button>

            {/* Row 4 */}
            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleOperation('+')} variant="operation">
              +
            </Button>

            {/* Row 5 */}
            <Button onClick={() => handleNumber('0')} className="col-span-2">
              0
            </Button>
            <Button onClick={handleDecimal}>.</Button>
            <Button onClick={handleEquals} variant="equals">
              =
            </Button>

            {/* Backspace - Full width */}
            <Button
              onClick={handleBackspace}
              variant="function"
              className="col-span-4"
            >
              ← Backspace
            </Button>
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-center text-slate-400 text-xs">
            <p>Use keyboard or mouse to calculate</p>
            <p className="mt-1">Press ESC to clear, ENTER for equals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
