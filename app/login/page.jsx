"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("logout") === "1") {
      fetch("/api/admin/logout", { method: "POST" }).finally(() => {
        params.delete("logout");
        const query = params.toString();
        const nextUrl = query ? `/login?${query}` : "/login";
        window.history.replaceState(null, "", nextUrl);
      });
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data?.message || "Login failed.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-5 items-center justify-center">
      <div className="h-full lg:col-span-3">
        <img
          loading="lazy"
          src="https://morph-digital-mm.vercel.app/img/heroSect.jpg"
          alt="Admin background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="flex items-center justify-center lg:col-span-2">
        <div className="w-full px-10 lg:px-20 mx-auto my-20 text-center p-5">
          <div className="text-3xl font-semibold pb-5">Admin Login</div>
          <form onSubmit={handleLogin} className="space-y-5 pt-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin username"
              className="border border-neutral-600 w-full p-3 rounded-xl"
              autoComplete="username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="border border-neutral-600 w-full p-3 rounded-xl"
              autoComplete="current-password"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-3 block w-full rounded-xl bg-amber-700 text-neutral-100 disabled:opacity-70"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
          {error ? <p className="text-red-600 pt-4">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
