import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlannerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 👉 Add real validation or backend login logic here
    if (email === "planner@example.com" && password === "123456") {
      alert("Planner login successful!");
      navigate("/planner/dashboard"); // Change this route once you have planner dashboard
    } else {
      alert("Invalid planner credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow-md rounded w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Planner Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

