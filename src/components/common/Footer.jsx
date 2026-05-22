"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <footer className="pt-10 h-[80vh] pb-6 px-4   relative">

      <img src={`/FinalImage/33.webp`} alt="IMG" className="w-full h-full  brightness-[50%] absolute top-0 left-0  object-cover object-top z-[-1]" />

      <div
        ref={footerRef}
        className="max-w-5xl mx-auto text-center flex flex-col h-full items-center justify-between text-[#F9DE85] "
      >
        {/* Contact Info */}
        <div className=" text-center space-y-1 text-xs flex flex-col gap-2 md:text-sm text-[#F9DE85]">
          <p className="font-medium Font_Q text-xs md:text-sm">
            Please reach out to us if you have any questions or need assistance:
          </p>

          <p className="text-xs md:text-sm">
            <span className="font-medium Font_Q">RSVP Team :</span>{" "}
            <a href="tel:+919910158374" className="hover:underline Font_YV">
              +91 99101 58374
            </a>
          </p>

          <p className="Font_YV text-xs md:text-sm">
            <span className="font-medium Font_Q">Logistics Team :</span> +91
            XXXXXXXX
          </p>

          <p className="text-xs md:text-sm">
            <span className="font-medium Font_Q">Email ID :</span>{" "}
            <a
              href="mailto:dylanwedsmisha@gmail.com"
              className="hover:underline Font_YV"
            >
              dylanwedsmisha@gmail.com
            </a>
          </p>
        </div>

        <div  className="w-[100px] h-[100px] ">
          <img src={`/FinalImage/FooterLogo.png`} alt="IMG" className="w-full  object-cover object-center" />
        </div>
      </div>
    </footer>
  );
}
