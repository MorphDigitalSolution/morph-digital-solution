import Footer from "@/components/Footer";
import Header from "@/components/Header";

// pages/404.js
export default function Custom404() {
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center relative">
        <div className="lg:text-[20rem] font-extrabold text-slate-300">404</div>
        <div className="absolute top-1/2 -translate-y-1/2 text-center left-0 w-full">
          <div className="lg:text-6xl font-bold">Oops! That page cannot be found.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
