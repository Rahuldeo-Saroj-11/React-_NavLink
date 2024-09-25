import { useState } from 'react';

function StateComponent() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-3xl mb-4">Count: {count}</h1>
                <button
                    onClick={incrementCount}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Increment
                </button>
                
            </div>
            <h1 className="text-center mt-8 text-xl">Hi, I am StateComponent</h1>
        </>
    );
}

export default StateComponent;
