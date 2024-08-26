"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Fader from "@/components/magicui/Fader";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto pt-20">
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
            <div className="text-center text-sm lg:text-base max-w-xl mx-auto text-neutral-500/80">
              Explore our latest blogs and news updates. Stay connected and
              informed with insights, tips, and stories from our team.
            </div>
          </BoxReveal>
        </div>
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
            blogs.slice(0, 3).map((blog, index) => (
              <Fader key={index}>
                <Link
                  href={`/blogs/${blog._id}`}
                  className="shadow-md hover:shadow-2xl block h-full duration-300 rounded-3xl overflow-hidden"
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
                </Link>
              </Fader>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
