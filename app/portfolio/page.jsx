import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHalf from "@/components/HeroHalf";
import React from "react";
import Subscribe from "../components/Subscribe";
import BoxReveal from "@/components/magicui/box-reveal";
import GroupClients from "./components/GroupClients";
import Contact from "../components/Contact";
import TitlePillow from "@/components/TitlePillow";

function page() {
  return (
    <div>
      <Header />
      <div className="h-[480px] relative overflow-hidden">
        <img
          src="https://morph-digital-mm.vercel.app/img/clientsGroup.png"
          alt="hero image"
          className="w-full h-full object-cover object-center brightness-[0.5] bg-neutral-800"
        />
        <div className="absolute top-0 left-0 w-full h-full text-neutral-100 bg-neutral-800/5 flex items-center justify-center">
          <div className="max-w-4xl flex flex-col items-center text-center pt-24">
            <BoxReveal boxColor={"#b4530900"} duration={0.5}>
              <div className="text-4xl lg:text-[4.6rem] leading-[1.1] font-extrabold pt-20">
                Portfolio
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-10">
        <div className="pt-5">
          <div className="flex item-center justify-center">
            <BoxReveal boxColor={"#b4530900"} duration={0.5}>
              <div className="p-2">
                <TitlePillow>Featured Clients</TitlePillow>
              </div>
            </BoxReveal>
          </div>
          <div className="text-3xl lg:text-4xl text-center py-5 font-semibold text-[#6F4E37]">
            Website Development Service
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 md:px-10 lg:pt-16 py-8 w-full">
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web1.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">Regan Travel</div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web2.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Rocket Plastic Factory
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web3.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Miss Shwebo Group Co.,Ltd
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web4.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">DivaGlobalize</div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web5.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Global Food Safety Academy Myanmar
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web6.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Morph Website & Digital Marketing
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web7.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">Amara NanDaw</div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/web8.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Parami Phyae Phat Co., Ltd
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web9.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Nyi Mya Chin Real Estate
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web10.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Shae Soung Plastic Factory
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web11.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Kyauk Thin Pone Education Tools & Toys
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web12.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  YUME NIPPON Oversea Employment Agency
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web13.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Global Food Safety Academy
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web14.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  HYDRO TECH Water & Waste Water Engineering Co.,Ltd
                </div>
              </BoxReveal>
            </div>
            <div className="group">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/web15.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2 rounded-3xl"
                />
                <div className="text-center pt-1 text-sm">
                  Yamin Ghee ထောပတ်
                </div>
              </BoxReveal>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex item-center justify-center">
            <BoxReveal boxColor={"#b4530900"} duration={0.5}>
              <div className="p-2">
                <TitlePillow>Featured Clients</TitlePillow>
              </div>
            </BoxReveal>
          </div>
          <div className="text-3xl lg:text-4xl text-center py-5 font-semibold text-[#6F4E37]">
            Business Registration Service
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 md:px-10 lg:pt-16 py-8 w-full">
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/certi1.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Cle Botique
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/certi2.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Shwe Myo
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/certi3.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Pin Lal Pyaw Local Food Products
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi4.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                MK Online Fashion Shop
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi5.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Kind Max
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi6.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Jue & Htoo Online Shop
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/certi7.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Golden Sea World - aquarium shop
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi8.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Bawder - Bay Htoke
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi9.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                All in one plus - ဇီဝသဘာဝမြေဩဇာ
                ဘက်စုံသုံးရွက်ဖြန်းအားတိုးဆေးအရည်
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/certi10.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Taungyi Khin Khin Lay
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 md:px-10 lg:pt-16 pt-8 w-full">
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/regi1.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Millions Of Awards Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/regi2.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Advanced & Modernize Engineering Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi3.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Spicy Chick Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi4.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Bone La Won Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi5.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Top Of The Top Trading Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/regi6.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Regan Travel Services Co.,Ltd
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi7.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Miss Shwebo Group Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi8.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Sunny Land Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/regi9.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Parami Phyae Phat Company Limited
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-center md:px-10 w-full">
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/sme1.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 aspect-[4/3] object-cover"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Millions Of Awards Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/sme2.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 aspect-[4/3] object-cover"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Advanced & Modernize Engineering Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/sme3.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 aspect-[4/3] object-cover"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Spicy Chick Company Limited
              </div>
            </div>
            <div className="group realtive pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/sme4.png"
                  alt=""
                  className="w-full group-hover:scale-105 duration-300 aspect-[4/3] object-cover scale-105 pt-3"
                />
              </BoxReveal>
              <div className="text-center abolute bottom-0 left-0 w-full h-10 pt-1 text-sm">
                Bone La Won Company Limited
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex item-center justify-center">
            <BoxReveal boxColor={"#b4530900"} duration={0.5}>
              <div className="p-2">
                <TitlePillow>Featured Clients</TitlePillow>
              </div>
            </BoxReveal>
          </div>
          <div className="text-3xl lg:text-4xl text-center py-5 font-semibold text-[#6F4E37]">
            Digital Marketing Service
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 md:px-10 lg:pt-16 py-8 w-full">
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/digi1.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Beauty House by Wutyi
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/digi2.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                The EM Shoes Galleryo
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/digi3.jpeg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Maple's Collection
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi4.jpg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                All in one plus
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi5.jpg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                San Theingi
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi6.jpg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                You & I Beauty
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4530900"} duration={0.5}>
                <img
                  src="img/digi7.jpg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Amara Nan Taw
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi8.png"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Yamin Ghee
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi9.jpg"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Rocket Plastic
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi10.png"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                A 1 Family
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi11.png"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                YUME NIPPON Oversea Employment Agency
              </div>
            </div>
            <div className="group relative pb-10">
              <BoxReveal boxColor={"#b4005309"} duration={0.5}>
                <img
                  src="img/digi12.png"
                  alt=""
                  className="w-full group-hover:scale-105 border aspect-square object-cover duration-300 p-2"
                />
              </BoxReveal>
              <div className="text-center absolute bottom-0 h-10 left-0 w-full pt-1 text-sm">
                Risk Care Myanmar
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupClients />
      <Contact />
      <div className="h-20"></div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
