// app/blog/page.js
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/component/BlogCard";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          "https://morph-api-server.vercel.app/api/blogs"
        );
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-7xl font-bold animate-bounce">...</div>
          <div className="text-2xl pt-8">Loading</div>
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-2xl mx-auto my-8">
      <Link
        href="/admin/dashboard"
        className="absolute bg-slate-400 p-2 rounded-full left-10 top-10"
      >
        Back to dashboard
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-center py-10">Blog Posts</h1>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
