"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Fader from "@/components/magicui/Fader";
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
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
    <div className="">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="grid lg:grid-cols-3 px-5 gap-12">
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-8 py-10">
            {loading && blogs.length === 0 ? (
              <div className="col-span-2 grid lg:grid-cols-2 gap-10">
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
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="shadow-lg hover:shadow-2xl block h-full duration-300 rounded-3xl overflow-hidden"
                  >
                    <img
                      src="img/meeting.png"
                      alt=""
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <div
                        className="text-xl font-semibold text-[#6F4E37] line-clamp-2"
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
                        className="text-sm pt-2 text-[#6F4E37b1] line-clamp-2"
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
          <div className="flex flex-col items-center text-center py-10 gap-5">
            <TitlePillow>About Author</TitlePillow>
            <img
              src="img/office.jpeg"
              alt=""
              className="h-28 rounded-full my-2 aspect-square object-cover"
            />
            <div className="text-xl font-semibold">Lin Thandar Phyo</div>
            <div className="text-neutral-500">
              Founder an CEO of Morph - Website and Digital Marketing Company
            </div>
            <div className="flex gap-3 pt-3 text-neutral-100">
              <a
                href=""
                className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
              >
                <FaFacebook className="" />
              </a>
              <a
                href=""
                className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
              >
                <FaTwitter className="" />
              </a>
              <a
                href=""
                className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
              >
                <FaTelegram className="" />
              </a>
              <a
                href=""
                className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
              >
                <FaLinkedin className="" />
              </a>
            </div>
            <TitlePillow>Recent Posts</TitlePillow>
            <div className="grid text-start gap-4">
              <div className="grid grid-cols-3 gap-5">
                <img
                  src="img/meeting.png"
                  alt=""
                  className="aspect-square object-cover rounded-3xl"
                />
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="font-semibold">
                  Digital Services မှန်သမျှအကုန်ရတဲ့ Morph Website...
                  </div>
                  <div className="text-xs text-neutral-500">
                    November 22, 2023
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <img
                  src="img/meeting.png"
                  alt=""
                  className="aspect-square object-cover rounded-3xl"
                />
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="font-semibold">
                  SME လုပ်ငန်းများအတွက် ထိရောက်သော SEO ‌အလေ့...
                  </div>
                  <div className="text-xs text-neutral-500">
                    November 22, 2023
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <img
                  src="img/meeting.png"
                  alt=""
                  className="aspect-square object-cover rounded-3xl"
                />
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="font-semibold">
                  စီးပွားရေးလုပ်ငန်းမှတ်ပုံတင်ခြင်း - A Step-by-Step...
                  </div>
                  <div className="text-xs text-neutral-500">
                    November 22, 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
