"use client";
import {
  FaClosedCaptioning,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaMailBulk,
  FaTelegram,
  FaViber,
} from "react-icons/fa";
import { HiLockClosed, HiMenuAlt3 } from "react-icons/hi";
import { BiLogoGmail, BiMenuAltRight } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdBlindsClosed } from "react-icons/md";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          isScrolled ? "bg-white text-black" : "bg-neutral-900/30 text-white"
        }`}
      >
        <div className="max-w-7xl px-5 lg:px-8 mx-auto text-[0.9rem] flex gap-8 py-5 items-center justify-between">
          <a
            href=""
            className="flex items-center text-xl lg:text-2xl font-semibold uppercase"
          >
            <img
              src="img/logo-sm.png"
              alt=""
              className={`h-8 lg:h-10 duration-300 ${
                isScrolled ? "invert" : "invert-0"
              }`}
            />
            <div className="ps-1">MORPH</div>
            <div className="font-bold text-amber-700 text-4xl pb-2">.</div>
          </a>
          <div className="hidden lg:flex gap-8">
            <a
              href="/"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              About
            </a>
            <Link
              href="/services"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              Services
            </Link>
            <a
              href="/portfolio"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              Portfolio
            </a>
            <a
              href="/blogs"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              Blog
            </a>
            <Link
              href="/contact"
              className="uppercase font-semibold opacity-80 hover:text-amber-700"
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            <div className="flex gap-5 items-center">
              <a href="" className="">
                <FaFacebook className="text-lg hover:text-amber-700" />
              </a>
              <a href="" className="">
                <FaTelegram className="text-lg hover:text-amber-700" />
              </a>
              <a href="" className="">
                <BiLogoGmail className="text-lg hover:text-amber-700" />
              </a>
              <a href="" className="">
                <FaLinkedin className="text-lg hover:text-amber-700" />
              </a>
              <a href="" className="">
                <FaViber className="text-lg hover:text-amber-700" />
              </a>
            </div>
            <a
              href=""
              className="bg-amber-700 text-center hover:bg-amber-800 duration-300 text-white py-3 text-sm px-7 font-semibold rounded-full uppercase"
            >
              Let's talk
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <a
              href=""
              className="py-2 text-xs px-4 rounded-full bg-amber-700 text-white"
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
        className={`fixed z-50 top-0 left-0 w-full h-full duration-500 ease-out bg-amber-700 text-white ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center text-center gap-5 font-semibold uppercase">
          <button onClick={toggleMenu} className="absolute top-8 right-8 text-3xl">
            <BiMenuAltRight />
          </button>
          <img src="img/logo.png" alt="" className="h-24" />
          <a href="" className="">
            Home
          </a>
          <a href="" className="">
            About
          </a>
          <a href="" className="">
            Services
          </a>
          <a href="" className="">
            Portfolio
          </a>
          <a href="" className="">
            Blogs
          </a>
          <a href="" className="">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
