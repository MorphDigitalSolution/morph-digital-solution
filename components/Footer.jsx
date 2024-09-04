import Link from "next/link";
import React from "react";
import { BiCurrentLocation, BiLogoGmail } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaViber,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="relative overflow-hidden bg-blend-difference bg-left bg-repeat-x bg-[url(https://demo.bosathemes.com/agence/wp-content/uploads/sites/35/2022/11/agency-img3.png)] bg-neutral-900">
      <div className="w-full h-full bg-amber-700 pt-20 text-neutral-100">
        <div className="max-w-7xl mx-auto lg:px-16">
          <div className="grid lg:grid-cols-9 px-5 pb-10 lg:gap-x-10 gap-y-5">
            <div className="lg:col-span-2">
              <div className="flex items-center text-2xl lg:text-2xl font-semibold uppercase">
                <img
                  src="https://morph-digital-mm.vercel.app/img/logo-sm.png"
                  alt=""
                  className={`h-8 lg:h-10 duration-300`}
                />
                <div className="ps-1">MORPH</div>
                <div className="font-bold text-amber-700 text-4xl pb-2">.</div>
              </div>
              <div className="pe-8 py-2 text-sm">
                Transforming your digital presence with cutting-edge solutions
                for your business.
              </div>
              <div className="flex gap-3 pt-3">
                <a
                  href="https://www.facebook.com/morphwebsiteanddigitalmarketing?mibextid=LQQJ4d"
                  className="bg-black/20 hover:bg-amber-700 duration-300 size-10 flex items-center justify-center rounded-full"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="https://t.me/myanmardigitalmarketing"
                  className="bg-black/20 hover:bg-amber-700 duration-300 size-10 flex items-center justify-center rounded-full"
                >
                  <FaTelegram className="text-lg" />
                </a>
                <a
                  href="https://invite.viber.com/?g2=AQAgAG9pwjGLolMltWVlDjneT1ei5C0j6vSIc0NBjm%2FTxaO4nZQM1jJVi3jBPHmy"
                  className="bg-black/20 hover:bg-amber-700 duration-300 size-10 flex items-center justify-center rounded-full"
                >
                  <FaViber className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/company/morphwebsiteanddigitalmarketing/"
                  className="bg-black/20 hover:bg-amber-700 duration-300 size-10 flex items-center justify-center rounded-full"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="pb-4 text-xl font-semibold">Usefull Links</div>
              <div className="flex gap-3 flex-col">
                <Link href="/about" className="hover:text-amber-700">
                  About us
                </Link>
                <Link href="/services" className="hover:text-amber-700">
                  Services
                </Link>
                <Link href="/blogs" className="hover:text-amber-700">
                  Blogs & Articles
                </Link>
                <Link href="/about" className="hover:text-amber-700">
                  Legal & Policy
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="pb-4 text-xl font-semibold">Support</div>
              <div className="flex gap-3 flex-col">
                <Link href="" className="hover:text-amber-700">
                  Help Center
                </Link>
                <Link href="/contact" className="hover:text-amber-700">
                  Contact Us
                </Link>
                <Link href="" className="hover:text-amber-700">
                  FAQs
                </Link>
                <Link href="" className="hover:text-amber-700">
                  Parent & Community
                </Link>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="pb-1 text-xl font-semibold">
                Contact Information
              </div>
              <div className="pt-3">Feel free to contact & reach us!!</div>
              <div className="flex gap-3 flex-col pt-3">
                <div className="flex gap-2">
                  <BiCurrentLocation className=" border border-neutral-50/20 p-1 text-2xl rounded-full" />
                  65 လမ်း၊ 105 x 106 လမ်း၊ ချမ်းမြသာစည်မြို့နယ်၊ မန္တလေး
                </div>
                <a href="tel:+959786063014" className="flex gap-2">
                  <FaPhone className=" border border-neutral-50/20 p-1 text-2xl rounded-full" />
                  +959 786 063 014
                </a>
                <a
                  href="mailto:morphwebsite.mm@gmail.com"
                  className="flex gap-2"
                >
                  <BiLogoGmail className=" border border-neutral-50/20 p-1 text-2xl rounded-full" />
                  morphwebsite.mm@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-200 p-5 text-center text-sm">
            Copyright © 2024 Morph. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
