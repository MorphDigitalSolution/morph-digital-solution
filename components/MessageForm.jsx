"use client";
import React, { useState } from "react";
import axios from "axios";

const MessageForm = ({ className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State to control success message visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { name, email, phone, message };

    try {
      const res = await axios.post(
        "https://morph-api-server.vercel.app/api/messages",
        newBlog
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Show success message
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide after 3 seconds
    } catch (err) {
      console.error("Error creating blog:", err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={className}>
        <div className="text-center text-2xl lg:text-4xl font-bold text-neutral-200">
          Get In Touch!
        </div>
        <div className="text-center text-sm pt-2 pb-6 text-neutral-300/80">
          သင့်ဆီက ကြားရတာ အရမ်းဝမ်းသာပါတယ်။ အောက်ပါဖောင်ကို ဖြည့်ပေးပါ၊
          ကျွန်တော်တို့ မကြာခင်မှာပဲ ပြန်လည်ဆက်သွယ်ပါမယ်။
        </div>
        <div className="mb-4">
          <input
            placeholder="Your Name*"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-3xl text-neutral-300 placeholder:text-neutral-700 bg-neutral-950 border-neutral-700 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Your email*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-3xl text-neutral-300 placeholder:text-neutral-700 bg-neutral-950 border-neutral-700 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Your phone*"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-3xl text-neutral-300 placeholder:text-neutral-700 bg-neutral-950 border-neutral-700 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Leave a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-3xl text-neutral-300 placeholder:text-neutral-700 bg-neutral-950 border-neutral-700 border outline-none h-32 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-900 font-semibold text-sm uppercase text-neutral-300 py-3 px-8 rounded-full hover:bg-amber-900 relative z-30"
        >
          Submit Message
        </button>
      </form>

      {/* Success message */}
      {showSuccess && (
        <div className="fixed z-40 bottom-5 right-5 border-2 bg-white border-amber-900 text-amber-900 px-4 py-2 rounded-lg shadow-lg animate-slide-in-out">
          Message sent successfully!
        </div>
      )}
    </>
  );
};

export default MessageForm;
