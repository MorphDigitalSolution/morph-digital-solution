import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";
import { BiCurrentLocation, BiLocationPlus, BiMailSend, BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

function ContactInfo() {
  return (
    <div className="p-8 lg:py-16">
      <div className="max-w-6xl mx-auto p-5">
        <div className="flex gap-2 items-center justify-center flex-col text-center">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Contact Info</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 text-blue-950">
              <span className="text-amber-700">Contact</span> & Join Together
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-center max-w-xl mx-auto text-blue-950/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vel dolor oribus alias praesentium error sunt aut pariatur veniam
              digni.
            </div>
          </BoxReveal>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 py-10">
            <div className="shadow-xl shadow-black/10 rounded-3xl border border-zinc-100 p-6">
                <div className="flex gap-3 pb-3">
                    <div className="">
                        <BiCurrentLocation className="text-5xl" />
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold uppercase">Location</div>
                        <div className="text-lg text-amber-700 font-semibold">Visit Us At</div>
                    </div>
                </div>
                <div className="text-blue-950/70">lorem weao wrgo qr wethr</div>
                <div className="text-blue-950/70">lorem weao wrgo qr wethr</div>
            </div>
            <div className="shadow-xl shadow-black/10 rounded-3xl border border-zinc-100 p-6">
                <div className="flex gap-3 pb-3">
                    <div className="">
                        <BiSolidPhoneCall className="text-5xl" />
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold uppercase">24*7 service</div>
                        <div className="text-lg text-amber-700 font-semibold">Call Us On</div>
                    </div>
                </div>
                <div className="text-blue-950/70">Tel: 09 786 063 014</div>
                <div className="text-blue-950/70">Mob: 09 786 063 014</div>
            </div>
            <div className="shadow-xl shadow-black/10 rounded-3xl border border-zinc-100 p-6">
                <div className="flex gap-3 pb-3">
                    <div className="">
                        <BiMailSend className="text-5xl" />
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold uppercase">Drop a line</div>
                        <div className="text-lg text-amber-700 font-semibold">Mail Address</div>
                    </div>
                </div>
                <div className="text-blue-950/70">morphwebsite@gmail.com</div>
                <div className="text-blue-950/70">domain@company.com</div>
            </div>
            <div className="shadow-xl shadow-black/10 rounded-3xl border border-zinc-100 p-6">
                <div className="flex gap-3 pb-3">
                    <div className="">
                        <FaClock className="text-5xl p-1" />
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold uppercase">Office hours</div>
                        <div className="text-lg text-amber-700 font-semibold">Opening Time</div>
                    </div>
                </div>
                <div className="text-blue-950/70">Mon – Fri : 9am – 6pm</div>
                <div className="text-blue-950/70">Sunday (Closed)</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
