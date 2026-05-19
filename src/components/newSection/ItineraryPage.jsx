// "use client";
// import { useEffect, useRef, useState } from "react";

// const events = [
//   {
//     date: "17 September",
//     title: "White Wedding",
//     time: "5:30 PM",
//     venue: "Villa Corti",
//     transfer: "Transfers to Villa Corti will begin at 4:30 PM.",
//     accent: "White",
//     index: "01",
//     url : `/FinalImage/11.webp`,
//   },
//   {
//     date: "18 September",
//     title: "Cocktails & Canapés",
//     time: "7:00 PM",
//     venue: "Villa Palmieri",
//     transfer: "Transfers to Villa Palmieri will begin at 6:00 PM.",
//     accent: "Evening",
//     index: "02",
//     url : `/FinalImage/36.webp`,
//   },
//   {
//     date: "19 September",
//     title: "Indian Wedding",
//     time: "3:00 PM – 5:00 PM",
//     venue: "Villa Collazzi",
//     transfer: "Transfers to Villa Collazzi will begin at 2:00 PM.",
//     accent: "Indian",
//     index: "03",
//     subEvents: [
//       { time: "3:00 PM", name: "Baraat Assembly" },
//       { time: "5:00 PM", name: "Wedding Ceremony" },
//     ],
//     url : `/FinalImage/5.webp`,
//   },
// ];

// export default function ItineraryPage() {
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const lineRef = useRef(null);
//   const cardsRef = useRef([]);
//   const [hoveredIdx, setHoveredIdx] = useState(null);
//   const [gsapLoaded, setGsapLoaded] = useState(false);

//   useEffect(() => {
//     // Dynamically load GSAP
//     import("gsap").then(({ gsap }) => {
//       import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
//         gsap.registerPlugin(ScrollTrigger);
//         setGsapLoaded(true);

//         // Header animation
//         if (headerRef.current) {
//           gsap.fromTo(
//             headerRef.current.querySelectorAll(".anim-header"),
//             { y: 60, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.2,
//               stagger: 0.15,
//               ease: "power3.out",
//               delay: 0.2,
//             }
//           );
//         }

//         // Decorative line draw
//         if (lineRef.current) {
//           gsap.fromTo(
//             lineRef.current,
//             { scaleX: 0 },
//             {
//               scaleX: 1,
//               duration: 1.4,
//               ease: "power3.inOut",
//               delay: 0.8,
//               transformOrigin: "left center",
//             }
//           );
//         }

//         // Card scroll reveals
//         cardsRef.current.forEach((card, i) => {
//           if (!card) return;
//           gsap.fromTo(
//             card,
//             { y: 80, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.1,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 toggleActions: "play none none none",
//               },
//               delay: i * 0.08,
//             }
//           );

//           // Number counter animation
//           const numEl = card.querySelector(".event-index");
//           if (numEl) {
//             gsap.fromTo(
//               numEl,
//               { opacity: 1, x: -20 },
//               {
//                 opacity: 1,
//                 x: 0,
//                 duration: 1.2,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                   trigger: card,
//                   start: "top 85%",
//                 },
//               }
//             );
//           }
//         });
//       });
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="Font_Q pt-[10vh] COLOR_BG_CREAM "
//       style={{
//         // backgroundColor: "#F6F5F1",
//         minHeight: "100vh",
//         // fontFamily: "'Montserrat', sans-serif",
//         color:"#173e3d",
//         overflow: "hidden",
//       }}
//     >
//       {/* Grain texture overlay */}
//       <div
//       className="w-full "
//         style={{
//           position: "fixed",
//           inset: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
//           pointerEvents: "none",
//           zIndex: 0,
//           opacity: 0.4,
//         }}
//       />

//       {/* ─── HEADER ─────────────────────────────────────── */}
//       <header
//         ref={headerRef}
//         className="w-full"
//         style={{
//           position: "relative",
//           zIndex: 1,
//           padding: "80px 60px 40px",
//         //   maxWidth: 1200,
//           margin: "0 auto",
//         }}
//       >

