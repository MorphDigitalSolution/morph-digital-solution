// app/admin/layout.js
"use client"; // Ensure this file runs in the client-side

import { useState } from "react";

export default function AdminLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    const validUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect username or password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="rounded-3xl max-w-5xl mx-auto my-20 text-center w-fit p-5 border border-slate-500">
          <div className="text-xl font-semibold">Admin Login</div>
          <form onSubmit={handleLogin} className="space-y-3 pt-4">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="border border-slate-600 p-2 rounded-xl"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="border border-slate-600 p-2 rounded-xl"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2 block w-full rounded-xl bg-slate-700 text-white"
            >
              Login
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
