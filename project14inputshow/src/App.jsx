import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">
        

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Output:</h2>
          <p className="text-xl text-gray-700 break-words">
            {input || "Your text will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;