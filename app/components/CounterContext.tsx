// components/CounterContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CounterContextProps {
  count: number;
  increment: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
