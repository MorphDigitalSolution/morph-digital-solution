"use client";
import React, { useEffect, useState } from "react";
import { SidebarLink } from "../components/ui/sidebar";
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
// import BlogForm from "./BlogForm";
import BlogList from "../components/component/BlogList";
import axios from "axios";
import MessageList from "../components/component/MessageList";

export default function Page() {
  const links = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Blogs",
      href: "/admin/blog",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Messages",
      href: "/admin/message",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/login?logout=1",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
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
      <div className="h-5 w-6 bg-primary-foreground dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-neutral-100 whitespace-pre"
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

// Dummy dashboard component with content
// Dummy dashboard component with content
const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/messages");
        setMessages(res.data);
      } catch (err) {
        setError("Can't connect to network. Please try again later.");
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-1 md:ps-16 bg-gray-50 min-h-screen">
      <div className="p-4 md:p-8 flex flex-col gap-6 flex-1 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Message Management</h1>
          <p className="text-gray-600">View and manage contact messages from your website.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Read Messages</p>
                <p className="text-2xl font-bold text-gray-900">
                  {messages.filter(msg => msg.read).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">
                  {messages.filter(msg => !msg.read).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Messages</h2>
          <MessageList
            messages={messages}
            setMessages={setMessages}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};