//         <h2
//           className="anim-header Font_Q uppercase flex justify-center items-center"
//           style={{
//             // fontSize: "clamp(36px, 8vw, 100px)",
//             // fontWeight: 300,
//             // lineHeight: 0.92,
//             // margin: 0,
//             color:"#173e3d",
//           }}
          
//         >
//          Wedding Itinerary
//         </h2>

//         <div
//           className="anim-header"
//           style={{
//             marginTop: 32,
//             display: "flex",
//             alignItems: "center",
//             gap: 20,
//           }}
//         >
//           <p
//             className="Font_YV COLOR_TEXT_RED mx-auto"
//           >
//             Three Days of Celebration Tuscany, Italy
//           </p>
          
        
//         </div>
//       </header>

//       {/* Decorative full-width line
//       <div  className="w-full" style={{ padding: "0 60px", margin: "0 auto" }}>
//         <div
//           ref={lineRef}
//           style={{
//             height: 1,
//             backgroundcolor:"#173e3d",
//             opacity: 0.2,
//             transformOrigin: "left center",
//           }}
//         />
//       </div> */}

//       {/* ─── EVENTS ──────────────────────────────────────── */}
//       <main
//        className="w-full"
//         style={{
//           position: "relative",
//           zIndex: 1,
          
//           margin: "0 auto",
//           padding: "60px 60px 120px",
//         }}
//       >
//         {events.map((event, idx) => (
//           <EventCard
//             key={idx}
//             event={event}
//             idx={idx}
//             url={event.url}
//             isHovered={hoveredIdx === idx}
//             onHover={() => setHoveredIdx(idx)}
//             onLeave={() => setHoveredIdx(null)}
//             ref={(el) => (cardsRef.current[idx] = el)}
//           />
//         ))}
//       </main>
//     </div>
//   );
// }

// // ─── EVENT CARD ───────────────────────────────────────
// import { forwardRef } from "react";

// const EventCard = forwardRef(function EventCard({url ,event, idx, isHovered, onHover, onLeave }, ref) {
//   const isEven = idx % 2 === 0;

//   return (
//     <div className=""
//       ref={ref}
//       onMouseEnter={onHover}
//       onMouseLeave={onLeave}
//       style={{
//         position: "relative",
//         display: "grid",
//         gridTemplateColumns: isEven ? "1fr 2fr" : "2fr 1fr",
//         gap: "0 60px",
//         padding: "60px 0",
//         borderBottom: "1px solid rgba(197,61,46,0.12)",
//         transition: "background 0.5s ease",
//         cursor: "default",
//       }}
//     >
//       {/* Large ghost index number */}
//       <div
//         className="event-index Font_Q w-[20vw] h-full  overflow-hidden"
//         style={{
//           position: "absolute",
//           top: "50%",
//           [isEven ? "right" : "left"]: -20,
//           transform: "translateY(-50%)",
//           fontSize: "clamp(120px, 18vw, 220px)",
//           fontWeight: 300,
//           // color:"#173e3d",
//           opacity:1,
//           lineHeight: 1,
//           userSelect: "none",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       >
//         <img src={url} alt="img" className="w-full h-full object-center object-cover" />
//       </div>

//       {/* ── Left / Right column based on even/odd ── */}
//       {isEven ? (
//         <>
//           <DateBlock event={event} isHovered={isHovered} />
//           <ContentBlock event={event} isHovered={isHovered} />
//         </>
//       ) : (
//         <>
//           <ContentBlock event={event} isHovered={isHovered} alignRight />
//           <DateBlock event={event} isHovered={isHovered} alignRight />
//         </>
//       )}
//     </div>
//   );
// });

// function DateBlock({ event, isHovered, alignRight }) {
//   return (
//     <div
//       style={{
//         position: "relative",
//         zIndex: 1,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: alignRight ? "flex-end" : "flex-start",
//         padding: "20px 0",
//       }}
//     >
//       {/* Roman numeral */}
//       <span
//       className="Font_Q"
//         style={{
//         //   fontFamily: "'Cormorant Garamond', serif",
//           fontSize: 13,
//           fontStyle: "italic",
//           letterSpacing: "0.15em",
//           color:"#173e3d",
//           opacity: 0.5,
//           marginBottom: 12,
//           transition: "opacity 0.3s",
//           ...(isHovered ? { opacity: 0.9 } : {}),
//         }}
//       >
//         {event.label}
//       </span>

