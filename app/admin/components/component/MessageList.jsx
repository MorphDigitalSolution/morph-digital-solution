"use client";

import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const MessageList = ({ messages, setMessages, loading, error }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col gap-5 text-black">
        <h2 className="text-2xl font-semibold mb-4">Messages</h2>
        <div className="bg-neutral-400 rounded-lg animate-pulse h-32"></div>
        <div className="bg-neutral-400 rounded-lg animate-pulse h-32"></div>
        <div className="bg-neutral-400 rounded-lg animate-pulse h-32"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <div className="text-5xl border-2 w-16 h-16 flex items-center justify-center rounded-full">
          !
        </div>
        {error}
      </div>
    );
  }

  const sortedMessages = Array.isArray(messages)
    ? [...messages].sort(
        (a, b) =>
          new Date(b.sentAt || b.createdAt) - new Date(a.sentAt || a.createdAt)
      )
    : [];

  // Handle message deletion
  const handleDelete = async (id) => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await axios.delete(`/api/messages/${id}`);
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
    } catch (err) {
      console.error("Error deleting message:", err.message);
      alert("Failed to delete the message. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!sortedMessages.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
        <p className="text-lg font-medium text-slate-900 mb-2">No messages yet</p>
        <p>Messages will appear here after users contact you through the website.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedMessages.map((message) => (
        <div
          key={message._id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 space-y-2 text-slate-800">
            <p className="font-semibold">Name: {message.name}</p>
            <p className="text-sm text-slate-500">Email: {message.email}</p>
            {message.phone && <p className="text-sm text-slate-500">Phone: {message.phone}</p>}
          </div>
          <p className="text-slate-600 whitespace-pre-wrap">
            {message.message?.substring(0, 140)}...
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
            <span>{new Date(message.sentAt || message.createdAt).toLocaleDateString()}</span>
            <button
              className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-4 py-2 text-white transition hover:bg-rose-600 disabled:opacity-70"
              onClick={() => handleDelete(message._id)}
              disabled={isDeleting}
            >
              <MdDelete className="text-base" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
