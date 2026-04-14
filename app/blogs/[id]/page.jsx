// app/blog/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import { useParams } from "next/navigation"; // Import useParams
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroHalf from "@/components/HeroHalf";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import {
  FaFacebook,
  FaLinkedin,
  FaPersonBooth,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import AboutAuthor from "../components/AboutAuthor";
import Link from "next/link";
import Fader from "@/components/magicui/Fader";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the id from the useParams hook
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Ensure that id is available before making the request

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        // Filter out the current blog and take the first 4 recent posts
        const filteredBlogs = response.data.filter(b => b._id !== id).slice(0, 4);
        setRecentBlogs(filteredBlogs);
      } catch (err) {
        console.error("Failed to load recent blogs:", err);
      } finally {
        setBlogsLoading(false);
      }
    };

    fetchBlog();
    fetchRecentBlogs();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen w-full flex items-center justify-center gap-2 flex-col">
        <img loading="lazy" 
          src="https://morph-digital-mm.vercel.app/img/logo-sm.png"
          alt=""
          className="h-20 invert animate-pulse"
        />
        <div className="">Loading...</div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      {blog ? (
        <>
          <div className="h-[480px] relative overflow-hidden">
            <img loading="lazy" 
              src="https://morph-digital-mm.vercel.app/img/heroSect.jpg"
              alt="hero image"
              className="w-full h-full object-cover object-top brightness-[0.5]"
            />
            <div className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-neutral-800/5 flex items-center justify-center">
              <div className="max-w-5xl flex flex-col items-center text-center pt-24">
                <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                  <div className="text-[2rem] lg:text-[3rem] leading-[1.5] px-8 lg:px-16 font-extrabold pt-3 lg:py-2">
                    {blog.title}
                  </div>
                  <div className="border-y border-white w-fit mx-auto flex gap-5 p-2 mt-3">
                    <div className="flex gap-2 items-center">
                      <IoPersonCircle className="text-xl text-amber-700" />
                      {blog.author}
                    </div>
                    <div className="border-s ps-5 flex gap-2 items-center">
                      <SlCalender className="text-lg text-amber-700" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </BoxReveal>
              </div>
            </div>
          </div>
          <div className="max-w-6xl px-5 mx-auto py-10 lg:py-20 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <img loading="lazy" 
                src="https://morph-digital-mm.vercel.app/img/meeting.png"
                alt=""
                className="w-full rounded-3xl"
              />
              <p className="text-neutral-600 mb-2 whitespace-pre-wrap leading-[1.5] py-10">
                {blog.content}
              </p>
              <p className="text-[#6F4E37b1] text-sm">By {blog.author}</p>
              <p className="text-[#6F4E37b1] text-sm">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
            <AboutAuthor blogs={recentBlogs} loading={blogsLoading} />
          </div>
        </>
      ) : (
        <div>No blog found</div>
      )}

      {/* Recent Posts Section */}
      {recentBlogs.length > 0 && (
        <div className="bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                You Might Also Like
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover more articles that might interest you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogsLoading ? (
                // Loading skeleton
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
                    <div className="h-48 bg-slate-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-5 bg-slate-200 rounded"></div>
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))
              ) : (
                recentBlogs.map((recentBlog, index) => (
                  <Fader key={recentBlog._id || index} duration={0.6}>
                    <Link
                      href={`/blogs/${recentBlog._id}`}
                      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl block overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          loading="lazy"
                          src={recentBlog.image || "https://morph-digital-mm.vercel.app/img/meeting.png"}
                          alt={recentBlog.title || "Blog post"}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                          {recentBlog.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
                          {recentBlog.content?.replace(/<[^>]*>/g, '') || 'Read more about this topic...'}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="font-medium">{recentBlog.author || 'Morph Digital'}</span>
                          <span>{recentBlog.createdAt ? new Date(recentBlog.createdAt).toLocaleDateString() : 'Recent'}</span>
                        </div>
                      </div>
                    </Link>
                  </Fader>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BlogDetail;
