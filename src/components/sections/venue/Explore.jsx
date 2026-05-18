// // "use client";
// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Image from "next/image";
// // import { useGSAP } from "@gsap/react";
// // import RSVP from "@/components/common/RSVP";
// // import Shop from "@/components/common/Shop";
// // gsap.registerPlugin(ScrollTrigger);

// // const Explore = () => {
// //   const mainContainer = useRef();
// //   const scrollContainer = useRef();


// //   useGSAP(() => {
// //     if (!mainContainer.current || !scrollContainer.current) return;
// //     const totalScrollWidth =
// //       scrollContainer.current.scrollWidth - window.innerWidth;

// //     var sliderTween = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: mainContainer.current,
// //         start: "top top",
// //         end: () => `+=${totalScrollWidth}`,
// //         pin: true,
// //         scrub: true,
// //         // markers: true,
// //       }
// //     })

// //     sliderTween.to(scrollContainer.current, {
// //       x: -totalScrollWidth,
// //       ease: "none",
// //     })

// //     const animate_child = document.querySelectorAll(".animate_child");

// //     animate_child.forEach((child) => {
// //       gsap.fromTo(
// //         child,
// //         { xPercent: 20 },
// //         {
// //           xPercent: 0,
// //           ease: "power2.out",
// //           duration: 1,
// //           scrollTrigger: {
// //             trigger: child,
// //             containerAnimation: sliderTween,
// //             start: "left right",
// //             toggleActions: "play none none reverse",
// //           },
// //         });
// //     });
// //   })

// //   return (
// //     <>
// //       <div
// //         ref={mainContainer}
// //         className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
// //       >
// //         <div
// //           ref={scrollContainer}
// //           className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
// //         >
// //           <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
// //             <div className="w-fit h-fit flex  ">
// //               <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
// //                 <Image
// //                   src={`/imgs/explorNewImg/City_Palace_1.webp`}
// //                   className="w-full h-full  object-cover object-center scale-[1.2]"
// //                   width={1000}
// //                   height={1000}
// //                   alt="Img"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="w-[50vw] h-screen  flex justify-center items-center  ">
// //             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
// //               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

// //               </p>
// //               <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED text-center uppercase ">
// //                 EXPLORE FLORENCE
// //               </h4>
// //               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
// //                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
// //                  Florence is a city of Renaissance art, beautiful architecture, charming streets, and unforgettable food. If you have some time between wedding celebrations, here are a few of our favourite recommendations across sightseeing, tours, dining, and shopping. <br />

// //                  All travel times listed below are approximate and measured from Florence’s historic centre (Duomo area), where most guest accommodations are located.

// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
// //             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
// //               <Image
// //                 src={`/imgs/explorNewImg/City_Palace_2.webp`}
// //                 className="w-full h-full object-cover  object-center"
// //                 width={1000}
// //                 height={1000}
// //                 alt="Img"
// //               />
// //             </div>
// //           </div>

// //           <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
// //             <div className="w-fit h-fit flex  ">
// //               <div className="w-[50vw] h-screen  overflow-hidden img5">
// //                 <Image
// //                   src={`/imgs/explorNewImg/Lake_Pichola_1.webp`}
// //                   className="w-full h-full  object-cover object-center scale-[1.2]"
// //                   width={2000}
// //                   height={2000}
// //                   alt="Img"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
// //             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
// //               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
// //               </p>
// //               <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
// //                 Lake Pichola
// //               </h4>
// //               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
// //                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
// //                   Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
// //             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
// //               <Image
// //                 src={`/imgs/explorNewImg/Lake_Pichola_2.webp`}
// //                 className="w-full h-full object-cover  object-center"
// //                 width={1000}
// //                 height={1000}
// //                 alt="Img"
// //               />
// //             </div>
// //           </div>

// //           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
// //             <div className="w-fit h-fit flex  ">
// //               <div className="w-[50vw] h-fit  overflow-hidden img5">
// //                 <Image
// //                   src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`}
// //                   className="w-full h-full  object-cover object-center scale-[1.2]"
// //                   width={2000}
// //                   height={2000}
// //                   alt="Img"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
// //             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
// //               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

// //               </p>
// //               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
// //                 Taj Lake Palace
// //               </h4>
// //               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
// //                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
// //                   An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
// //             <div className="w-[70vw] h-screen flex overflow-hidden ">
// //               <img
// //                 src={`/imgs/explorNewImg/pales.jpg`}
// //                 className="w-full h-full object-cover  object-center"
// //                 alt="Img"
// //               />
// //             </div>
// //           </div>


