"use client";

import { useState, useRef, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import gsap from "gsap";

const galleryData = {
  "White Wedding": [
    {
      type: "label",
      text: "White Wedding",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/1.webp",
      col: "col-span-2",
      row: "row-span-4",
    },

    {
      img: "/FinalImage/white/2.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/3.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/w1.jpg",
      col: "col-span-1",
      row: "row-span-3",
    },

    {
      img: "/FinalImage/white/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/B1.jpg",
      col: "col-span-2",
      row: "row-span-4",
    },

    {
      img: "/FinalImage/white/B2.jpg",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/B3.jpg",
      col: "col-span-1",
      row: "row-span-3",
    },
    {
      type: "label",
      text: "Dress Code: Black Tie",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },
    {
      img: "/FinalImage/white/B4.jpg",
      col: "col-span-1",
      row: "row-span-2",
    },
  ],

  Sangeet: [
    {
      type: "label",
      text: "Sangeet",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/1.webp",
      col: "col-span-2",
      row: "row-span-4",
    },

    {
      img: "/FinalImage/Sang/2.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/3.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/s1.jpg",
      col: "col-span-2",
      row: "row-span-3",
    },

    {
      img: "/FinalImage/Sang/s2.jpg",
      col: "col-span-1",
      row: "row-span-3",
    },

    {
      img: "/FinalImage/Sang/6.webp",
      col: "col-span-2",
      row: "row-span-3",
    },

    {
      img: "/FinalImage/Sang/4.webp",
      col: "col-span-2",
      row: "row-span-4",
    },

    {
      type: "label",
      text: "Dress Code: Bright & Colourful (Indian or Western)",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },
  ],

  "Indian Wedding": [
    {
      img: "/FinalImage/indianWeed/1.webp",
      col: "col-span-2",
      row: "row-span-4",
    },

    {
      img: "/FinalImage/indianWeed/2.webp",
      col: "col-span-1",
      row: "row-span-2",
    },
    {
      img: "/FinalImage/indianWeed/4.webp",
      col: "col-span-1",
      row: "row-span-2",
    },
    {
      type: "label",
      text: "Indian Wedding",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/6.webp",
      col: "col-span-2",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/7.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/8.webp",
      col: "col-span-2",
      row: "row-span-4",
    },
    {
      type: "label",
      text: "Dress Code: Indian Regal",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/IN2.jpg",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/IN3.jpg",
      col: "col-span-2",
      row: "row-span-4",
    },
  ],
};

export default function Page() {
  const [active, setActive] = useState("White Wedding");
  const gridRef = useRef(null);

  const changeCategory = (category) => {
    if (category === active) return;

    const items = gridRef.current?.querySelectorAll(".gallery-item");

    gsap.to(items, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      stagger: 0.02,
      onComplete: () => {
        setActive(category);
      },
    });
  };

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".gallery-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        scale: 0.9,
        y: "2rem",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      },
    );
  }, [active]);

  useEffect(() => {
    gsap.fromTo(
      ".wardrobe-title",
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".wardrobe-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".wardrobe-text",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".wardrobe-text",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#f4f1ed] overflow-hidden">
      {/* EDITORIAL GRID */}

      <div className="overflow-hidden mb-1 mx-auto mt-[18vh]">
        <h2 className="wardrobe-title Font_Q COLOR_TEXT_RED uppercase text-center leading-tight">
          Wardrobe Planner
        </h2>
      </div>

      <p
        className="wardrobe-text Font_YV mx-auto mt-10 text-center px-10"
        style={{
          color: "#173e3d",
          lineHeight: 1.6,
          maxWidth: 700,
        }}
      >
        To help you celebrate in style, we’ve put together a wardrobe guide for
        each event. We can’t wait to see you in your best!
      </p>
      {/* CATEGORY NAV */}

      <div className="flex flex-col items-center pt-[8rem] gap-[0.5rem] sm:pb-[10vh]">
        {Object.keys(galleryData).map((item) => (
          <button
            key={item}
            onClick={() => changeCategory(item)}
            className={`
              flex items-center gap-[0.5rem]
              uppercase
              transition-all
              duration-300
              cursor-pointer
              text-[#416160]
              ${active === item ? "opacity-100" : "opacity-40 hover:opacity-70"}
            `}
          >
            <span
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${active === item ? "w-[1rem]" : "w-0"}
              `}
            >
              <HiArrowRight />
            </span>

            <span className="tracking-[0.15rem] Font_Q">{item}</span>
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="
    w-full
    px-[4vw]
    pb-[8rem]
  "
      >
        {/* MOBILE LAYOUT */}
        <div className="grid grid-cols-1 gap-3 md:hidden max-sm:mt-[10vh]">
          {galleryData[active].map((item, index) => (
            <div
              key={index}
              className="gallery-item overflow-hidden rounded-sm"
            >
              {item.type === "label" ? (
                <div className="py-10 flex items-center justify-center">
                  <p
                    className="
                text-[1.8rem]
                text-center
                Font_Q
                uppercase
                text-[#416160]
                leading-none
                px-4
              "
                  >
                    {item.text}
                  </p>
                </div>
              ) : (
                <img
                  src={item.img}
                  alt=""
                  className="
              w-full
              h-[420px]
              object-cover
              object-top
            "
                />
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP / TABLET LAYOUT */}
        <div
          className="
      hidden
      md:grid
      grid-cols-4
      lg:grid-cols-6
      auto-rows-[8rem]
      lg:auto-rows-[9rem]
      gap-2
    "
        >
          {galleryData[active].map((item, index) => (
            <div
              key={index}
              className={`
          gallery-item
          ${item.col}
          ${item.row}
        `}
            >
              {item.type === "label" ? (
                <div className="w-full h-full flex items-center justify-center">
                  <p
                    className="
                text-[2rem]
                text-center
                Font_Q
                uppercase
                text-[#416160]
                leading-none
                px-8
              "
                  >
                    {item.text}
                  </p>
                </div>
              ) : (
                <div className="w-full h-full overflow-hidden group">
                  <img
                    src={item.img}
                    alt=""
                    className="
                w-full
                h-full
                object-cover
                object-top
                transition-transform
                duration-700
                group-hover:scale-105
              "
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