//       {/* Date */}
//       <div
//       className="Font_Q"
//         style={{
//         //   fontFamily: "'Cormorant Garamond', serif",
//           fontSize: "clamp(38px, 5vw, 58px)",
//           fontWeight: 300,
//           lineHeight: 1,
//           color:"#173e3d",
//           textAlign: alignRight ? "right" : "left",
//         }}
//       >
//         {event.date.split(" ").map((part, i) => (
//           <span key={i} style={{ display: "block" }}>
//             {part}
//           </span>
//         ))}
//       </div>

//       {/* Day of week */}
//       <span
//         style={{
//           fontFamily: "'Montserrat', sans-serif",
//           fontSize: 10,
//           letterSpacing: "0.35em",
//           textTransform: "uppercase",
//           color:"#173e3d",
//           opacity: 0.4,
//           marginTop: 10,
//           fontWeight: 400,
//         }}
//       >
//         {event.day}
//       </span>

//       {/* Hover underline */}
//       <div
//         style={{
//           marginTop: 16,
//           height: 1,
//           width: isHovered ? "100%" : "30%",
//           backgroundcolor:"#173e3d",
//           opacity: 0.3,
//           transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//           alignSelf: alignRight ? "flex-end" : "flex-start",
//         }}
//       />
//     </div>
//   );
// }

// function ContentBlock({ event, isHovered, alignRight }) {
//   return (
//     <div
//       style={{
//         position: "relative",
//         zIndex: 1,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: alignRight ? "flex-end" : "flex-start",
//         padding: "20px 0",
//         textAlign: alignRight ? "right" : "left",
//       }}
//     >
//       {/* Event title */}
//       <h1
//       className="Font_Q"
//         style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: "clamp(32px, 5vw, 60px)",
//           fontWeight: 300,
//         //   fontStyle: "italic",
//           letterSpacing: "-0.01em",
//           lineHeight: 1.05,
//           margin: "0 0 20px",
//           color:"#173e3d",
//           transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//           transform: isHovered ? "translateX(8px)" : "translateX(0)",
//         }}
//       >
//         {event.title}
//       </h1>

//       {/* Sub-events for Indian Wedding */}
//       {event.subEvents ? (
//         <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
//           {event.subEvents.map((sub, i) => (
//             <div
//               key={i}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 14,
//                 flexDirection: alignRight ? "row-reverse" : "row",
//               }}
//             >
//               <span
//               className="Font_Q"
//                 style={{
//                 //   fontFamily: "'Montserrat', sans-serif",
//                   fontSize: 16,
//                   letterSpacing: "0.2em",
//                   color:"#173e3d",
//                   // opacity: 0.5,
//                   fontWeight: 500,
//                 }}
//               >
//                 {sub.time}
//               </span>
//               <div
//                 style={{
//                   width: 3,
//                   height: 3,
//                   borderRadius: "50%",
//                   backgroundcolor:"#173e3d",
//                   // opacity: 0.4,
//                 }}
//               />
//               <span
//               className="Font_Q"
//                 style={{
//                 //   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: 18,
//                   // fontStyle: "italic",
//                   color:"#173e3d",
//                   // opacity: 0.85,
//                 }}
//               >
//                 {sub.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         /* Time */
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 14,
//             marginBottom: 20,
//             flexDirection: alignRight ? "row-reverse" : "row",
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               fontSize: 16,
//               letterSpacing: "0.25em",
//               color:"#173e3d",
//               // opacity: 0.6,
//               fontWeight: 400,
//             }}
//           >
//             {event.time}
//           </span>
          
//         </div>
//       )}

