"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FaFacebook, FaLinkedin, FaTelegram, FaViber } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiLogoGmail, BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Use usePathname to get the current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        className={`fixed z-40 top-0 left-0 w-full border-b border-b-gray-100/20 duration-300 ${
          isScrolled
            ? "bg-[#2c2824] text-neutral-300"
            : "bg-neutral-900/30 text-neutral-300"
        }`}
      >
        <div className="max-w-7xl px-5 lg:px-8 mx-auto text-[0.9rem] flex gap-8 py-5 items-center justify-between">
          <Link
            href=""
            className="flex items-center text-xl lg:text-2xl font-semibold uppercase"
          >
            <img
              src="https://morph-digital-mm.vercel.app/img/logo-sm.png"
              alt=""
              className={`h-8 lg:h-10 duration-300 ${
                isScrolled ? "invert-0" : "invert-0"
              }`}
            />
            <div className="ps-1">MORPH</div>
            <div className="font-bold text-amber-950 text-4xl pb-2">.</div>
          </Link>
          <div className="hidden lg:flex gap-8">
            {[
              "/",
              "/about",
              "/services",
              "/portfolio",
              "/blogs",
              "/contact",
            ].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`uppercase font-semibold hover:text-amber-950 border-b-4 duration-200 opacity-80 ${
                  pathname === path ? "border-amber-950" : "border-transparent"
                }`}
              >
                {path === "/" ? "Home" : path.substring(1)}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            <div className="flex gap-5 items-center">
              <a
                href="https://www.facebook.com/morphwebsiteanddigitalmarketing?mibextid=LQQJ4d"
                className=""
              >
                <FaFacebook className="text-lg hover:text-amber-950" />
              </a>
              <a href="https://t.me/myanmardigitalmarketing" className="">
                <FaTelegram className="text-lg hover:text-amber-950" />
              </a>
              <a href="mailto:morphwebsite.mm@gmail.com" className="">
                <BiLogoGmail className="text-lg hover:text-amber-950" />
              </a>
              <a
                href="https://www.linkedin.com/company/morphwebsiteanddigitalmarketing/"
                className=""
              >
                <FaLinkedin className="text-lg hover:text-amber-950" />
              </a>
              <a
                href="https://invite.viber.com/?g2=AQAgAG9pwjGLolMltWVlDjneT1ei5C0j6vSIc0NBjm%2FTxaO4nZQM1jJVi3jBPHmy"
                className=""
              >
                <FaViber className="text-lg hover:text-amber-950" />
              </a>
            </div>
            <a
              href="tel:+959786063014"
              className="bg-amber-900 text-center hover:bg-amber-950 duration-300 text-neutral-300 py-3 text-sm px-7 font-semibold rounded-full uppercase"
            >
              Let's talk
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+959786063014"
              className="py-2 text-xs px-4 rounded-full bg-amber-900 text-neutral-300"
            >
              Let's Talk
            </a>
            <button className="p-2" id="menuBtn" onClick={toggleMenu}>
              <HiMenuAlt3 className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className={`fixed z-50 top-0 left-0 w-full h-full duration-500 ease-out bg-amber-950 text-neutral-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center text-center gap-5 font-semibold uppercase">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-3xl"
          >
            <BiMenuAltRight />
          </button>
          <img
            src="https://morph-digital-mm.vercel.app/img/logo.png"
            alt=""
            className="h-24"
          />
          {["/", "/about", "/services", "/portfolio", "/blogs", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                className={`border-b-2 ${
                  pathname === path ? "border-white" : "border-transparent"
                }`}
              >
                {path === "/" ? "Home" : path.substring(1)}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
