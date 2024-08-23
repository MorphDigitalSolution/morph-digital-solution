"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Fader from "@/components/magicui/Fader";

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
        const response = await axios.get(
          "https://morph-api-server.vercel.app/api/blogs"
        );
        setBlogs(response.data);
        console.log(blogs);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    // Fetch blogs only when they are in view
    // if (blogsInView) {
    fetchBlogs();
    // }
  }, [blogsInView]);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="grid lg:grid-cols-3 gap-10 py-16 px-5">
          {loading && blogs.length === 0 ? (
            <div className="col-span-3 grid lg:grid-cols-3 gap-10">
              <div className="h-[400px] space-y-5 animate-pulse p-5 bg-slate-300 rounded-3xl">
                <div className="h-44 rounded-2xl bg-slate-200"></div>
                <div className="h-8 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl w-64 bg-slate-200"></div>
              </div>
              <div className="h-[400px] space-y-5 animate-pulse p-5 bg-slate-300 rounded-3xl">
                <div className="h-44 rounded-2xl bg-slate-200"></div>
                <div className="h-8 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl w-64 bg-slate-200"></div>
              </div>
              <div className="h-[400px] space-y-5 animate-pulse p-5 bg-slate-300 rounded-3xl">
                <div className="h-44 rounded-2xl bg-slate-200"></div>
                <div className="h-8 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl bg-slate-200"></div>
                <div className="h-5 rounded-2xl w-64 bg-slate-200"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center col-span-3 flex items-center justify-center flex-col h-[200px]">
              <div className="border-[3px] border-black text-4xl font-bold size-16 mb-4 rounded-full flex items-center justify-center">
                !
              </div>
              <div className="text-lg font-semibold">
                Can't connect to Network
              </div>
              <div className="text-sm">{error}</div>
            </div>
          ) : (
            blogs.map((blog, index) => (
              <Fader key={index}>
                <a
                  href=""
                  className="shadow-md hover:shadow-xl block h-full duration-300 rounded-3xl overflow-hidden"
                >
                  <img
                    src="img/about1.png"
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <div
                      className="text-xl font-semibold text-blue-950 line-clamp-2"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {blog.title}
                    </div>
                    <div
                      className="text-sm pt-2 text-neutral-500/80 line-clamp-2"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                      }}
                    >
                      {blog.content}
                    </div>
                  </div>
                </a>
              </Fader>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