// //           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
// //             <div className="w-fit h-fit flex  ">
// //               <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
// //                 <Image
// //                   src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp`}
// //                   className="w-full h-full  object-cover object-center scale-[1.2]"
// //                   width={2000}
// //                   height={2000}
// //                   alt="Img"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="animate_child w-[50vw] h-screen  flex justify-center items-center  ">
// //             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
// //               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

// //               </p>
// //               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
// //                 The Oberoi Udaivilas
// //               </h4>
// //               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
// //                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
// //                   A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
// //             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
// //               <Image
// //                 src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_2.webp`}
// //                 className="w-full h-full object-cover  object-center"
// //                 width={1000}
// //                 height={1000}
// //                 alt="Img"
// //               />
// //               {/* </div> */}
// //             </div>
// //           </div>


// //           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
// //             <div className="w-fit h-fit flex  ">
// //               <div className="w-[50vw] h-fit  overflow-hidden img5">
// //                 <Image
// //                   src={`/imgs/explorNewImg/Bagore_Ki_Haveli_1.webp`}
// //                   className="w-full h-full  object-cover object-center scale-[1.2]"
// //                   width={2000}
// //                   height={2000}
// //                   alt="Img"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
// //             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
// //               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

// //               </p>
// //               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
// //                 Bagore Ki Haveli
// //               </h4>
// //               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
// //                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
// //                   An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
// //             <div className="w-[70vw] h-screen flex overflow-hidden ">
// //               <img
// //                 src={`/imgs/explorNewImg/bkh.jpg`}
// //                 className="w-full h-full object-cover  object-center"

// //                 alt="Img"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Shop />

// //     </>
// //   );
// // };

// // export default Explore;


// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import Shop from "@/components/common/Shop";

