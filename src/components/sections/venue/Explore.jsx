"use client";
import React, { useRef, useState, useEffect } from "react";
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
    layout: "left",
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
      {
        src: "/FinalImage/exploreFlorence/c1.jpg",
        alt: "Piazzale Michelangelo",
      },
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
      {
        src: "/FinalImage/exploreFlorence/d2.jpg",
        alt: "Basilica of Santa Croce",
      },
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
      {
        src: "/FinalImage/exploreFlorence/f2.jpg",
        alt: "Tuscan Cooking Class",
      },
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

const CATEGORIES = [
  "Places to Visit",
  "Tours & Experiences",
  "Culinary Guide",
  "Shopping",
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Explore = () => {
  const containerRef = useRef();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || containerRef.current?.scrollTop || 0;
      setShowScrollTop(scrolled > 500);
    };

    window.addEventListener("scroll", handleScroll);
    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log('click')
    window.scrollTo({ top: 0, behavior: "smooth" });
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(
    () => {
      // Hero title animation
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
        },
      );

      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 },
      );

      gsap.fromTo(
        ".hero-pills",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 },
      );

      // Hero images parallax — only on non-touch devices
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".hero-img-1", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
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
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
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
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
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
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
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
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
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
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
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
          scrollTrigger: {
            trigger: ".tip-panel",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    items: SECTIONS.filter((s) => s.tag === cat),
  }));

  let globalIndex = 0;

  return (
    <>
      <div
        ref={containerRef}
        className="bg-[#CFDCE2] min-h-screen w-full overflow-x-hidden"
      >
        <HeroSection />

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

        <TipPanel />
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#C53D2E] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="hero-section w-full min-h-screen relative flex flex-col justify-center pb-16 md:pb-30 overflow-hidden">
    {/* Background image */}
    <div className="hero-img-1 absolute top-0 right-0 w-full h-full overflow-hidden z-0">
      <img
        src="/FinalImage/27.webp"
        alt="Florence"
        className="w-full h-full object-cover object-[50%_48%] scale-[1.08]"
      />
    </div>

    {/* Overlay for readability on mobile */}
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />

    {/* Content */}
    <div className="relative z-20 mx-auto flex flex-col justify-center items-center px-6 md:px-0 text-center w-full">
      <div className="overflow-hidden mb-1">
        <h2 className="hero-title-word Font_Q COLOR_TEXT_RED uppercase  leading-tight">
          Explore Florence
        </h2>
      </div>

      <div className="hero-sub flex items-start gap-12 mt-4 md:mt-5 max-w-[90vw] md:max-w-[500px]">
        <div className="flex flex-col gap-3">
          <p className="COLOR_TEXT_RED Font_Q text-center leading-relaxed text-[14px] md:text-base">
            Florence is a city of Renaissance art, beautiful architecture,
            charming streets, and unforgettable food. If you have some time
            between celebrations, here are a few of our favourite
            recommendations.
          </p>
          <p className="COLOR_TEXT_RED Font_Q text-center text-[12px] md:text-sm">
            All travel times are approximate from Florence's historic centre
            (Duomo area).
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CATEGORY GROUP ───────────────────────────────────────────────────────────

const CategoryGroup = ({ category, items, startIndex }) => (
  <div className="w-full">
    {/* Category divider */}
    <div className="px-6 md:px-[8vw] py-10 md:py-16 flex items-center gap-4 md:gap-6">
      <div
        className="cat-line h-px bg-[#C53D2E] opacity-25 flex-1 origin-left"
        style={{ transformOrigin: "left" }}
      />
      <p className="tracking-[0.3em] md:tracking-[0.5em] uppercase Font_Q COLOR_TEXT_RED shrink-0 text-[11px] md:text-sm">
        {category}
      </p>
      <div
        className="cat-line h-px bg-[#C53D2E] opacity-25 flex-1 origin-right"
        style={{ transformOrigin: "right" }}
      />
    </div>

    {items.map((section, i) => (
      <SectionBlock key={i} section={section} index={startIndex + i} />
    ))}
  </div>
);

// ─── SECTION BLOCK ────────────────────────────────────────────────────────────

const SectionBlock = ({ section, index }) => {
  const hasImages = section.images && section.images.length > 0;
  const isLeft = section.layout === "left";
  const num = String(index + 1).padStart(2, "0");

  return (
    <section className="w-full px-6 md:px-[6vw] py-12 md:py-24 relative">
      {/* Abstract large number — hidden on small screens */}
      <div
        className={`section-number hidden md:block absolute top-8 ${isLeft ? "right-[6vw]" : "left-[6vw]"} SEFONT COLOR_TEXT_RED leading-none select-none pointer-events-none`}
        style={{
          opacity: 0.04,
          fontSize: "clamp(80px, 12vw, 160px)",
        }}
      >
        {num}
      </div>

      <div
        className={`
          relative z-10 flex flex-col gap-8 md:gap-20 items-center
          ${
            hasImages
              ? isLeft
                ? "md:flex-row"
                : "md:flex-row-reverse"
              : "md:flex-row"
          }
        `}
      >
        {/* IMAGES COLUMN */}
        {hasImages && (
          <div className="w-full md:w-[52%] flex gap-3 md:gap-4 shrink-0">
            {section.images[0] && (
              <div
                className="img-reveal flex-1 overflow-hidden"
                style={{ clipPath: "inset(100% 0% 0% 0%)" }}
              >
                {/* Taller on mobile for better visual impact */}
                <div className="aspect-[2/3] md:aspect-[3/4] max-sm:border-[0.5vw] sm:border-[0.5vw] border-[#F89A8E] w-full overflow-hidden">
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
                style={{
                  clipPath: "inset(100% 0% 0% 0%)",
                  marginBottom: isLeft ? "0" : "4vh",
                }}
              >
                <div
                  className="aspect-[2/3] md:aspect-[3/4] max-sm:border-[0.5vw] sm:border-[0.5vw] border-[#F89A8E] w-full overflow-hidden"
                  style={{ marginTop: isLeft ? "4vh" : "0" }}
                >
                  <Image
                    src={section.images[1].src}
                    alt={section.images[1].alt}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TEXT COLUMN */}
        <div
          className={`
            w-full flex flex-col gap-4 md:gap-6
            ${hasImages ? "md:w-[44%]" : "md:max-w-[600px] md:mx-auto"}
          `}
        >
          {/* Title */}
          <div className="overflow-hidden">
            <h2
              className="section-title-reveal Font_Q COLOR_TEXT_RED uppercase leading-[0.92]"
              // style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              {section.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <span className="font-light">{line}</span> : line}
                  {i < section.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          {/* Body */}
          <p className="COLOR_TEXT_RED Font_YV leading-relaxed text-[14px] md:text-base max-w-full md:max-w-[380px]">
            {section.body}
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── TIP PANEL ───────────────────────────────────────────────────────────────

const TipPanel = () => (
  <section className="tip-panel w-full px-6 md:px-[8vw] py-20 md:py-32 relative overflow-hidden">
    <div className="tip-content relative z-10 max-w-[600px] mx-auto flex flex-col items-center text-center gap-5 md:gap-6">
      <p className="text-[10px] tracking-[0.5em] uppercase Font_YV COLOR_TEXT_RED opacity-60">
        Tip for Guests
      </p>

      <h2
        className="Font_Q COLOR_TEXT_RED  uppercase font-light leading-[0.92]"
        // style={{ fontSize: "clamp(32px, 6vw, 68px)" }}
      >
        Florence on
        <br />
        foot
      </h2>

      <p className="text-[14px] md:text-[15px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[90vw] md:max-w-[400px]">
        Florence is a compact and wonderfully walkable city. Many of its most
        famous landmarks, restaurants, and shops are within the historic centre
        and can easily be explored on foot.
      </p>
    </div>
  </section>
);

export default Explore;
