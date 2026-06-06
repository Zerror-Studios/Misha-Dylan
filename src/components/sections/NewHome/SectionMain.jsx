// // import React from "react";

// // const SectionMain = () => {
// //   return (
// //     <div className="w-full min-h-screen bgFirst  relative pt-10">
// //       <div className="w-full h-fit flex justify-center items-center pt-[9vh] sm:pt-[4vh]">
// //         <h1 className="Font_Q max-sm:leading-[12vw] max-sm:text-[11vw] max-sm:px-5 text-[13vw] uppercase COLOR_TEXT_RED">
// //           Dylan & Misha 
// //         </h1>
// //       </div>
// //       {/* 
// //       <div className="w-[18%] max-sm:w-[97%] max-sm:border-[4vw] sm:border-[2vw] border-[#F9DE85] max-sm:mx-auto aspect-5/7 overflow-hidden sm:absolute sm:top-[60%] sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2">
// //         <img
// //           src={`/FinalImage/11.webp`}
// //           className="w-full h-full object-cover object-center"
// //           alt="IMG"
// //         />
// //       </div> */}

// //       <div className="w-[18%] max-sm:w-[100%] sm:absolute  sm:top-[70%]   sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
// //         {/* Main Card */}
// //         <div className="relative w-full aspect-[5/7]   p-[1rem] overflow-hidden ">
         

// //           {/* Oval Image */}
         
// //             <img
// //               src="/FinalImage/w1.webp"
// //               alt="IMG"
// //               className="w-full h-full object-cover"
// //             />

            
         

         
// //         </div>
// //       </div>

// //       {/* <div className="w-full max-sm:hidden h-fit flex justify-end items-center mt-[40vh]">
// //         <h1 className="SEFONT text-[14vw] font-semibold leading-[14vw] text-[#173e3d]/5">
// //           Wedding
// //         </h1>
// //       </div> */}

// //       <div className=" sm:absolute sm:left-0 max-sm:pt-5 sm:bottom-[10%] w-full sm:w-[25%]  px-[20px] flex flex-col gap-10">
// //         <div className="w-[50%] max-sm:hidden aspect-square overflow-hidden max-sm:border-[2vw] sm:border-[0.5vw] border-[#F9DE85]">
// //           <img
// //             src={`/FinalImage/23.webp`}
// //             className="w-full h-full object-cover object-center"
// //             alt="IMG"
// //           />
// //         </div>

// //         <span className="text-justify Font_YV text-[1.1rem] max-sm:py-10 COLOR_TEXT_RED leading-[1.2rem]">
// //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero enim
// //           delectus magni aliquid eos, qui suscipit eum, est dolorum repellat
// //           ratione sapiente commodi dolores facilis officiis asperiores? Harum,
// //           tempore dolores!
// //         </span>
// //       </div>
//     // </div>
// //   );
// // };

// // export default SectionMain;

