"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

const HeroSectionHome = () => {
  useEffect(() => {
    const HTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroSectionHome",
        start: "top top",
        end: "top -100%",
        scrub: true,
        // markers: true,
      },
    });
    HTL.to(
      ".thatText",
      {
        paddingLeft: "20vw",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(
      ".neverText",
      {
        paddingRight: "20vw",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(
      ".HomeTextRap1",
      {
        paddingTop: "0vh",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(".heroImg", {
      y: "-25%",
      scale: 1.1,
      ease: "none",
    },"a1");

    const HTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroSectionHome",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    });
    HTL2.fromTo(
      ".HeroSectionHome",
      {
        clipPath: "inset(25% 25% 0 25%)", // center visible (50%)
      },
      {
        clipPath: "inset(0% 0% 0 0%)", // full reveal (100%)
        ease: "power2.out",
      },
      "a1",
    );
  }, []);

  return (
    <div className="HeroSectionHome w-full h-[100vh] sm:h-[200vh] overflow-hidden mx-auto flex flex-col bgFirst justify-between relative">
      <img
        src={`/FinalImage/h1.webp`}
        className="w-full h-full object-center object-cover  z-[-1] heroImg"
        alt="IMG"
      />

      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-between ">
        <div className="w-full h-fit flex flex-col justify-center HomeTextRap1 text-[12vw] leading-[12vw] items-center pt-[10vh] sm:pt-[50vh] px-5">
          <h1 className=" leading-[11vw] text-white SEFONT2 capitalize">see</h1>
          <h1 className=" text-white SEFONT2 mr-auto capitalize flex mt-5 thatText">
            you
          </h1>
          <h1 className=" text-white SEFONT2 ml-auto capitalize flex mt-5 neverText">
            in
          </h1>
          <h1 className=" text-white SEFONT2 m-auto capitalize flex mt-5">florence</h1>
        </div>

        <div className="w-full h-fit flex justify-center items-center sm:pb-[10vh] overflow-hidden">
          <div className=" w-[60%] sm:w-[18%] aspect-4/5 overflow-hidden relative max-sm:border-[1vw] sm:border-[0.5vw] border-[#F9DE85]">
            <Image fill
              src={`/FinalImage/h4.webp`}
              className="w-full h-full object-center object-cover"
              alt="IMG"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
