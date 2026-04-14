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

  const sortedSubscribers = Array.isArray(subscribers)
    ? [...subscribers].sort(
        (a, b) =>
          new Date(b.subscribedAt || b.createdAt) -
          new Date(a.subscribedAt || a.createdAt)
      )
    : [];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/subscribes/${id}`);
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((subscriber) => subscriber._id !== id)
      );
    } catch (err) {
      console.error("Error deleting subscriber:", err.message);
      alert("Failed to delete the subscriber. Please try again.");
    }
  };

  if (!sortedSubscribers.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
        <p className="text-lg font-medium text-slate-900 mb-2">No subscribers yet</p>
        <p>Subscribers will appear here once users sign up for updates.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedSubscribers.map((subscriber) => (
        <div
          key={subscriber._id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-900 font-semibold">{subscriber.email}</p>
            <p className="text-sm text-slate-500">
              {new Date(subscriber.subscribedAt || subscriber.createdAt).toLocaleDateString()}
            </p>
          </div>
          <button
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
            onClick={() => handleDelete(subscriber._id)}
          >
            <MdDelete className="text-base" /> Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubscriberList;
