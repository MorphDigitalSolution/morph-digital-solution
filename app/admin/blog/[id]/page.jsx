// app/blog/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import { useParams } from "next/navigation"; // Import useParams
import axios from "axios";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the id from the useParams hook
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Ensure that id is available before making the request

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://morph-api-server.vercel.app/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-2xl mx-auto my-8">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-neutral-600 mb-2 whitespace-pre-wrap leading-[1.5]">
            {blog.content}
          </p>
          <p className="text-neutral-500 text-sm">By {blog.author}</p>
          <p className="text-neutral-500 text-sm">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </>
      ) : (
        <div>No blog found</div>
      )}
    </div>
  );
};

export default BlogDetail;
