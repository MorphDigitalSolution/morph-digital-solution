"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Fader from "@/components/magicui/Fader";
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import AboutAuthor from "./AboutAuthor";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use Intersection Observer to load blogs only when the section is in view
  const { ref: blogsRef, inView: blogsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to load blogs. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Latest Articles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover insights, tips, and expert knowledge to help grow your business and stay ahead in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {loading && blogs.length === 0 ? (
                // Show 4 skeleton cards for loading state
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
                    <div className="h-48 bg-slate-200"></div>
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-slate-200 rounded"></div>
                      <div className="h-4 bg-slate-200 rounded"></div>
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))
              ) : error ? (
                <div className="col-span-full flex items-center justify-center py-16">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Unable to Load Blogs</h3>
                    <p className="text-slate-600 mb-4">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : blogs.length === 0 ? (
                <div className="col-span-full flex items-center justify-center py-16">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No Blogs Available</h3>
                    <p className="text-slate-600">Check back soon for new articles and insights.</p>
                  </div>
                </div>
              ) : (
                blogs.map((blog, index) => (
                  <Fader key={blog._id || index} duration={0.6}>
                    <Link
                      href={`/blogs/${blog._id}`}
                      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl block overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          loading="lazy"
                          src={blog.image || "https://morph-digital-mm.vercel.app/img/meeting.png"}
                          alt={blog.title || "Blog post"}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {blog.content?.replace(/<[^>]*>/g, '') || 'Read more about this topic...'}
                        </p>
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <span className="font-medium">{blog.author || 'Morph Digital'}</span>
                          <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'Recent'}</span>
                        </div>
                      </div>
                    </Link>
                  </Fader>
                ))
              )}
            </div>
          </div>
          <AboutAuthor blogs={blogs} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
