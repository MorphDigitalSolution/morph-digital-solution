import { Fader } from "@/components/magicui/Fader";
import TitlePillow from "@/components/TitlePillow";

function Hero() {
  return (
    <div className="h-[480px] relative overflow-hidden">
      <img
        src="img/hero.png"
        alt="hero image"
        className="w-full h-full object-cover object-top brightness-[0.5]"
      />
      <div className="absolute top-0 left-0 w-full h-full text-white bg-neutral-800/5 flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center pt-24">
          <Fader boxColor={"#b45309"} duration={0.5}>
            <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-3 lg:py-2">
              Services
            </div>
          </Fader>
        </div>
      </div>
    </div>
  );
}

export default Hero;
