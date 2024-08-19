// import Fader from "@/components/magicui/box-reveal";
import { Fader } from "@/components/magicui/Fader";
import TitlePillow from "@/components/TitlePillow";
import React from "react";

function Hero() {
  return (
    <div className="h-[850px] relative overflow-hidden">
      <img
        src="img/hero.png"
        alt="hero image"
        className="w-full h-full object-cover object-top brightness-[0.5]"
      />
      <div className="absolute top-0 left-0 w-full h-full text-white bg-neutral-800/5 flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center pt-24">
          <Fader boxColor={"#b45309"} duration={0.5}>
            <TitlePillow>Digital Agency</TitlePillow>
          </Fader>
          <Fader boxColor={"#b45309"} duration={0.5}>
            <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-3 lg:py-2">
              <span className="text-amber-700">Digital</span> Agency You <br />{" "}
              Can Rely Upon!
            </div>
          </Fader>
          <div className="lg:px-24 p-4">
            <Fader boxColor={"#b45309"} duration={0.5}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda anditiis autem quis officiis doloremque unde! At facilis
              est magni labore nisi, debitis eligendi.
            </Fader>
          </div>
          <div className="flex gap-5">
            <Fader boxColor={"#b45309"} duration={0.5}>
              <a
                href=""
                className="bg-amber-700 block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-800 hover:text-white duration-300"
              >
                See Services
              </a>
            </Fader>
            <Fader boxColor={"#b45309"} duration={0.5}>
              <a
                href=""
                className="bg-white text-black block uppercase text-sm font-semibold py-3 px-7 rounded-full hover:bg-amber-800 hover:text-white duration-300"
              >
                Contact Us
              </a>
            </Fader>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