// gsap.registerPlugin(ScrollTrigger);

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const SECTIONS = [
//   // ── PLACES TO VISIT ──
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/a1.jpg",
//     alt: "Florence Cathedral",
//   },
//   {
//     type: "text",
//     tag: "Places to Visit",
//     title: "Florence\nCathedral",
//     body: "Florence's most iconic landmark — Brunelleschi's famous red dome dominates the city skyline.",
//     meta: ["Central Florence", "Cathedral free · Dome €30"],
//   },
//   {
//     type: "image-portrait",
//     src: "/FinalImage/exploreFlorence/a2.jpg",
//     alt: "Duomo detail",
//   },
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/b1.jpg",
//     alt: "Uffizi Gallery",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Places to Visit",
//     title: "Uffizi\nGallery",
//     body: "One of the world's greatest museums — home to masterpieces by Botticelli, Leonardo da Vinci and Michelangelo.",
//     meta: ["Historic Center", "€20–€25"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: "/FinalImage/exploreFlorence/b2.jpg",
//     alt: "Ponte Vecchio",
//     animate: true,
//   },
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/c1.jpg",
//     alt: "Piazzale Michelangelo",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Places to Visit",
//     title: "Piazzale\nMichelangelo",
//     body: "The best panoramic viewpoint in Florence with spectacular sunset views over the city rooftops.",
//     meta: ["Taxi 10 min · Walk 25 min", "Free"],
//     animate: true,
//   },
//   {
//     type: "image-full",
//     src: "/FinalImage/exploreFlorence/c2.jpg",
//     alt: "Boboli Gardens",
//     animate: true,
//   },
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/d1.jpg",
//     alt: "Pitti Palace",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Places to Visit",
//     title: "Pitti\nPalace",
//     body: "Former residence of the Medici family — home to several museums, art collections, and the beautiful Boboli Gardens behind.",
//     meta: ["15 min walk from city centre", "€16"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: "/FinalImage/exploreFlorence/d2.jpg",
//     alt: "Basilica of Santa Croce",
//     animate: true,
//   },
//   // ── TOURS & EXPERIENCES ──
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/e1.jpg",
//     alt: "Chianti Wine Region",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Tours & Experiences",
//     title: "Chianti\nWine Tours",
//     body: "Rolling vineyards, charming villages and exceptional wine tastings — the perfect Tuscan afternoon.",
//     meta: ["45–60 min from Florence", "€120–€200 per person"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: "/FinalImage/exploreFlorence/e2.jpg",
//     alt: "Pisa",
//     animate: true,
//   },
//   {
//     type: "image-wide",
//     src: "/FinalImage/exploreFlorence/f1.jpg",
//     alt: "Siena",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Tours & Experiences",
//     title: "Siena\nDay Trip",
//     body: "The medieval town of Siena is known for its breathtaking Piazza del Campo and stunning Gothic cathedral.",
//     meta: ["1 hour by train", "€10–€15"],
//     animate: true,
//   },
//   {
//     type: "image-full",
//     src: "/FinalImage/exploreFlorence/f2.jpg",
//     alt: "Tuscan Cooking Class",
//     animate: true,
//   },
//   // ── DINING ──
//   {
//     type: "image-wide",
//     src: ``,
//     alt: "All'Antico Vinaio",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Culinary Guide",
//     title: "All'Antico\nVinaio",
//     body: "Florence's most famous sandwich shop — focaccia packed with Tuscan meats and cheeses. Expect a queue, worth every minute.",
//     meta: ["Historic Centre", "€10–€15"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: ``,
//     alt: "La Giostra",
//     animate: true,
//   },
//   {
//     type: "image-wide",
//     src: ``,
//     alt: "Buca Lapi",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Culinary Guide",
//     title: "Buca\nLapi",
//     body: "Florence's oldest restaurant — celebrated for the legendary Bistecca alla Fiorentina. A true Florentine institution.",
//     meta: ["Via del Trebbio", "€50–€80 per person"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: ``,
//     alt: "Gelateria dei Neri",
//     animate: true,
//   },
//   // ── SHOPPING ──
//   {
//     type: "image-wide",
//     src: ``,
//     alt: "Via de' Tornabuoni",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Shopping",
//     title: "Via de'\nTornabuoni",
//     body: "Florence's luxury shopping street — home to Gucci, Ferragamo, Prada and other iconic Italian fashion houses.",
//     meta: ["10 min walk from Duomo", ""],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: ``,
//     alt: "San Lorenzo Market",
//     animate: true,
//   },
//   {
//     type: "image-full",
//     src: ``,
//     alt: "The Mall Firenze Outlet",
//     animate: true,
//   },
//   {
//     type: "text",
//     tag: "Shopping",
//     title: "The Mall\nFirenze",
//     body: "A luxury outlet offering Gucci, Valentino and Ferragamo at reduced prices. Shuttle buses run daily from the city centre.",
//     meta: ["40 min by car", "Shuttle from city centre"],
//     animate: true,
//   },
//   {
//     type: "image-portrait",
//     src: ``,
//     alt: "Officina Profumo-Farmaceutica di Santa Maria Novella",
//     animate: true,
//   },
// ];

// // ─── COMPONENT ────────────────────────────────────────────────────────────────

// const Explore = () => {
//   const mainContainer = useRef();
//   const scrollContainer = useRef();

//   useGSAP(() => {
//     if (!mainContainer.current || !scrollContainer.current) return;

//     const totalScrollWidth =
//       scrollContainer.current.scrollWidth - window.innerWidth;

//     const sliderTween = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainContainer.current,
//         start: "top top",
//         end: () => `+=${totalScrollWidth}`,
//         pin: true,
//         scrub: true,
//       },
//     });

//     sliderTween.to(scrollContainer.current, {
//       x: -totalScrollWidth,
//       ease: "none",
//     });

//     // Animate children
//     const animate_child = document.querySelectorAll(".animate_child");
//     animate_child.forEach((child) => {
//       gsap.fromTo(
//         child,
//         { xPercent: 20 },
//         {
//           xPercent: 0,
//           ease: "power2.out",
//           duration: 1,
//           scrollTrigger: {
//             trigger: child,
//             containerAnimation: sliderTween,
//             start: "left right",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   });

//   return (
//     <>
//       <div
//         ref={mainContainer}
//         className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
//       >
//         <div
//           ref={scrollContainer}
//           className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
//         >
//           {/* ── INTRO PANEL ── */}
//           <IntroPanel />

//           {/* ── DYNAMIC SECTIONS ── */}
//           {SECTIONS.map((section, i) => (
//             <SectionBlock key={i} section={section} />
//           ))}

//           {/* ── TIP PANEL ── */}
//           <TipPanel />
//         </div>
//       </div>

     
//     </>
//   );
// };

// // ─── INTRO PANEL ─────────────────────────────────────────────────────────────

// const IntroPanel = () => (
//   <>
//     {/* Opening portrait image */}
//     <div className="w-fit h-screen flex justify-center items-center ml-[5vw]">
//       <div className="w-[413px] aspect-[4/5] overflow-hidden">
//         {/* <Image
//           src=""
          
//           width={1000}
//           height={1000}
//           alt="Florence"
//         /> */}
//         <img src={`/FinalImage/exploreFlorence/EXP1.webp`} className="w-full h-full object-cover object-center scale-[1.2]" alt="IMG" />
//       </div>
//     </div>

//     {/* Intro text */}
//     <div className="w-[55vw] h-screen flex justify-center items-center px-[4vw]">
//       <div className="w-fit max-w-[660px] h-fit flex flex-col gap-6 justify-center items-center">
       

//         <h4 className="text-[72px] leading-[70px] Font_Q COLOR_TEXT_RED text-center uppercase">
//           Explore<br />
//           <em className="font-light italic">Florence</em>
//         </h4>

//         <div className="w-full max-w-[460px] flex flex-col justify-center items-center gap-4">
//           <p className="text-[16px] COLOR_TEXT_RED text-center Font_YV leading-relaxed ">
//             Florence is a city of Renaissance art, beautiful architecture,
//             charming streets, and unforgettable food. If you have some time
//             between celebrations, here are a few of our favourite
//             recommendations.
//           </p>
//           <p className="text-[13px] COLOR_TEXT_RED text-center Font_YV  italic">
//             All travel times are approximate from Florence's historic centre (Duomo area).
//           </p>
//         </div>

//         {/* Category pills */}
//         <div className="flex gap-3 flex-wrap justify-center mt-2">
//           {["Sightseeing", "Tours", "Dining", "Shopping"].map((cat) => (
//             <span
//               key={cat}
//               className="text-[10px] tracking-[0.3em] uppercase Font_YV COLOR_TEXT_RED border border-[#C53D2E] border-opacity-25 px-4 py-2 "
//             >
//               {cat}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Second portrait */}
//     <div className="w-fit h-screen mr-[2vw] flex justify-center items-center">
//       <div className="w-[413px] aspect-[4/5] overflow-hidden">
//         {/* <Image
//           src="/imgs/explorNewImg/City_Palace_2.webp"
//           className="w-full h-full object-cover object-center"
//           width={1000}
//           height={1000}
//           alt="Florence"
//         /> */}

//          <img src={`/FinalImage/exploreFlorence/EXP2.webp`} className="w-full h-full object-cover object-center" alt="IMG" />

//       </div>
//     </div>
//   </>
// );

// // ─── SECTION BLOCK ────────────────────────────────────────────────────────────

// const SectionBlock = ({ section }) => {
//   const animClass = section.animate ? "animate_child" : "";

//    // 🚨 Skip image sections if no src
//   if (
//     (section.type.includes("image")) &&
//     (!section.src || section.src.trim() === "")
//   ) {
//     return null;
//   }

//   if (section.type === "image-wide") {
//     return (
//       <div className={`${animClass} w-fit mx-[5vw] h-screen flex justify-center items-center`}>
//         <div className="w-[50vw] h-screen overflow-hidden img5">
//           <Image
//             src={section.src}
//             className="w-full h-full object-cover object-center scale-[1.2]"
//             width={2000}
//             height={2000}
//             alt={section.alt}
//           />
//         </div>
//       </div>
//     );
//   }

//   if (section.type === "image-portrait") {
//     return (
//       <div className={`${animClass} w-fit h-screen mr-[2vw] flex justify-center items-center`}>
//         <div className="w-[413px] aspect-[4/5] flex overflow-hidden">
//           <Image
//             src={section.src}
//             className="w-full h-full object-cover object-center"
//             width={1000}
//             height={1000}
//             alt={section.alt}
//           />
//         </div>
//       </div>
//     );
//   }

//   if (section.type === "image-full") {
//     return (
//       <div className={`${animClass} w-fit h-screen mr-[2vw] flex justify-center items-center`}>
//         <div className="w-[70vw] h-screen flex overflow-hidden">
//           <img
//             src={section.src}
//             className="w-full h-full object-cover object-center"
//             alt={section.alt}
//           />
//         </div>
//       </div>
//     );
//   }

//   if (section.type === "text") {
//     return (
//       <div className={`${animClass} w-[50vw] h-screen flex justify-center items-center`}>
//         <div className="w-fit max-w-[620px] h-fit flex flex-col gap-5 justify-center items-center px-8">

//           {/* Category tag */}
//           {section.tag && (
//             <div className="flex items-center gap-3 self-start">
//               <div className="w-5 h-px bg-[#C53D2E] opacity-30" />
//               <p className="text-[10px] tracking-[0.35em] uppercase Font_YV COLOR_TEXT_RED ">
//                 {section.tag}
//               </p>
//             </div>
//           )}

//           {/* Title */}
//           <h4 className="text-[72px] leading-[70px] Font_Q COLOR_TEXT_RED uppercase self-start">
//             {section.title.split("\n").map((line, i) => (
//               <React.Fragment key={i}>
//                 {line}
//                 {i < section.title.split("\n").length - 1 && <br />}
//               </React.Fragment>
//             ))}
//           </h4>

//           {/* Body */}
//           <p className="text-[16px] COLOR_TEXT_RED text-left Font_YV leading-relaxed  self-start max-w-[420px]">
//             {section.body}
//           </p>

//           {/* Meta info */}
//           {section.meta?.filter(Boolean).length > 0 && (
//             <div className="flex flex-col gap-2 self-start mt-1">
//               {section.meta.filter(Boolean).map((m, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-3 h-px bg-[#C53D2E] " />
//                   <span className="text-[11px] tracking-[0.15em] Font_YV COLOR_TEXT_RED ">
//                     {m}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// // ─── TIP PANEL ───────────────────────────────────────────────────────────────

// const TipPanel = () => (
//   <div className="animate_child w-[60vw] h-screen flex justify-center items-center px-[6vw]">
//     <div className="w-fit max-w-[560px] flex flex-col gap-6 items-center text-center">
//       {/* Ornament */}
//       {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <rect x="13" y="0" width="6" height="6" fill="#C53D2E" fillOpacity="0.3" transform="rotate(45 16 3)" />
//         <rect x="13" y="13" width="6" height="6" fill="#C53D2E" fillOpacity="0.15" transform="rotate(45 16 16)" />
//         <rect x="13" y="26" width="6" height="6" fill="#C53D2E" fillOpacity="0.3" transform="rotate(45 16 29)" />
//       </svg> */}

//       <p className="text-[14px] tracking-[0.4em] uppercase Font_YV COLOR_TEXT_RED ">
//         Tip for Guests
//       </p>

//       <h4 className="text-[52px] leading-[52px] Font_Q COLOR_TEXT_RED italic font-light">
//         Florence on<br />foot
//       </h4>

//       <p className="text-[16px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[420px]">
//         Florence is a compact and wonderfully walkable city. Many of its most
//         famous landmarks, restaurants, and shops are within the historic centre
//         and can easily be explored on foot.
//       </p>

//       <div className="w-px h-16 bg-[#C53D2E] opacity-20 mt-2" />
//     </div>
//   </div>
// );

// export default Explore;

"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    tag: "Places to Visit",
    title: "Florence\nCathedral",
    body: "Florence's most iconic landmark — Brunelleschi's famous red dome dominates the city skyline.",
    meta: ["Central Florence", "Cathedral free · Dome €30"],
    images: [
      { src: "/FinalImage/exploreFlorence/a1.jpg", alt: "Florence Cathedral" },
      { src: "/FinalImage/exploreFlorence/a2.jpg", alt: "Duomo detail" },
    ],
    layout: "left", // image left, text right
  },
  {
    tag: "Places to Visit",
    title: "Uffizi\nGallery",
    body: "One of the world's greatest museums — home to masterpieces by Botticelli, Leonardo da Vinci and Michelangelo.",
    meta: ["Historic Center", "€20–€25"],
    images: [
      { src: "/FinalImage/exploreFlorence/b1.jpg", alt: "Uffizi Gallery" },
      { src: "/FinalImage/exploreFlorence/b2.jpg", alt: "Ponte Vecchio" },
    ],
    layout: "right",
  },
  {
    tag: "Places to Visit",
    title: "Piazzale\nMichelangelo",
    body: "The best panoramic viewpoint in Florence with spectacular sunset views over the city rooftops.",
    meta: ["Taxi 10 min · Walk 25 min", "Free"],
    images: [
      { src: "/FinalImage/exploreFlorence/c1.jpg", alt: "Piazzale Michelangelo" },
      { src: "/FinalImage/exploreFlorence/c2.jpg", alt: "Boboli Gardens" },
    ],
    layout: "left",
  },
  {
    tag: "Places to Visit",
    title: "Pitti\nPalace",
    body: "Former residence of the Medici family — home to several museums, art collections, and the beautiful Boboli Gardens behind.",
    meta: ["15 min walk from city centre", "€16"],
    images: [
      { src: "/FinalImage/exploreFlorence/d1.jpg", alt: "Pitti Palace" },
      { src: "/FinalImage/exploreFlorence/d2.jpg", alt: "Basilica of Santa Croce" },
    ],
    layout: "right",
  },
  {
    tag: "Tours & Experiences",
    title: "Chianti\nWine Tours",
    body: "Rolling vineyards, charming villages and exceptional wine tastings — the perfect Tuscan afternoon.",
    meta: ["45–60 min from Florence", "€120–€200 per person"],
    images: [
      { src: "/FinalImage/exploreFlorence/e1.jpg", alt: "Chianti Wine Region" },
      { src: "/FinalImage/exploreFlorence/e2.jpg", alt: "Pisa" },
    ],
    layout: "left",
  },
  {
    tag: "Tours & Experiences",
    title: "Siena\nDay Trip",
    body: "The medieval town of Siena is known for its breathtaking Piazza del Campo and stunning Gothic cathedral.",
    meta: ["1 hour by train", "€10–€15"],
    images: [
      { src: "/FinalImage/exploreFlorence/f1.jpg", alt: "Siena" },
      { src: "/FinalImage/exploreFlorence/f2.jpg", alt: "Tuscan Cooking Class" },
    ],
    layout: "right",
  },
  {
    tag: "Culinary Guide",
    title: "All'Antico\nVinaio",
    body: "Florence's most famous sandwich shop — focaccia packed with Tuscan meats and cheeses. Expect a queue, worth every minute.",
    meta: ["Historic Centre", "€10–€15"],
    images: [],
    layout: "left",
  },
  {
    tag: "Culinary Guide",
    title: "Buca\nLapi",
    body: "Florence's oldest restaurant — celebrated for the legendary Bistecca alla Fiorentina. A true Florentine institution.",
    meta: ["Via del Trebbio", "€50–€80 per person"],
    images: [],
    layout: "right",
  },
  {
    tag: "Shopping",
    title: "Via de'\nTornabuoni",
    body: "Florence's luxury shopping street — home to Gucci, Ferragamo, Prada and other iconic Italian fashion houses.",
    meta: ["10 min walk from Duomo", ""],
    images: [],
    layout: "left",
  },
  {
    tag: "Shopping",
    title: "The Mall\nFirenze",
    body: "A luxury outlet offering Gucci, Valentino and Ferragamo at reduced prices. Shuttle buses run daily from the city centre.",
    meta: ["40 min by car", "Shuttle from city centre"],
    images: [],
    layout: "right",
  },
];

