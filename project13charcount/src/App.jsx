import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [length, setLength] = useState(0);

  const handleLength = () => {
    const count = input.replace(/\s/g, "").length;
    setLength(count);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Character Counter
        </h1>

        <input
          type="text"
          placeholder="Enter your text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLength}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Find Length
        </button>

        <div className="mt-6 bg-gray-100 rounded-lg p-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Characters Count (without spaces)
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-2">
            {length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;