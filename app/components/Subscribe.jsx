"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React, { useState } from "react";
import axios from "axios";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sending POST request to the subscribe API
      await axios.post("https://morph-api-server.vercel.app/api/subscribes", {
        email,
      });

      // Reset form input
      setEmail("");

      // Display success message
      setMessage("Thank you for subscribing!");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide after 3 seconds
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide after 3 seconds
    }
  };

  return (
    <div className="bg-neutral-700 text-neutral-300">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 py-5 lg:py-20">
        <div className="px-5">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Subscribe</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-3xl lg:text-5xl font-extrabold lg:py-2 text -blue-950">
              <span className="text-amber-900">Subscribe</span> To Get Latest
              Update From Us
            </div>
          </BoxReveal>
        </div>
        <div className="p-5 lg:p-8">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-sm text-neutral-300/80 leading-[1.8]">
              နောက်ဆုံးရသတင်းတွေ၊ အသိပညာတွေ၊ အထူးပရိုမိုးရှင်းတွေကို
              သင့်အီးမေးလ်ပုံးထဲ တိုက်ရိုက်လက်ခံရရှိဖို့ ကျွန်တော်တို့ရဲ့
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
                className="w-full py-2 px-4 lg:px-5 lg:py-3 outline-none border border-neutral-700 bg-neutral-900 placeholder:text-neutral-700 rounded-full"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-amber-900 hover:bg-amber-900 duration-300 text-neutral-300 py-3 text-sm px-7 font-semibold rounded-full uppercase"
              >
                Sign Up !
              </button>
            </div>
          </form>
          {showSuccess && (
            <div className="fixed z-30 bottom-5 right-5 bg-white border-2 border-amber-900 rounded-lg p-3 text-center text-amber-900 font-bold  animate-slide-in-out">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