//       {/* Venue */}
//       <div className="Font_Q"
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 16,
//           padding: "8px 16px",
//           border: "1px solid rgba(197,61,46,0.9)",
//           backgroundColor: isHovered ? "rgba(197,61,46,0.05)" : "transparent",
//           transition: "background 0.4s ease, border-color 0.4s ease",
//           borderColor: isHovered ? "rgba(197,61,46,0.4)" : "rgba(197,61,46,0.2)",
//         }}
//       >
//         {/* Location pin */}
//         <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
//           <path
//             d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5 1.5 1.5 0 0 1 5 6.5z"
//             fill="#C53D2E"
//             fillOpacity="0.6"
//           />
//         </svg>
//         <span
//           style={{
//             // fontFamily: "'Montserrat', sans-serif",
//             fontSize: 14,
//             letterSpacing: "0.25em",
//             textTransform: "uppercase",
//             color:"#173e3d",
//             fontWeight: 500,
//           }}
//         >
//           {event.venue}
//         </span>
//       </div>

//       {/* Transfer note */}
//       <p className="Font_Q"
//         style={{
//           // fontFamily: "'Montserrat', sans-serif",
//           fontSize: 16,
//           letterSpacing: "0.05em",
//           color:"#173e3d",
//           opacity: 1,
//           margin: 0,
//           fontWeight: 300,
//           lineHeight: 1.7,
//           // maxWidth: 360,
//           // transition: "opacity 0.4s",
//           // ...(isHovered ? { opacity: 0.7 } : {}),
//         }}
//       >
//         {event.transfer}
//       </p>
//     </div>
//   );
// }




"use client";
import { useEffect, useRef, useState, forwardRef } from "react";

const events = [
  {
    date: "17 September",
    title: "White Wedding",
    time: "5:30 PM",
    venue: "Villa Corti",
    transfer: "Transfers to Villa Corti will begin at 4:30 PM.",
    accent: "White",
    index: "01",
    url: `/FinalImage/11.webp`,
  },
  {
    date: "18 September",
    title: "Cocktails & Canapés",
    time: "7:00 PM",
    venue: "Villa Palmieri",
    transfer: "Transfers to Villa Palmieri will begin at 6:00 PM.",
    accent: "Evening",
    index: "02",
    url: `/FinalImage/36.webp`,
  },
  {
    date: "19 September",
    title: "Indian Wedding",
    time: "3:00 PM – 5:00 PM",
    venue: "Villa Collazzi",
    transfer: "Transfers to Villa Collazzi will begin at 2:00 PM.",
    accent: "Indian",
    index: "03",
    subEvents: [
      { time: "3:00 PM", name: "Baraat Assembly" },
      { time: "5:00 PM", name: "Wedding Ceremony" },
    ],
    url: `/FinalImage/5.webp`,
  },
];

