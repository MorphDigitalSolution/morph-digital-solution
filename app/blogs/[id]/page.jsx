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

  if (loading)
    return (
      <div className="h-screen w-full flex items-center justify-center gap-2 flex-col">
        <img src="https://morph-digital-mm.vercel.app/img/logo-sm.png" alt="" className="h-20 invert animate-pulse" />
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
            <img
              src="https://morph-digital-mm.vercel.app/img/hero.png"
              alt="hero image"
              className="w-full h-full object-cover object-top brightness-[0.5]"
            />
            <div className="absolute top-0 left-0 w-full h-full text-white bg-neutral-800/5 flex items-center justify-center">
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
              <img
                src="https://morph-digital-mm.vercel.app/img/about2.png"
                alt=""
                className="w-full rounded-3xl"
              />
              <p className="text-neutral-600 mb-2 whitespace-pre-wrap leading-[1.5] py-10">
                {blog.content}
              </p>
              <p className="text-neutral-500/80 text-sm">By {blog.author}</p>
              <p className="text-neutral-500/80 text-sm">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-center text-center py-10 gap-5">
              <TitlePillow>About Author</TitlePillow>
              <img
                src="https://morph-digital-mm.vercel.app/img/profile.png"
                alt=""
                className="h-28 rounded-full my-2"
              />
              <div className="text-xl font-semibold">Marcus Robert</div>
              <div className="text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                laboriosam pariatur, necessitatibus nesciunt dol.
              </div>
              <div className="flex gap-3 pt-3 pb-5 text-white">
                <a
                  href=""
                  className="bg-amber-700 hover:bg-amber-800 duration-300 size-8 flex items-center justify-center rounded-full"
                >
                  <FaFacebook className="" />
                </a>
                <a
                  href=""
                  className="bg-amber-700 hover:bg-amber-800 duration-300 size-8 flex items-center justify-center rounded-full"
                >
                  <FaTwitter className="" />
                </a>
                <a
                  href=""
                  className="bg-amber-700 hover:bg-amber-800 duration-300 size-8 flex items-center justify-center rounded-full"
                >
                  <FaTelegram className="" />
                </a>
                <a
                  href=""
                  className="bg-amber-700 hover:bg-amber-800 duration-300 size-8 flex items-center justify-center rounded-full"
                >
                  <FaLinkedin className="" />
                </a>
              </div>
              <TitlePillow>Recent Posts</TitlePillow>
              <div className="grid text-start gap-4 py-5">
                <div className="grid grid-cols-3 gap-5">
                  <img
                    src="https://morph-digital-mm.vercel.app/img/about1.png"
                    alt=""
                    className="aspect-square object-cover rounded-3xl"
                  />
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="font-semibold">
                      Thiqwe rrgq qerhtyj ehkurte erth rhqem hwet.
                    </div>
                    <div className="text-xs text-neutral-500">
                      November 22, 2023
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <img
                    src="https://morph-digital-mm.vercel.app/img/about2.png"
                    alt=""
                    className="aspect-square object-cover rounded-3xl"
                  />
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="font-semibold">
                      Thiqwe rrgq qerhtyj ehkurte erth rhqem hwet.
                    </div>
                    <div className="text-xs text-neutral-500">
                      November 22, 2023
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <img
                    src="https://morph-digital-mm.vercel.app/img/about3.png"
                    alt=""
                    className="aspect-square object-cover rounded-3xl"
                  />
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="font-semibold">
                      Thiqwe rrgq qerhtyj ehkurte erth rhqem hwet.
                    </div>
                    <div className="text-xs text-neutral-500">
                      November 22, 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No blog found</div>
      )}
      <Footer />
    </>
  );
};

export default BlogDetail;
