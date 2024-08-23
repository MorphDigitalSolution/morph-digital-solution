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
      await axios.delete(`https://morph-api-server.vercel.app/api/blogs/${id}`);
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
      const response = await axios.put(
        `https://morph-api-server.vercel.app/api/blogs/${updatedBlog._id}`,
        updatedBlog
      );
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

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
        Blog Posts
      </h2>
      {sortedBlogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-primary-foreground p-6 rounded-lg shadow-md mb-4"
        >
          {editingBlog && editingBlog._id === blog._id ? (
            <EditBlogForm
              blog={editingBlog}
              onCancel={handleEditCancel}
              onSubmit={handleEditSubmit}
            />
          ) : (
            <>
              <h3 className="text-xl text-neutral-800 font-bold mb-2">
                {blog.title}
              </h3>
              <p className="text-neutral-500/80 mb-2 whitespace-pre-wrap">
                {blog.content.substring(0, 100)}...
              </p>
              <p className="text-neutral-500/80 text-sm">By {blog.author}</p>
              <p className="text-neutral-500/80 text-sm">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <div className="flex pt-3">
                <button
                  onClick={() => handleEditClick(blog)}
                  className="border-indigo-500 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500 hover:text-white border-2 text-indigo-500 active:scale-90 duration-300 rounded-lg text-sm px-3 py-1 mr-2 flex items-center gap-1"
                >
                  Edit <FaEdit className="text-base" />
                </button>
                <button
                  className="bg-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500 border-2 text-white text-sm px-3 py-1 active:scale-90 duration-300 rounded-lg flex items-center gap-1"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete <MdDelete className="text-base" />
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