export default function ItineraryPage() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current.querySelectorAll(".anim-header"),
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        }

        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: i * 0.08,
            }
          );
        });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="Font_Q pt-[10vh] COLOR_BG_CREAM"
      style={{
        minHeight: "100vh",
        color: "#173e3d",
        overflow: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* ─── HEADER ─────────────────────────────────────── */}
      <header
        ref={headerRef}
        style={{
          position: "relative",
          zIndex: 1,
          padding: isMobile ? "40px 24px 24px" : "80px 60px 40px",
          margin: "0 auto",
        }}
      >
        <h2
          className="anim-header Font_Q uppercase flex justify-center items-center"
          style={{
            color: "#173e3d",
            // fontSize: isMobile ? "clamp(24px, 7vw, 36px)" : undefined,
            textAlign: "center",
          }}
        >
          Wedding Itinerary
        </h2>

        <div
          className="anim-header"
          style={{
            marginTop: isMobile ? 16 : 32,
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <p className="Font_YV COLOR_TEXT_RED mx-auto" style={{ textAlign: "center" }}>
            Three Days of Celebration · Tuscany, Italy
          </p>
        </div>
      </header>

      {/* ─── EVENTS ──────────────────────────────────────── */}
      <main
        style={{
          position: "relative ",
          zIndex: 1,
          margin: "0 auto",
          padding: isMobile ? "20px 0px 60px" : "60px 60px 120px",
        }}
      >
        {events.map((event, idx) => (
          <EventCard
            key={idx}
            event={event}
            idx={idx}
            url={event.url}
            isHovered={hoveredIdx === idx}
            isMobile={isMobile}
            onHover={() => setHoveredIdx(idx)}
            onLeave={() => setHoveredIdx(null)}
            ref={(el) => (cardsRef.current[idx] = el)}
          />
        ))}
      </main>

      {/* Responsive styles injected globally */}
      <style>{`
        @media (max-width: 767px) {
          .event-card-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            padding: 32px 24px !important;
          }
          .event-image-ghost {
            position: relative !important;
            top: unset !important;
            left: unset !important;
            right: unset !important;
            transform: none !important;
            width: 100% !important;
            height: 220px !important;
            margin-bottom: 24px !important;
            border-radius: 4px !important;
            overflow: hidden !important;
          }
          .event-image-ghost img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .date-block,
          .content-block {
            align-items: flex-center !important;
            text-align: center !important;
            padding: 8px 0 !important;
          }
          .date-block {
            flex-direction: row !important;
            align-items: center !important;
            // gap: 16px !important;
            flex-wrap: wrap !important;
          }
          .date-day-part {
            display: inline !important;
            margin-right: 6px !important;
          }
          .date-font {
            font-size: clamp(28px, 8vw, 40px) !important;
            line-height: 1.1 !important;
          }
          .title-font {
            font-size: clamp(26px, 7vw, 40px) !important;
          }
          .hover-underline {
            display: none !important;
          }
          .venue-badge {
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── EVENT CARD ───────────────────────────────────────
const EventCard = forwardRef(function EventCard(
  { url, event, idx, isHovered, onHover, onLeave, isMobile },
  ref
) {
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className="event-card-grid"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isEven ? "1fr 2fr" : "2fr 1fr",
        gap: isMobile ? "0" : "0 60px",
        padding: isMobile ? "32px 24px" : "60px 0",
        borderBottom: "1px solid rgba(197,61,46,0.12)",
        transition: "background 0.5s ease",
        cursor: "default",
      }}
    >
      {/* Image — absolutely positioned on desktop, stacked on mobile */}
      {isMobile ? (
        <div
          className="event-image-ghost "
          style={{
            width: "100%",
            height: 220,
            marginBottom: 24,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <img
            src={url}
            alt={event.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <div
          className="event-image-ghost"
          style={{
            position: "absolute",
            top: "50%",
            [isEven ? "right" : "left"]: -20,
            transform: "translateY(-50%)",
            width: "20vw",
            height: "100%",
            overflow: "hidden",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src={url}
            alt={event.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}

      {/* Columns */}
      {isMobile ? (
        <>
          <DateBlock event={event} isHovered={isHovered} isMobile={isMobile} />
          <ContentBlock event={event} isHovered={isHovered} isMobile={isMobile} />
        </>
      ) : isEven ? (
        <>
          <DateBlock event={event} isHovered={isHovered} isMobile={isMobile} />
          <ContentBlock event={event} isHovered={isHovered} isMobile={isMobile} />
        </>
      ) : (
        <>
          <ContentBlock event={event} isHovered={isHovered} alignRight isMobile={isMobile} />
          <DateBlock event={event} isHovered={isHovered} alignRight isMobile={isMobile} />
        </>
      )}
    </div>
  );
});

function DateBlock({ event, isHovered, alignRight, isMobile }) {
  return (
    <div
      className="date-block  max-sm:justify-start sm:justify-center  "
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: isMobile ? "flex-start" : alignRight ? "flex-end" : "flex-start",
        padding: isMobile ? "8px 0" : "20px 0",
      }}
    >
      <span
        className="Font_Q "
        style={{
          // fontSize: 13,
          // fontStyle: "italic",
          letterSpacing: "0.15em",
          color: "#173e3d",
          opacity: isHovered ? 0.9 : 0.5,
          marginBottom: 12,
          transition: "opacity 0.3s",
        }}
      >
        {event.label}
      </span>

      <div
        className="Font_Q date-font "
        style={{
          fontSize: "clamp(38px, 5vw, 58px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "#173e3d",
          textAlign: isMobile ? "left" : alignRight ? "right" : "left",
        }}
      >
        {event.date.split(" ").map((part, i) => (
          <span key={i} className="date-day-part" style={{ display: "block" }}>
            {part}
          </span>
        ))}
      </div>

      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#173e3d",
          opacity: 0.4,
          marginTop: 10,
          fontWeight: 400,
        }}
      >
        {event.day}
      </span>

      {/* <div
        className="hover-underline"
        style={{
          marginTop: 16,
          height: 1,
          width: isHovered ? "100%" : "30%",
          backgroundColor: "#173e3d",
          opacity: 0.3,
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          alignSelf: alignRight ? "flex-end" : "flex-start",
        }}
      /> */}
    </div>
  );
}

function ContentBlock({ event, isHovered, alignRight, isMobile }) {
  return (
    <div
      className="content-block max-sm: max-sm:text-center "
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isMobile ? "flex-start" : alignRight ? "flex-end" : "flex-start",
        padding: isMobile ? "8px 0" : "20px 0",
        textAlign: isMobile ? "left" : alignRight ? "right" : "left",
      }}
    >
      {/* Event title */}
      <h1
        className="Font_Q title-font  "
        style={{
          fontSize: "clamp(32px, 5vw, 60px)",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          lineHeight: 1.05,
          margin: "0 0 20px",
          color: "#173e3d",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered && !isMobile ? "translateX(8px)" : "translateX(0)",
        }}
      >
        {event.title}
      </h1>

      {/* Sub-events for Indian Wedding */}
      {event.subEvents ? (
        <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {event.subEvents.map((sub, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexDirection: !isMobile && alignRight ? "row-reverse" : "row",
                flexWrap: "wrap",
              }}
            >
              <span
                className="Font_Q"
                style={{
                  // fontSize: isMobile ? 14 : 16,
                  letterSpacing: "0.2em",
                  color: "#173e3d",
                  fontWeight: 500,
                }}
              >
                {sub.time}
              </span>
              <div
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  backgroundColor: "#173e3d",
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              />
              <span
                className="Font_Q"
                style={{
                  fontSize: isMobile ? 16 : 18,
                  color: "#173e3d",
                }}
              >
                {sub.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
            flexDirection: !isMobile && alignRight ? "row-reverse" : "row",
          }}
        >
          <span
            style={{
              // fontFamily: "'Montserrat', sans-serif",
              // fontSize: isMobile ? 14 : 16,
              letterSpacing: "0.25em",
              color: "#173e3d",
              fontWeight: 400,
            }}
          >
            {event.time}
          </span>
        </div>
      )}

      {/* Venue */}
      <div
        className="Font_Q venue-badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
          padding: isMobile ? "6px 12px" : "8px 16px",
          border: "1px solid rgba(197,61,46,0.9)",
          backgroundColor: isHovered ? "rgba(197,61,46,0.05)" : "transparent",
          transition: "background 0.4s ease, border-color 0.4s ease",
          borderColor: isHovered ? "rgba(197,61,46,0.4)" : "rgba(197,61,46,0.2)",
          alignSelf: isMobile ? "flex-start" : alignRight ? "flex-end" : "flex-start",
        }}
      >
        <svg width="10" height="13" viewBox="0 0 10 13" fill="none" style={{ flexShrink: 0 }}>
          <path
            d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5 1.5 1.5 0 0 1 5 6.5z"
            fill="#C53D2E"
            fillOpacity="0.6"
          />
        </svg>
        <span
          style={{
            // fontSize: isMobile ? 12 : 14,
            // letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#173e3d",
            fontWeight: 500,
          }}
        >
          {event.venue}
        </span>
      </div>

      {/* Transfer note */}
      <p
        className="Font_Q"
        style={{
          // fontSize: isMobile ? 14 : 16,
          // letterSpacing: "0.05em",
          color: "#173e3d",
          opacity: 1,
          margin: 0,
          fontWeight: 300,
          lineHeight: 1.7,
        }}
      >
        {event.transfer}
      </p>
    </div>
  );
}