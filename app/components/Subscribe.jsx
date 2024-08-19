import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Subscribe() {
  return (
    <div className="bg-zinc-100/50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 py-5 lg:py-20">
        <div className="px-5">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Subscribe</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-3xl lg:text-5xl font-extrabold lg:py-2 text-blue-950">
              <span className="text-amber-700">Subscribe</span> To Get Latest
              Update From Us
            </div>
          </BoxReveal>
        </div>
        <div className="p-5 lg:p-10">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-sm text-blue-950/70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              architecto non sedwq ertru ylut agowwe atwewer suscipi.
            </div>
          </BoxReveal>
          <form className="grid lg:grid-cols-3 gap-4 pt-8">
            <div className="lg:col-span-2">
              <input
                type="text"
                required
                placeholder="Your Email*"
                className="w-full py-2 px-4 lg:px-5 lg:py-3 outline-none border border-zinc-400 rounded-full"
              />
            </div>
            <div className="">
              <button
                href=""
                className="bg-amber-700 hover:bg-amber-800 duration-300 text-white py-3 text-sm px-7 font-semibold rounded-full uppercase"
              >
                Sign Up !
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
