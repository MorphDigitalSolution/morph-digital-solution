"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const MessageForm = ({ className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const noticeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (noticeTimerRef.current) {
        clearTimeout(noticeTimerRef.current);
      }
    };
  }, []);

  const showNotice = (text, type) => {
    setNotice({ message: text, type });
    if (noticeTimerRef.current) {
      clearTimeout(noticeTimerRef.current);
    }
    noticeTimerRef.current = setTimeout(() => {
      setNotice({ message: "", type: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
    };

    if (!newMessage.name || !newMessage.email || !newMessage.phone) {
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("/api/messages", newMessage);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      showNotice("Message sent successfully!", "success");
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        "We could not send your message. Please try again.";
      showNotice(errorMessage, "error");
      console.error("Error submitting message:", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={className}>
        <div className="text-center text-2xl lg:text-4xl font-bold text-[#6F4E37]">
          Get In Touch!
        </div>
        <div className="text-center text-sm pt-2 pb-6 text-[#6F4E37b1]">
          သင့်ဆီက ကြားရတာ အရမ်းဝမ်းသာပါတယ်။ အောက်ပါဖောင်ကို ဖြည့်ပေးပါ၊
          ကျွန်တော်တို့ မကြာခင်မှာပဲ ပြန်လည်ဆက်သွယ်ပါမယ်။
        </div>
        <div className="mb-4">
          <input
            placeholder="Your Name*"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="w-full p-3 rounded-3xl placeholder:text-neutral-500 bg-neutral -950 border-neutral-400 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Your email*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full p-3 rounded-3xl placeholder:text-neutral-500 bg-neutral -950 border-neutral-400 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Your phone*"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            className="w-full p-3 rounded-3xl placeholder:text-neutral-500 bg-neutral -950 border-neutral-400 border outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Leave a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-3xl placeholder:text-neutral-500 bg-neutral -950 border-neutral-400 border outline-none h-32 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="bg-amber-600 font-semibold text-sm uppercase text-neutral-100 py-3 px-8 rounded-full hover:bg-amber-700 relative z-30"
        >
          {isSubmitting ? "Submitting..." : "Submit Message"}
        </button>
      </form>

      {notice.message && (
        <div
          className={`fixed z-40 bottom-5 right-5 border-2 bg-white px-4 py-2 rounded-lg shadow-lg animate-slide-in-out ${
            notice.type === "success"
              ? "border-amber-900 text-amber-700"
              : "border-red-700 text-red-700"
          }`}
        >
          {notice.message}
        </div>
      )}
    </>
  );
};

export default MessageForm;
