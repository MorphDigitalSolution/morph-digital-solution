"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Subscribe() {
  const [email, setEmail] = useState("");
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

  const showNotice = (message, type) => {
    setNotice({ message, type });

    if (noticeTimerRef.current) {
      clearTimeout(noticeTimerRef.current);
    }

    noticeTimerRef.current = setTimeout(() => {
      setNotice({ message: "", type: "" });
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setIsSubmitting(true);

    try {
      await axios.post("/api/subscribes", {
        email: normalizedEmail,
      });
      setEmail("");
      showNotice("Thank you for subscribing!", "success");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "An error occurred. Please try again later.";
      showNotice(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg -neutral-700 text -neutral-300">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 py-5 lg:py-20">
        <div className="px-5">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Subscribe</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-3xl lg:text-5xl font-extrabold lg:py-2 text-[#6F4E37]">
              <span className="text-amber-600">Subscribe</span> To Get Latest
              Update From Us
            </div>
          </BoxReveal>
        </div>
        <div className="p-5 lg:p-8">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-sm text-neutral-500 leading-[1.8]">
              နောက်ဆုံးရသတင်းတွေ၊ အသိပညာတွေ၊ အထူးပရိုမိုးရှင်းတွေကို
              သင့်အီးမေးလ်ထဲ တိုက်ရိုက်လက်ခံရရှိဖို့ ကျွန်တော်တို့ရဲ့
              မေးလ်စာရင်းကို ဝင်ရောက်လိုက်ပါ။
            </div>
          </BoxReveal>
          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-3 gap-4 pt-8"
          >
            <div className="lg:col-span-2">
              <input
                type="email"
                required
                placeholder="Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full py-2 px-4 lg:px-5 lg:py-3 outline-none border border-neutral-400 bg- neutral-900 placeholder:text-neutral-400 rounded-full"
              />
            </div>
            <div className="">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="bg-amber-600 hover:bg-amber-700 duration-300 text-neutral-100 py-3 text-sm px-7 font-semibold rounded-full uppercase"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up !"}
              </button>
            </div>
          </form>
          {notice.message && (
            <div
              className={`fixed z-30 bottom-5 right-5 bg-white border-2 rounded-lg p-3 text-center font-bold animate-slide-in-out ${
                notice.type === "success"
                  ? "border-amber-900 text-amber-700"
                  : "border-red-700 text-red-700"
              }`}
            >
              {notice.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