// Group sections by tag for category dividers
const CATEGORIES = ["Places to Visit", "Tours & Experiences", "Culinary Guide", "Shopping"];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Explore = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero title split animation
    gsap.fromTo(
      ".hero-title-word",
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".hero-sub",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );

    gsap.fromTo(
      ".hero-pills",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 }
    );

    // Hero images parallax
    gsap.to(".hero-img-1", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-img-2", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
    });

    // Category label lines
    gsap.utils.toArray(".cat-line").forEach((el) => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Section title reveals
    gsap.utils.toArray(".section-title-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Body text fade
    gsap.utils.toArray(".section-body-fade").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Images reveal
    gsap.utils.toArray(".img-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Abstract number counters
    gsap.utils.toArray(".section-number").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Tip panel
    gsap.fromTo(
      ".tip-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".tip-panel", start: "top 75%", toggleActions: "play none none reverse" },
      }
    );

  }, { scope: containerRef });

  // Group sections by category
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    items: SECTIONS.filter((s) => s.tag === cat),
  }));

  let globalIndex = 0;

  return (
    <div ref={containerRef} className="COLOR_BG_CREAM min-h-screen w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── CATEGORY GROUPS ── */}
      {grouped.map((group) => (
        <CategoryGroup
          key={group.category}
          category={group.category}
          items={group.items}
          startIndex={(() => {
            const idx = globalIndex;
            globalIndex += group.items.length;
            return idx;
          })()}
        />
      ))}

      {/* ── TIP PANEL ── */}
      <TipPanel />

    </div>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="hero-section w-full min-h-screen relative flex flex-col justify-end pb-24 overflow-hidden">

    {/* Background images — abstract offset placement */}
    <div className="hero-img-1 absolute top-0 right-0 w-[42vw] h-[75vh] overflow-hidden z-0">
      <img
        src="/FinalImage/exploreFlorence/EXP1.webp"
        alt="Florence"
        className="w-full h-full object-cover object-center scale-[1.08]"
      />
    </div>
    <div className="hero-img-2 absolute top-[30vh] left-[8vw] w-[28vw] h-[55vh] overflow-hidden z-0">
      {/* <img
        src="/FinalImage/exploreFlorence/EXP2.webp"
        alt="Florence"
        className="w-full h-full object-cover object-center"
      /> */}
    </div>

    {/* Abstract vertical rule
    <div className="absolute left-[6vw] top-[10vh] bottom-[10vh] w-px bg-[#C53D2E] opacity-15 z-10" /> */}

    {/* Index label top-left
    <div className="absolute top-12 left-[8vw] z-20">
      <p className="text-[10px] tracking-[0.4em] uppercase Font_YV COLOR_TEXT_RED opacity-50">
        Guest Guide — Florence
      </p>
    </div> */}

    {/* Category pills top-right
    <div className="hero-pills absolute top-12 right-[6vw] z-20 flex gap-3 flex-wrap justify-end">
      {["Sightseeing", "Tours", "Dining", "Shopping"].map((cat) => (
        <span
          key={cat}
          className="text-[9px] tracking-[0.3em] uppercase Font_YV COLOR_TEXT_RED border border-[#C53D2E] border-opacity-30 px-3 py-1.5"
        >
          {cat}
        </span>
      ))}
    </div> */}

    {/* Main title — bottom left, large abstract type */}
    <div className="relative z-20 pl-[8vw]">
      <div className="overflow-hidden mb-1">
        <h1 className="hero-title-word text-[clamp(64px,10vw,130px)] leading-[0.9] Font_Q COLOR_TEXT_RED uppercase">
          Explore
        </h1>
      </div>
      <div className="overflow-hidden mb-8 ">
        <h1 className="hero-title-word text-[clamp(64px,10vw,130px)] leading-[0.9] Font_Q COLOR_TEXT_RED uppercase italic font-light">
          Florence
        </h1>
      </div>

      {/* Body text — deliberately offset, abstract */}
      <div className="hero-sub flex items-start gap-12 max-w-[55vw]">
        
        <div className="flex flex-col gap-3">
          <p className="text-[15px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[380px]">
            Florence is a city of Renaissance art, beautiful architecture, charming streets, and unforgettable food. If you have some time between celebrations, here are a few of our favourite recommendations.
          </p>
          <p className="text-[12px] COLOR_TEXT_RED Font_YV italic opacity-60">
            All travel times are approximate from Florence's historic centre (Duomo area).
          </p>
        </div>
      </div>
    </div>

    {/* Abstract bottom rule */}
    {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C53D2E] opacity-10 z-10" /> */}
  </section>
);

