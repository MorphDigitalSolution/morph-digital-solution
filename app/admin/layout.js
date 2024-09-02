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

    // const validUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    // const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    const validUsername = "admin@morph";
    const validPassword = "morph2024#";

    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect username or password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen grid lg:grid-cols-5 items-center justify-center">
        <div className="h-full lg:col-span-3">
          <img
            src="https://morph-digital-mm.vercel.app/img/heroSect.jpg"
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="flex items-center justify-center lg:col-span-2">
          <div className="w-full px-20 mx-auto my-20 text-center p-5">
            <div className="text-3xl font-semibold pb-5">Admin Login</div>
            <form onSubmit={handleLogin} className="space-y-5 pt-4">
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="border border-neutral-600 w-full p-3 rounded-xl"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="border border-neutral-600 w-full p-3 rounded-xl"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 block w-full rounded-xl bg-amber-700 text-neutral-100"
              >
                Login
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
