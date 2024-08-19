import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Blog() {
  return (
    <div className="lg:pt-20">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex flex-col items-center justify-center px-5">
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="pb-2">
              <TitlePillow>Our Blogs</TitlePillow>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-3xl lg:text-5xl font-extrabold py-1 lg:py-2 text-blue-950">
              <span className="text-amber-700">Blog</span> & News From Us
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#b45309"} duration={0.5}>
            <div className="text-center text-sm lg:text-base max-w-xl mx-auto text-blue-950/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vel dolor oribus alias praesentium error sunt aut pariatur veniam
              digni.
            </div>
          </BoxReveal>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 py-10 px-5">
          <a href="" className="shadow-md hover:shadow-xl duration-300 rounded-3xl overflow-hidden">
            <img
              src="img/about1.png"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <div className="text-xl font-semibold text-blue-950">
                Maxime rhoncus aliquet sint eu accusantium illum.
              </div>
              <div className="text-sm py-2 text-blue-950/70">
                Lorem ipsum dolor sit amet consectetur adipisi, necessitatibus
                consequatur, quibusdam, at architecto ipsum?
              </div>
            </div>
          </a>
          <a href="" className="shadow-md hover:shadow-xl duration-300 rounded-3xl overflow-hidden">
            <img
              src="img/about2.png"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <div className="text-xl font-semibold text-blue-950">
                Maxime rhoncus aliquet sint eu accusantium illum.
              </div>
              <div className="text-sm py-2 text-blue-950/70">
                Lorem ipsum dolor sit amet consectetur adipisi, necessitatibus
                consequatur, quibusdam, at architecto ipsum?
              </div>
            </div>
          </a>
          <a href="" className="shadow-md hover:shadow-xl duration-300 rounded-3xl overflow-hidden">
            <img
              src="img/about3.png"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <div className="text-xl font-semibold text-blue-950">
                Maxime rhoncus aliquet sint eu accusantium illum.
              </div>
              <div className="text-sm py-2 text-blue-950/70">
                Lorem ipsum dolor sit amet consectetur adipisi, necessitatibus
                consequatur, quibusdam, at architecto ipsum?
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
