import BoxReveal from "@/components/magicui/box-reveal";
import TitlePillow from "@/components/TitlePillow";

function Hero() {
  return (
    <div className="h-[480px] relative overflow-hidden">
      <img
        src="img/heroSect.jpg"
        alt="hero image"
        className="w-full h-full object-cover object-top brightness-[0.5]"
      />
      <div className="absolute top-0 left-0 w-full h-full text-neutral-300 bg-neutral-800/5 flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center pt-24">
          <BoxReveal boxColor={"#b4530900"} duration={0.5}>
            <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-3 lg:py-2">
              Contact
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}

export default Hero;
