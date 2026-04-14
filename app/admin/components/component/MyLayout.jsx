"use client";
import React, { useEffect, useState } from "react";
import { SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconMenu2,
  IconSettings,
  IconUserBolt,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import axios from "axios";

export function MyLayout() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Blogs",
      href: "/admin/blog",
      icon: <IconUserBolt className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Messages",
      href: "/admin/message",
      icon: <IconSettings className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "/login?logout=1",
      icon: <IconArrowLeft className="h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <div className="hidden md:flex md:flex-col w-[280px] border-r border-slate-200 bg-white px-6 py-6">
          <Logo />
          <nav className="mt-10 flex-1 space-y-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </nav>
          <div className="mt-auto">
            <SidebarLink
              link={{
                label: "Admin",
                href: "#",
                icon: (
                  <Image
                    src="/img/woman.png"
                    className="h-9 w-9 rounded-full object-cover"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-900">Admin panel</div>
            <button
              className="rounded-full bg-slate-100 p-2 text-slate-700"
              onClick={() => setOpen(!open)}
              type="button"
            >
              <IconMenu2 className="h-5 w-5" />
            </button>
          </header>

          {open && (
            <div className="fixed inset-0 z-50 bg-slate-900/40 md:hidden">
              <div className="h-full w-72 bg-white p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    className="rounded-full bg-slate-100 p-2 text-slate-700"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    <IconX className="h-5 w-5" />
                  </button>
                </div>
                <nav className="mt-8 space-y-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </nav>
              </div>
            </div>
          )}

          <main className="flex-1 overflow-y-auto p-6 md:p-10 max-w-7xl mx-auto w-full">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-white dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre"
      >
        Morph - Admin Panel
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-primary-foreground dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data || []);
      } catch (err) {
        setError("Connection timed out. Please try again later.");
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="space-y-8">
        <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Blog admin</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Blog management</h1>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">
              Use this page to publish or update blog content quickly.
            </p>
          </div>
        </section>

        {error && (
          <div className="rounded-3xl bg-rose-50 border border-rose-200 p-5 text-rose-700">
            {error}
          </div>
        )}

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Create a new post</h2>
            <BlogForm addBlog={addBlog} />
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">All posts</h2>
            <BlogList blogs={blogs} setBlogs={setBlogs} loading={loading} error={error} />
          </div>
        </section>
      </div>
    </div>
  );
};
