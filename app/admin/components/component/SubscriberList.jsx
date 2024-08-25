"use client";

import axios from "axios";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const SubscriberList = ({ subscribers, setSubscribers, loading, error }) => {
  const [editingSubscriber, setEditingSubscriber] = useState(null);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col gap-5 text-black">
        <h2 className="text-2xl font-semibold mb-4">Subscribers</h2>
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

  // Ensure subscribers is an array
  const sortedSubscribers = Array.isArray(subscribers)
    ? [...subscribers].sort(
        (a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt)
      )
    : [];

  // Handle subscriber deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://morph-api-server.vercel.app/api/subscribes/${id}`
      );
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((subscriber) => subscriber._id !== id)
      );
    } catch (err) {
      console.error("Error deleting subscriber:", err.message);
      alert("Failed to delete the subscriber. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl text-black mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Subscribers</h2>
      {sortedSubscribers.map((subscriber) => (
        <div
          key={subscriber._id}
          className="bg-white p-6 rounded-lg shadow-md mb-4"
        >
          <h3 className="font-semibold mb-2">Email: {subscriber.email}</h3>
          <p className="text-neutral-500/80 text-sm">
            {new Date(subscriber.sentAt).toLocaleDateString()}
          </p>
          <div className="flex pt-3">
            <button
              className="bg-red-500 hover:shadow-lg hover:shadow-red-500 duration-300 hover:scale-105 active:scale-90 text-white text-sm px-3 py-1 rounded-lg flex items-center gap-1"
              onClick={() => handleDelete(subscriber._id)}
            >
              Delete <MdDelete className="text-base" />
            </button>
          </div>x
        </div>
      ))}
    </div>
  );
};

export default SubscriberList;
