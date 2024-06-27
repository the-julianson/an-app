// components/CounterDisplay.tsx


import { ReactElement } from "react";
import { useCounter } from "./CounterContext";

interface CounterDisplayProps {
  subComponent?: ReactElement;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ subComponent }) => {
  const { count } = useCounter();
  return (
    // <div className="p-4 border rounded-lg shadow-lg text-center space-y-4">
    //     {subComponent}
    //   <div>{count}</div>
    // </div>
    <div className="p-6 border rounded-lg shadow-lg text-center space-y-4 bg-white">
        {subComponent && <div className="mt-4 text-gray-700">{subComponent}</div>}
      <div className="text-2xl font-bold text-gray-800">{count}</div>
      
    </div>
  );
};

export default CounterDisplay;