import { ReactElement, useState } from "react";

const Counter = (props: { someSubComponent?: ReactElement }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="p-4 border rounded-lg shadow-lg text-center space-y-4">
            {/* <SomeServerComponent /> */}
            {props.someSubComponent}
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
    }

export default Counter;



