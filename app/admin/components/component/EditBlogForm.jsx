"use client";
import React, { useEffect, useRef, useState } from "react";

const EditBlogForm = ({ blog, onCancel, onSubmit }) => {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [author, setAuthor] = useState(blog.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...blog, title, content, author });
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 20
      }px`;
    }
  }, [content]);

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg">
      <div className="mb-4">
        <label className="block text-neutral-700">Title</label>
        <input
          type="text"
          className="bg-slate-200 border-neutral-300 text-blue-950 outline-none mt-1 p-2 w-full border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="block text-neutral-700">Content</label>
        <textarea
          ref={textareaRef}
          className="bg-slate-200 border-neutral-300 text-blue-950 outline-none mt-1 p-2 w-full border rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-neutral-700">Author</label>
        <input
          type="text"
          className="bg-slate-200 border-neutral-300 text-blue-950 outline-none mt-1 p-2 w-full border rounded-lg"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="flex">
        <button
          type="submit"
          className="bg-[#6cf46c] active:scale-90 duration-300 text-neutral-300 px-4 py-2 rounded-lg mr-2"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-[#bdbdbd] active:scale-90 duration-300 text-neutral-300 px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditBlogForm;
