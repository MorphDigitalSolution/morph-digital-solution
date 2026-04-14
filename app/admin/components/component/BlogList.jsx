"use client";

import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditBlogForm from "./EditBlogForm";

const BlogList = ({ blogs, setBlogs, loading, error }) => {
  const [editingBlog, setEditingBlog] = useState(null);

  if (loading)
    return (
      <div className="w-full h-full grid gap-5">
        <div className="bg-slate-100 rounded-lg animate-pulse"></div>
        <div className="bg-slate-100 rounded-lg animate-pulse"></div>
        <div className="bg-slate-100 rounded-lg animate-pulse"></div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <div className="text-5xl border-2 size-16 flex items-center justify-center rounded-full">
          !
        </div>
        {error}
      </div>
    );

  // Sort blogs by createdAt date in descending order
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Handle blog deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // Edit blog
  const handleEditClick = (blog) => {
    setEditingBlog(blog);
  };

  const handleEditCancel = () => {
    setEditingBlog(null);
  };

  const handleEditSubmit = async (updatedBlog) => {
    try {
      const response = await axios.put(`/api/blogs/${updatedBlog._id}`, updatedBlog);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === updatedBlog._id ? response.data : blog
        )
      );
      setEditingBlog(null);
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  if (!sortedBlogs.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
        <p className="text-lg font-medium text-slate-900 mb-2">No blogs yet</p>
        <p>Add your first blog using the form above and it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedBlogs.map((blog) => (
        <div
          key={blog._id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {editingBlog && editingBlog._id === blog._id ? (
            <EditBlogForm
              blog={editingBlog}
              onCancel={handleEditCancel}
              onSubmit={handleEditSubmit}
            />
          ) : (
            <>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{blog.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {blog.author} · {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-slate-600 whitespace-pre-wrap">
                {blog.content.substring(0, 120)}...
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => handleEditClick(blog)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                >
                  <FaEdit className="text-sm" /> Edit
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
                  onClick={() => handleDelete(blog._id)}
                >
                  <MdDelete className="text-sm" /> Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