// 'use client'
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const SectionMain = () => {
//   const titleRef = useRef(null);
//   const cardRef = useRef(null);
//   const sideImageRef = useRef(null);
//   const textBlockRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Ensure GSAP starts clean
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       // 1. Page overlay fade — subtle curtain effect
//       tl.fromTo(
//         containerRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.4 }
//       );

//       // 2. Title: slides up from below + fades in, letters feel weighty
//       tl.fromTo(
//         titleRef.current,
//         {
//           y: 80,
//           opacity: 0,
//           clipPath: "inset(0 0 100% 0)",
//         },
//         {
//           y: 0,
//           opacity: 1,
//           clipPath: "inset(0 0 0% 0)",
//           duration: 1.1,
//           ease: "power4.out",
//         },
//         "-=0.1"
//       );

//       // 3. Center card: scales up from slightly below with a gentle rotation
//       tl.fromTo(
//         cardRef.current,
//         {
//           y: 60,
//           opacity: 0,
//           scale: 0.92,
//           rotate: -1.5,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           rotate: 0,
//           duration: 1.2,
//           ease: "power3.out",
//         },
//         "-=0.6"
//       );

//       // 4. Side image: slides in from the left
//       tl.fromTo(
//         sideImageRef.current,
//         {
//           x: -50,
//           opacity: 0,
//           scale: 0.95,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.7"
//       );

//       // 5. Text block: fades up last
//       tl.fromTo(
//         textBlockRef.current,
//         {
//           y: 30,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.9,
//           ease: "power2.out",
//         },
//         "-=0.5"
//       );
//     }, containerRef);

//     return () => ctx.revert(); // cleanup on unmount
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full min-h-screen bgFirst relative pt-10"
//       style={{ opacity: 0 }} // start hidden, GSAP will animate in
//     >
//       {/* Title */}
//       <div className="w-full h-fit flex justify-center items-center pt-[9vh] sm:pt-[4vh]">
//         <h1
//           ref={titleRef}
//           className="Font_Q max-sm:leading-[12vw] max-sm:text-[11vw] max-sm:px-5 text-[13vw] uppercase COLOR_TEXT_RED"
//           style={{ opacity: 0 }} // start hidden
//         >
//           Dylan & Misha
//         </h1>
//       </div>

//       {/* Center Image Card */}
//       <div
//         ref={cardRef}
//         className="w-[18%] max-sm:w-[100%] sm:absolute sm:top-[70%] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
//         style={{ opacity: 0 }} // start hidden
//       >
//         <div className="relative w-full aspect-[5/7] p-[1rem] overflow-hidden">
//           <img
//             src="/FinalImage/w1.webp"
//             alt="IMG"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Left Side Block */}
//       <div className="sm:absolute sm:left-0 max-sm:pt-5 sm:bottom-[10%] w-full sm:w-[25%] px-[20px] flex flex-col gap-10">
//         {/* Side Image */}
//         <div
//           ref={sideImageRef}
//           className="w-[50%] max-sm:hidden aspect-square overflow-hidden max-sm:border-[2vw] sm:border-[0.5vw] border-[#F9DE85]"
//           style={{ opacity: 0 }} // start hidden
//         >
//           <img
//             src="/FinalImage/23.webp"
//             className="w-full h-full object-cover object-center"
//             alt="IMG"
//           />
//         </div>

//         {/* Text Block */}
//         <span
//           ref={textBlockRef}
//           className="text-justify Font_YV text-[1.1rem] max-sm:py-10 COLOR_TEXT_RED leading-[1.2rem]"
//           style={{ opacity: 0 }} // start hidden
//         >
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero enim
//           delectus magni aliquid eos, qui suscipit eum, est dolorum repellat
//           ratione sapiente commodi dolores facilis officiis asperiores? Harum,
//           tempore dolores!
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SectionMain;


'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SectionMain = () => {
  const containerRef    = useRef(null);
  const overlayTopRef   = useRef(null);
  const overlayBotRef   = useRef(null);
  const titleRef        = useRef(null);
  const cardWrapRef     = useRef(null);
  const cardImgRef      = useRef(null);
  const sideImageRef    = useRef(null);
  const textBlockRef    = useRef(null);
  const lineRef         = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const master = gsap.timeline({ defaults: { ease: "power4.out" } });

      /* ── Make container visible; overlays hide page until curtain lifts ── */
      gsap.set(containerRef.current, { visibility: "visible" });

      /* ─────────────────────────────────────────────────────
         1. CURTAIN — two panels wipe off screen (top ↑, bot ↓)
         ───────────────────────────────────────────────────── */
      gsap.set(overlayTopRef.current, { yPercent: 0 });
      gsap.set(overlayBotRef.current, { yPercent: 0 });

      master
        .to(overlayTopRef.current, {
          yPercent: -102,
          duration: 1.1,
          ease: "power3.inOut",
          delay: 0.25,
        })
        .to(
          overlayBotRef.current,
          {
            yPercent: 102,
            duration: 1.1,
            ease: "power3.inOut",
          },
          "<0.06"
        );

      /* ─────────────────────────────────────────────────────
         2. TITLE — SplitText per-character stagger reveal
         ───────────────────────────────────────────────────── */
      let split;
      if (titleRef.current) {
        split = new SplitText(titleRef.current, { type: "chars" });

        gsap.set(split.chars, {
          yPercent: 110,
          opacity: 0,
          rotationX: -50,
          transformOrigin: "50% 100%",
        });

        master.to(
          split.chars,
          {
            yPercent: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.05,
            stagger: { amount: 0.45, ease: "power2.inOut" },
            ease: "power3.out",
          },
          "-=0.65"
        );
      }

      /* ─────────────────────────────────────────────────────
         3. THIN ACCENT LINE under title
         ───────────────────────────────────────────────────── */
      if (lineRef.current) {
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
        master.to(
          lineRef.current,
          { scaleX: 1, duration: 0.85, ease: "expo.out" },
          "-=0.55"
        );
      }

      /* ─────────────────────────────────────────────────────
         4. CENTER IMAGE CARD — clip-path iris reveal from bottom
         ───────────────────────────────────────────────────── */
      gsap.set(cardWrapRef.current, {
        clipPath: "inset(100% 5% 0% 5%)",
        y: 20,
      });
      master.to(
        cardWrapRef.current,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.35,
          ease: "power4.out",
        },
        "-=0.75"
      );

      /* ─────────────────────────────────────────────────────
         5. IMAGE Ken-Burns warm-in (zoom out slightly)
         ───────────────────────────────────────────────────── */
      gsap.set(cardImgRef.current, { scale: 1.14 });
      master.to(
        cardImgRef.current,
        { scale: 1.0, duration: 2.6, ease: "power2.out" },
        "-=1.3"
      );

      /* ─────────────────────────────────────────────────────
         6. SIDE IMAGE — glide in from left
         ───────────────────────────────────────────────────── */
      gsap.set(sideImageRef.current, { x: -50, opacity: 0 });
      master.to(
        sideImageRef.current,
        { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=1.1"
      );

      /* ─────────────────────────────────────────────────────
         7. TEXT BLOCK — elegant fade up
         ───────────────────────────────────────────────────── */
      gsap.set(textBlockRef.current, { y: 22, opacity: 0 });
      master.to(
        textBlockRef.current,
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
        "-=0.65"
      );

      return () => {
        if (split) split.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── CURTAIN: TOP PANEL ── */}
      <div
        ref={overlayTopRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "#328066",
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      {/* ── CURTAIN: BOTTOM PANEL ── */}
      <div
        ref={overlayBotRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "#328066",
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* ── MAIN SECTION ── */}
      <div
        ref={containerRef}
        className="w-full min-h-screen  relative pt-10"
        style={{ visibility: "hidden" }}
      >
        {/* Title */}
        <div
          className="w-full h-fit flex justify-center items-center pt-[9vh] sm:pt-[4vh]"
          style={{ overflow: "hidden", perspective: "800px" }}
        >
          <h1
            ref={titleRef}
            className="Font_Q max-sm:leading-[12vw] max-sm:text-[11vw] max-sm:px-5 text-[13vw] uppercase COLOR_TEXT_RED"
          >
            Dylan & Misha
          </h1>
        </div>

        {/* Thin decorative line */}
        {/* <div
          ref={lineRef}
          className="max-sm:hidden COLOR_TEXT_RED"
          style={{
            position: "absolute",
            top: "calc(9vh + 15vw)",
            left: "8%",
            width: "84%",
            height: "1px",
            background: "currentColor",
            opacity: 0.12,
          }}
        /> */}

        {/* Center Image Card */}
        <div
          ref={cardWrapRef}
          className="w-[18%] max-sm:w-[100%] sm:absolute sm:top-[70%] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
        >
          <div className="relative w-full aspect-[5/7] p-[1rem] overflow-hidden">
            <img
              ref={cardImgRef}
              src="/FinalImage/w1.webp"
              alt="IMG"
              className="w-full h-full object-cover"
              style={{ transformOrigin: "center center", willChange: "transform" }}
            />
          </div>
        </div>

        {/* Left Side Block */}
        <div className="sm:absolute sm:left-0 max-sm:pt-5 sm:bottom-[10%] w-full sm:w-[25%] px-[20px] flex flex-col gap-10">
          {/* Side square image */}
          <div
            ref={sideImageRef}
            className="w-[50%] max-sm:hidden aspect-square overflow-hidden max-sm:border-[2vw] sm:border-[0.5vw] border-[#F9DE85]"
          >
            <img
              src="/FinalImage/23.webp"
              className="w-full h-full object-cover object-center"
              alt="IMG"
            />
          </div>

          {/* Text block */}
          <span
            ref={textBlockRef}
            className="text-justify Font_YV text-[1.1rem] max-sm:py-10 COLOR_TEXT_RED leading-[1.2rem]"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero enim
            delectus magni aliquid eos, qui suscipit eum, est dolorum repellat
            ratione sapiente commodi dolores facilis officiis asperiores? Harum,
            tempore dolores!
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionMain;