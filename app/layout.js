"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ClientScripts from "./components/ClientScript";

export default function RootLayout({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.005 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // RAF callback for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Clean up Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Morph is a leading digital marketing agency specializing in SEO, SEM, content marketing, and social media strategies to grow your online presence."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, SEM, content marketing, social media marketing"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="author" content="Your Name" />
        <link rel="icon" href="img/logo-sm.png" />
        <title>Morph - Digital Marketing</title>
        {/* Add any other meta tags or links here */}
      </head>
      <body>
        <ClientScripts />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
