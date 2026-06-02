"use client";

import { HiArrowRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const galleryData = {
  "Indian Wedding": [
    {
      img: "/FinalImage/indianWeed/1.webp",
      cls: "left-[3vw] top-[32vh] w-[12vw] h-[22vh]",
    },
    {
      img: "/FinalImage/indianWeed/2.webp",
      cls: "left-[15vw] top-[18vh] w-[20vw] h-[40vh]",
    },
    {
      img: "/FinalImage/indianWeed/8.webp",
      cls: "left-[21vw] top-[60vh] w-[14vw] h-[24vh]",
    },
    {
      img: "/FinalImage/indianWeed/4.webp",
      cls: "left-[38vw] top-[22vh] w-[22vw] h-[46vh]",
    },
    {
      img: "/FinalImage/indianWeed/5.webp",
      cls: "left-[61vw] top-[10vh] w-[14vw] h-[24vh]",
    },
    {
      img: "/FinalImage/indianWeed/6.webp",
      cls: "left-[61vw] top-[36vh] w-[20vw] h-[40vh]",
    },
    {
      img: "/FinalImage/indianWeed/7.webp",
      cls: "left-[82vw] top-[34vh] w-[14vw] h-[26vh]",
    },
  ],

  Sangeet: [
    {
      img: "/FinalImage/Sang/1.webp",
      cls: "left-[5vw] top-[20vh] w-[16vw] h-[34vh]",
    },
    {
      img: "/FinalImage/Sang/2.webp",
      cls: "left-[25vw] top-[15vh] w-[18vw] h-[28vh]",
    },
    {
      img: "/FinalImage/Sang/3.webp",
      cls: "left-[45vw] top-[18vh] w-[25vw] h-[48vh]",
    },
    {
      img: "/FinalImage/Sang/4.webp",
      cls: "left-[72vw] top-[20vh] w-[18vw] h-[32vh]",
    },
    {
      img: "/FinalImage/Sang/5.webp",
      cls: "left-[18vw] top-[50vh] w-[18vw] h-[28vh]",
    },
    {
      img: "/FinalImage/Sang/6.webp",
      cls: "left-[65vw] top-[55vh] w-[22vw] h-[24vh]",
    },
  ],

  "White Wedding": [
    {
      img: "/FinalImage/white/1.webp",
      cls: "left-[6vw] top-[24vh] w-[18vw] h-[30vh]",
    },
    {
      img: "/FinalImage/white/2.webp",
      cls: "left-[28vw] top-[12vh] w-[24vw] h-[52vh]",
    },
    {
      img: "/FinalImage/white/3.webp",
      cls: "left-[56vw] top-[18vh] w-[18vw] h-[28vh]",
    },
    {
      img: "/FinalImage/white/4.webp",
      cls: "left-[75vw] top-[30vh] w-[16vw] h-[34vh]",
    },
    {
      img: "/FinalImage/white/5.webp",
      cls: "left-[45vw] top-[58vh] w-[22vw] h-[20vh]",
    },
  ],
};

export default function Page() {
  const [active, setActive] = useState("Indian Wedding");
  const collageRef = useRef(null);

  const changeCategory = (category) => {
    if (category === active || !collageRef.current) return;

    const items = collageRef.current.children;

    gsap.killTweensOf(items);

    gsap.to(items, {
      opacity: 0,
      scale: 0.9,
      y: "-2rem",
      duration: 0.35,
      stagger: 0.03,
      ease: "power2.out",
      onComplete: () => {
        setActive(category);
      },
    });
  };

  useEffect(() => {
    if (!collageRef.current) return;

    const items = collageRef.current.children;

    gsap.killTweensOf(items);

    gsap.fromTo(
      items,
      {
        opacity: 0,
        scale: 0.85,
        y: "2rem",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
  }, [active]);

  return (
    <section className="w-full min-h-screen COLOR_BG_CREAM overflow-hidden relative">
      {/* NAV */}
      {/* <div className=" z-50 flex flex-col leading-none w-fit mt-[14vh] mx-auto">
        {Object.keys(galleryData).map((item) => (
          <button
            key={item}
            onClick={() => changeCategory(item)}
            className={`text-left uppercase transition-all duration-300 Font_Q py-[0.3rem] cursor-pointer
              ${active === item
                ? "text-[#416160] opacity-100"
                : "text-[#416160] opacity-40"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div> */}

      <div className="z-50 flex flex-col leading-none w-fit mt-[14vh] mx-auto">
  {Object.keys(galleryData).map((item) => (
    <button
      key={item}
      onClick={() => changeCategory(item)}
      className={`
        group
        flex
        items-center
        gap-2
        text-left
        uppercase
        Font_Q
        py-[0.4rem]
        cursor-pointer
        transition-all
        duration-300
        ${
          active === item
            ? "text-[#416160] opacity-100"
            : "text-[#416160] opacity-40 hover:opacity-70"
        }
      `}
    >
      <span
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${
            active === item
              ? "w-[1.2rem] opacity-100"
              : "w-0 opacity-0"
          }
        `}
      >
        <HiArrowRight className="text-[1rem]" />
      </span>

      <span>{item}</span>
    </button>
  ))}
</div>

      {/* DECORATION */}

      {/* <div className="absolute left-[0vw] top-[49vh] w-[1.2vw] h-[1.2vw] bg-[#1f1410]" />

      <div className="absolute left-[15vw] top-[60vh] w-[4vw] h-[4vw] bg-[#d3d3d3]" />

      <div className="absolute right-[18vw] top-[25vh] w-[1.8vw] h-[1.8vw] bg-[#d7d7d7]" />

      <div className="absolute right-[14vw] bottom-[23vh] w-[2vw] h-[2vw] bg-[#261814]" /> */}

      {/* COLLAGE */}

      <div
        ref={collageRef}
        className={` mt-[5vh] px-[10vw] max-sm:px-5 py-10
    columns-2
    md:columns-3
    lg:columns-4
    xl:columns-5
    gap-[1rem]`}
  
      >
        {galleryData[active].map((item, index) => (
          <div
            key={`${active}-${index}`}
            className="group mb-[1rem] break-inside-avoid "
          >
            <div
              className={`
          overflow-hidden
          rounded-[1rem]
          ${index % 5 === 0
                  ? "h-[34rem]"
                  : index % 3 === 0
                    ? "h-[26rem]"
                    : "h-[20rem]"
                }
        `}
            >
              <img
                src={item.img}
                alt=""
                className={`
            w-full
            h-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          `}
              />
            </div>
          </div>
        ))}
      </div>

      {/* LABEL */}

      {/* <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-[1rem] tracking-[0.2rem] uppercase text-[#416160] Font-Q">
          {active}
        </p>
      </div> */}
    </section>
  );
}
