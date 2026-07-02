import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // Load users from localStorage when the app starts
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : [];
  });

  const SubmitHandler = () => {
    if (!name || !email || !number) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      name,
      email,
      number,
    };

    const updatedUsers = [...user, newUser];

    setUser(updatedUsers);
    localStorage.setItem("user", JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setNumber("");
  };

  const handleDelete = (index) => {
    const updatedUsers = user.filter((_, i) => i !== index);

    setUser(updatedUsers);
    localStorage.setItem("user", JSON.stringify(updatedUsers));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            User Registration
          </h1>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Enter Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={SubmitHandler}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add User
            </button>
          </div>
        </div>

        {/* User List */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Registered Users
          </h2>

          {user.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">
              No users added yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-blue-600">
                      User {index + 1}
                    </h3>

                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">👤 Name:</span>{" "}
                      {value.name}
                    </p>

                    <p className="break-all">
                      <span className="font-semibold">📧 Email:</span>{" "}
                      {value.email}
                    </p>

                    <p>
                      <span className="font-semibold">📱 Phone:</span>{" "}
                      {value.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;