"use client";

import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import EditBlogForm from "./EditBlogForm";

const MessageList = ({ messages, setMessages, loading, error }) => {
  const [editingMessage, setEditingMessage] = useState(null);

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

  // Ensure messages is an array
  const sortedMessages = Array.isArray(messages)
    ? [...messages].sort(
        (a, b) => new Date(b.sentAt) - new Date(a.sentAt)
      )
    : [];

  // Handle message deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://morph-api-server.vercel.app/api/messages/${id}`
      );
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
    } catch (err) {
      console.error("Error deleting message:", err.message);
      alert("Failed to delete the message. Please try again.");
    }
  };

  // Edit message
  const handleEditClick = (message) => {
    setEditingMessage(message);
  };

  const handleEditCancel = () => {
    setEditingMessage(null);
  };

  const handleEditSubmit = async (updatedMessage) => {
    try {
      const response = await axios.put(
        `https://morph-api-server.vercel.app/api/messages/${updatedMessage._id}`,
        updatedMessage
      );
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message._id === updatedMessage._id ? response.data : message
        )
      );
      setEditingMessage(null);
    } catch (err) {
      console.error("Error updating message:", err.message);
      alert("Failed to update the message. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl text-black mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      {sortedMessages.map((message) => (
        <div
          key={message._id}
          className="bg-white p-6 rounded-lg shadow-md mb-4"
        >
          {editingMessage && editingMessage._id === message._id ? (
            <div>Edit form goes here</div>
          ) : (
            <>
              <h3 className="font-semibold mb-2">Name: {message.name}</h3>
              <h3 className="font-semibold mb-2">Email: {message.email}</h3>
              <h3 className="font-semibold mb-2">Phone: {message.phone}</h3>
              <p className="text-neutral-500/80 mb-2 whitespace-pre-wrap">
                {message.message.substring(0, 100)}...
              </p>
              <p className="text-neutral-500/80 text-sm">
                {new Date(message.sentAt).toLocaleDateString()}
              </p>
              <div className="flex pt-3">
                {/* <button
                  onClick={() => handleEditClick(message)}
                  className="bg-[#e1c769] rounded-lg text-white text-sm px-3 py-1 mr-2 flex items-center gap-1"
                >
                  Edit <FaEdit className="text-base" />
                </button> */}
                <button
                  className="bg-red-500 hover:shadow-lg hover:shadow-red-500 duration-300 hover:scale-105 active:scale-90 text-white text-sm px-3 py-1 rounded-lg flex items-center gap-1"
                  onClick={() => handleDelete(message._id)}
                >
                  Delete <MdDelete className="text-base" />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
