// "use client";

// import { HiArrowRight } from "react-icons/hi2";
// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";

// const galleryData = {
//   "Indian Wedding": {
//     rows: [
//       {
//         type: "image-row",
//         cols: "2fr 1fr 1fr",
//         height: "55vh",
//         cells: [
//           { img: "/FinalImage/indianWeed/1.webp" },
//           { img: "/FinalImage/indianWeed/2.webp" },
//           { img: "/FinalImage/indianWeed/3.webp" },
//         ],
//       },
//       {
//         type: "mixed-row",
//         cols: "1fr 1.6fr 1fr 1.6fr",
//         height: "40vh",
//         cells: [
//           { type: "label", text: "PHE" },
//           { img: "/FinalImage/indianWeed/4.webp" },
//           { img: "/FinalImage/indianWeed/5.webp" },
//           { img: "/FinalImage/indianWeed/6.webp" },
//         ],
//       },
//       {
//         type: "mixed-row",
//         cols: "1fr 1fr 2fr 1fr",
//         height: "34vh",
//         cells: [
//           { img: "/FinalImage/indianWeed/7.webp" },
//           { img: "/FinalImage/indianWeed/8.webp" },
//           { type: "label", text: "RAS" },
//           { img: "/FinalImage/indianWeed/9.webp" },
//         ],
//       },
//     ],
//   },
//   Sangeet: {
//     rows: [
//       {
//         type: "image-row",
//         cols: "1fr 2fr 1fr",
//         height: "55vh",
//         cells: [
//           { img: "/FinalImage/Sang/1.webp" },
//           { img: "/FinalImage/Sang/2.webp" },
//           { img: "/FinalImage/Sang/3.webp" },
//         ],
//       },
//       {
//         type: "mixed-row",
//         cols: "2fr 1fr 1fr 1fr",
//         height: "38vh",
//         cells: [
//           { type: "label", text: "NAC" },
//           { img: "/FinalImage/Sang/4.webp" },
//           { img: "/FinalImage/Sang/5.webp" },
//           { img: "/FinalImage/Sang/6.webp" },
//         ],
//       },
//     ],
//   },
//   "White Wedding": {
//     rows: [
//       {
//         type: "image-row",
//         cols: "1fr 1fr 2fr",
//         height: "55vh",
//         cells: [
//           { img: "/FinalImage/white/1.webp" },
//           { img: "/FinalImage/white/2.webp" },
//           { img: "/FinalImage/white/3.webp" },
//         ],
//       },
//       {
//         type: "mixed-row",
//         cols: "1fr 1.5fr 1fr 1.5fr",
//         height: "38vh",
//         cells: [
//           { img: "/FinalImage/white/4.webp" },
//           { type: "label", text: "VOW" },
//           { img: "/FinalImage/white/5.webp" },
//           { img: "/FinalImage/white/6.webp" },
//         ],
//       },
//     ],
//   },
// };

// export default function Page() {
//   const [active, setActive] = useState("Indian Wedding");
//   const gridRef = useRef(null);

//   const changeCategory = (category) => {
//     if (category === active || !gridRef.current) return;
//     const cells = gridRef.current.querySelectorAll(".bento-cell");
//     gsap.to(cells, {
//       opacity: 0,
//       scale: 0.95,
//       duration: 0.3,
//       stagger: 0.02,
//       ease: "power2.out",
//       onComplete: () => setActive(category),
//     });
//   };

//   useEffect(() => {
//     if (!gridRef.current) return;
//     const cells = gridRef.current.querySelectorAll(".bento-cell");
//     gsap.fromTo(
//       cells,
//       { opacity: 0, scale: 0.92, y: "1.5rem" },
//       {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 0.75,
//         stagger: 0.06,
//         ease: "power3.out",
//       }
//     );
//   }, [active]);

//   const data = galleryData[active];

//   return (
//     <section className="w-full min-h-screen COLOR_BG_CREAM overflow-hidden">

