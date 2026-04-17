"use client";
import React, { useEffect, useState } from "react";
import { SidebarLink } from "../ui/sidebar";
import {
  IconMenu2,
  IconLayoutDashboard,
  IconX,
  IconArticle,
  IconMessage,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import axios from "axios";
import MessageList from "./MessageList";
import SubscriberList from "./SubscriberList";
import { usePathname } from "next/navigation";

export function MyLayout2() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: <IconLayoutDashboard className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Blogs",
      href: "/admin/blog",
      icon: <IconArticle className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Messages",
      href: "/admin/message",
      icon: <IconMessage className="h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "/login?logout=1",
      icon: <IconLogout className="h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <div className="hidden md:flex md:flex-col w-[280px] border-r border-slate-200 bg-white px-6 py-6">
          <Logo />
          <nav className="mt-10 flex-1 space-y-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                active={pathname === link.href}
              />
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
            <div className="text-lg font-semibold text-slate-900">
              Admin panel
            </div>
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
  const [messages, setMessages] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data || []);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
        console.error(err.message);
      }
    };

    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/messages");
        setMessages(res.data || []);
      } catch (err) {
        setError("Failed to load messages. Please try again later.");
        console.error(err.message);
      }
    };

    const fetchSubscribers = async () => {
      try {
        const res = await axios.get("/api/subscribes");
        setSubscribers(res.data || []);
      } catch (err) {
        setError("Failed to load subscribers. Please try again later.");
        console.error(err.message);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchBlogs(), fetchMessages(), fetchSubscribers()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    setIsModalOpen(false); // Close modal after adding blog
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="space-y-8">
        <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Admin dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
              Welcome back.
            </h1>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">
              Manage posts, messages, and subscribers in one simple admin view.
            </p>
          </div>
        </section>

        {error && (
          <div className="rounded-3xl bg-rose-50 border border-rose-200 p-5 text-rose-700">
            {error}
          </div>
        )}

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total blogs</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {blogs.length}
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total messages</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {messages.length}
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total subscribers</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {subscribers.length}
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-slate-500">Weekly growth</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">+12%</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 lg:hidden">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Subscribers
              </h2>
              <SubscriberList
                subscribers={subscribers}
                setSubscribers={setSubscribers}
                loading={loading}
                error={error}
              />
            </div>
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Messages
              </h2>
              <MessageList
                messages={messages}
                setMessages={setMessages}
                loading={loading}
                error={error}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Blog management
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Create, edit and remove blog posts from your site.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Create new blog
              </button>
            </div>
            <BlogList
              blogs={blogs}
              setBlogs={setBlogs}
              loading={loading}
              error={error}
            />
          </div>

          <div className="space-y-6 hidden lg:block">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Subscribers
              </h2>
              <SubscriberList
                subscribers={subscribers}
                setSubscribers={setSubscribers}
                loading={loading}
                error={error}
              />
            </div>
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Messages
              </h2>
              <MessageList
                messages={messages}
                setMessages={setMessages}
                loading={loading}
                error={error}
              />
            </div>
          </div>
        </section>

        {/* Modal for creating new blog */}
        {isModalOpen && (
          <div className="fixed p-2 inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-md -translate-y-3 scale-105">
            <div className="relative max-w-2xl w-full mx-4 bg-white rounded-3xl shadow-xl">
              <div className="p relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-100 hover:text-slate-600 transition-colors block ms-auto mb-2 bg-black rounded-full p-2 absolute top-5 right-5"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <BlogForm addBlog={addBlog} loading={loading} error={error} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
