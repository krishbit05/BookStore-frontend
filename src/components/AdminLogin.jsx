import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AuthAdminProvider";

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.username, formData.password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid admin credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">🔐 Admin Login</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 dark:text-white">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-gray-700 dark:text-white">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
