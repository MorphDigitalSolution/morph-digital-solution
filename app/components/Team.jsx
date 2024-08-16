import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Team() {
  return (
    <div className="p-8 py-20 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center flex-col">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Our Team</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-4xl lg:text-5xl font-extrabold lg:py-2 text-blue-950">
              <span className="text-amber-700">Team</span> Members
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-center max-w-xl mx-auto text-blue-950/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vel dolor oribus alias praesentium error sunt aut pariatur veniam
              digni.
            </div>
          </BoxReveal>
          <div className="grid lg:grid-cols-4 gap-8 p-16 w-full">
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden"></div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden"></div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden"></div>
            <div className="bg-slate-200 relative rounded-3xl aspect-square overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
