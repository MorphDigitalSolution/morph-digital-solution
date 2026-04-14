import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, content, author };

    try {
      const res = await axios.post("/api/blogs", newBlog);
      addBlog(res.data); // Add new blog to the list
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (err) {
      console.error("Error creating blog:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
      <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Create new blog post</h2>
          <p className="mt-2 text-sm text-slate-500">
            Add a title, content and author to publish a new article.
          </p>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-600">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[140px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 resize-none"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-600">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
