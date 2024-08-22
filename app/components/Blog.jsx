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
    <div className="lg:pt-20">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex flex-col items-center justify-center px-5">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Our Blogs</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-3xl lg:text-5xl font-extrabold py-1 lg:py-2 text-blue-950">
              <span className="text-amber-700">Blog</span> & News From Us
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-center text-sm lg:text-base max-w-xl mx-auto text-blue-950/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vel dolor oribus alias praesentium error sunt aut pariatur veniam
              digni.
            </div>
          </BoxReveal>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 py-10 px-5">
          {loading && blogs.length === 0 ? (
            <div className="col-span-3 grid grid-cols-3 gap-10">
              <div className="h-[400px] animate-pulse bg-slate-400 rounded-3xl"></div>
              <div className="h-[400px] animate-pulse bg-slate-400 rounded-3xl"></div>
              <div className="h-[400px] animate-pulse bg-slate-400 rounded-3xl"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            blogs.slice(0, 3).map((blog, index) => (
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
                      className="text-sm pt-2 text-blue-950/70 line-clamp-2"
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