//       {/* NAV */}
//       <div className="z-50 flex flex-col leading-none w-fit mt-[14vh] mx-auto mb-[6vh]">
//         {Object.keys(galleryData).map((item) => (
//           <button
//             key={item}
//             onClick={() => changeCategory(item)}
//             className={`
//               group flex items-center gap-2 text-left uppercase Font_Q
//               py-[0.4rem] cursor-pointer transition-all duration-300
//               ${active === item
//                 ? "text-[#416160] opacity-100"
//                 : "text-[#416160] opacity-40 hover:opacity-70"}
//             `}
//           >
//             <span
//               className={`overflow-hidden transition-all duration-500
//                 ${active === item ? "w-[1.2rem] opacity-100" : "w-0 opacity-0"}`}
//             >
//               <HiArrowRight className="text-[1rem]" />
//             </span>
//             <span>{item}</span>
//           </button>
//         ))}
//       </div>

//       {/* BENTO GRID */}
//       <div ref={gridRef} className="px-[2vw] flex flex-col gap-[6px] px-[10vw] py-[10vw]">
//         {data.rows.map((row, rowIdx) => (
//           <div
//             key={rowIdx}
//             className="grid gap-[6px]"
//             style={{
//               gridTemplateColumns: row.cols,
//               height: row.height,
//             }}
//           >
//             {row.cells.map((cell, cellIdx) =>
//               cell.type === "label" ? (
//                 <div
//                   key={cellIdx}
//                   className="bento-cell flex items-end pb-3 pl-3"
//                 >
//                   <span
//                     className="text-[#1a1a1a] leading-none select-none"
//                     style={{
//                       fontSize: "clamp(3rem, 7vw, 8rem)",
//                       fontWeight: 800,
//                       letterSpacing: "-0.04em",
//                     }}
//                   >
//                     {cell.text}
//                   </span>
//                 </div>
//               ) : (
//                 <div
//                   key={cellIdx}
//                   className="bento-cell overflow-hidden group"
//                 >
//                   <img
//                     src={cell.img}
//                     alt=""
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import gsap from "gsap";

const galleryData = {
  "Indian Wedding": [
    {
      type: "label",
      text: "Indian",
      col: "col-span-2 lg:col-span-1",
      row: "row-span-2",
    },

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
      img: "/FinalImage/indianWeed/3.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/4.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/indianWeed/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      type: "label",
      text: "Wedding",
      col: "col-span-2 lg:col-span-1",
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

    // {
    //   img: "/FinalImage/indianWeed/9.webp",
    //   col: "col-span-1",
    //   row: "row-span-2",
    // },
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
      img: "/FinalImage/Sang/4.webp",
      col: "col-span-2",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/Sang/6.webp",
      col: "col-span-2",
      row: "row-span-3",
    },
  ],

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
      img: "/FinalImage/white/4.webp",
      col: "col-span-2",
      row: "row-span-2",
    },

    {
      img: "/FinalImage/white/5.webp",
      col: "col-span-1",
      row: "row-span-2",
    },
  ],
};

export default function Page() {
  const [active, setActive] = useState("Indian Wedding");
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


  useEffect(()=>{
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
  },[])

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
        <br />
        <br />
        and please include the dress code for each event in the grid style that
        we’re using:
        <br />
        <br />
        <span className="uppercase">White Wedding</span> : Black Tie
        <br />
        <span className="uppercase">Sangeet</span> : Bright & Colourful (Indian
        or Western)
        <br />
        <span className="uppercase">Indian Wedding</span> : Indian Regal
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
        className={`
          w-full
          px-[5vw]
          pb-[8rem] max-sm:pb-[8rem] max-sm:pt-0
        `}
      >
        <div
          className={`
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-6
            auto-rows-[7rem]
            md:auto-rows-[8rem]
            lg:auto-rows-[9rem]
            gap-[0.5rem]
          `}
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
                <div
                  className={`
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <p
                    className={`
                      text-[2rem]
                      md:text-[2rem]
                      lg:text-[2rem]
                      max-sm:text-[2rem]
                      // font-black
                      Font_Q
                      font-normal
                        uppercase
                         text-[#416160]
                      leading-none
                    `}
                  >
                    {item.text}
                  </p>
                </div>
              ) : (
                <div
                  className={`
                    w-full
                    h-full
                    overflow-hidden
                    group
                  `}
                >
                  <img
                    src={item.img}
                    alt=""
                    className={`
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    `}
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
