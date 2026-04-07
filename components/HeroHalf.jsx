import BoxReveal from "./magicui/box-reveal";

function HeroHalf({ children }) {
  return (
    <div className="h-[480px] relative overflow-hidden">
      <img loading="lazy" 
        src="https://morph-digital-mm.vercel.app/img/heroSect.jpg"
        alt="hero image"
        className="w-full h-full object-cover object-top brightness-[0.5] bg-neutral-800"
      />
      <div className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-[#422e20]/60 flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center pt-24">
          <BoxReveal boxColor={"#b4530900"} duration={0.5}>
            <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold py-3 px-2 lg:py-2">
              {children}
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}

export default HeroHalf;