// ─── CATEGORY GROUP ───────────────────────────────────────────────────────────

const CategoryGroup = ({ category, items, startIndex }) => (
  <div className="w-full">
    {/* Category divider */}
    <div className="px-[8vw] py-16 flex items-center gap-6">
      <div
        className="cat-line h-px bg-[#C53D2E] opacity-25 flex-1 origin-left"
        style={{ transformOrigin: "left" }}
      />
      <p className="text-[10px] tracking-[0.5em] uppercase Font_YV COLOR_TEXT_RED opacity-70 shrink-0">
        {category}
      </p>
      <div
        className="cat-line h-px bg-[#C53D2E] opacity-25 flex-1 origin-right"
        style={{ transformOrigin: "right" }}
      />
    </div>

    {/* Section items */}
    {items.map((section, i) => (
      <SectionBlock
        key={i}
        section={section}
        index={startIndex + i}
      />
    ))}
  </div>
);

// ─── SECTION BLOCK ────────────────────────────────────────────────────────────

const SectionBlock = ({ section, index }) => {
  const hasImages = section.images && section.images.length > 0;
  const isLeft = section.layout === "left";
  const num = String(index + 1).padStart(2, "0");

  return (
    <section className="w-full px-[6vw] py-24 relative">

      {/* Abstract large number */}
      <div
        className={`section-number absolute top-8 ${isLeft ? "right-[6vw]" : "left-[6vw]"} text-[clamp(80px,12vw,160px)] Font_Q COLOR_TEXT_RED leading-none select-none pointer-events-none`}
        style={{ opacity: 0.04 }}
      >
        {num}
      </div>

      <div
        className={`relative z-10 flex flex-col ${hasImages ? (isLeft ? "lg:flex-row" : "lg:flex-row-reverse") : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
      >

        {/* IMAGES COLUMN */}
        {hasImages && (
          <div className={`w-full lg:w-[52%] flex gap-4 ${isLeft ? "" : ""} shrink-0`}>
            {section.images[0] && (
              <div className="img-reveal flex-1 overflow-hidden" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    width={800}
                    height={1067}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            )}
            {section.images[1] && (
              <div
                className="img-reveal w-[38%] overflow-hidden shrink-0 self-end"
                style={{ clipPath: "inset(100% 0% 0% 0%)", marginBottom: isLeft ? "0" : "6vh" }}
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={section.images[1].src}
                    alt={section.images[1].alt}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ marginTop: isLeft ? "6vh" : "0" }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TEXT COLUMN */}
        <div
          className={`w-full ${hasImages ? "lg:w-[44%]" : "lg:w-full lg:max-w-[600px] lg:mx-auto"} flex flex-col gap-6`}
        >
          {/* Tag */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-px bg-[#C53D2E] opacity-30" />
            <p className="text-[10px] tracking-[0.4em] uppercase Font_YV COLOR_TEXT_RED opacity-60">
              {section.tag}
            </p>
          </div>

          {/* Title */}
          <div className="overflow-hidden">
            <h2 className="section-title-reveal text-[clamp(42px,6vw,80px)] leading-[0.92] Font_Q COLOR_TEXT_RED uppercase">
              {section.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <em className="font-light italic">{line}</em> : line}
                  {i < section.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          {/* Decorative rule */}
          <div className="w-16 h-px bg-[#C53D2E] opacity-20" />

          {/* Body */}
          <p className="section-body-fade text-[15px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[380px]">
            {section.body}
          </p>

          {/* Meta */}
          {/* {section.meta?.filter(Boolean).length > 0 && (
            <div className="section-body-fade flex flex-col gap-2 mt-2">
              {section.meta.filter(Boolean).map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 border border-[#C53D2E] border-opacity-40 rotate-45 shrink-0 block" />
                  <span className="text-[11px] tracking-[0.15em] Font_YV COLOR_TEXT_RED opacity-70">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          )} */}

          {/* Abstract number — small, inline */}
          {/* <div className="mt-4">
            <span className="text-[11px] tracking-[0.3em] Font_YV COLOR_TEXT_RED opacity-25 uppercase">
              / {num}
            </span>
          </div> */}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-[6vw] right-[6vw] h-px bg-[#C53D2E] opacity-8" />
    </section>
  );
};

// ─── TIP PANEL ───────────────────────────────────────────────────────────────

const TipPanel = () => (
  <section className="tip-panel w-full px-[8vw] py-32 relative overflow-hidden">

    {/* Abstract background text */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden
    >
      {/* <span
        className="text-[clamp(100px,18vw,260px)] Font_Q COLOR_TEXT_RED leading-none uppercase"
        style={{ opacity: 0.03 }}
      >
        Walk
      </span> */}
    </div>

    <div className="tip-content relative z-10 max-w-[600px] mx-auto flex flex-col items-center text-center gap-6">
      <div className="w-px h-16 bg-[#C53D2E] opacity-20" />

      <p className="text-[10px] tracking-[0.5em] uppercase Font_YV COLOR_TEXT_RED opacity-60">
        Tip for Guests
      </p>

      <h3 className="text-[clamp(40px,6vw,68px)] leading-[0.92] Font_Q COLOR_TEXT_RED italic font-light">
        Florence on<br />foot
      </h3>

      <div className="w-10 h-px bg-[#C53D2E] opacity-20" />

      <p className="text-[15px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[400px]">
        Florence is a compact and wonderfully walkable city. Many of its most famous landmarks, restaurants, and shops are within the historic centre and can easily be explored on foot.
      </p>

      <div className="w-px h-16 bg-[#C53D2E] opacity-20" />
    </div>
  </section>
);

export default Explore;