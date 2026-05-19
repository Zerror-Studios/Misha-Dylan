// "use client";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { RiMenu4Fill } from "react-icons/ri";
// import { RiMenu3Line } from "react-icons/ri";
// import { usePathname } from "next/navigation";
// import { navigate } from "next/dist/client/components/segment-cache/navigation";

// gsap.registerPlugin(ScrollTrigger);

// const NavBar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     if (!navRef.current) return;

//     let lastScroll = 0;

//     const trigger = ScrollTrigger.create({
//       start: 0,
//       end: "max",
//       onUpdate: (self) => {
//         const currentScroll = self.scroll();

//         if (currentScroll > lastScroll && currentScroll > 100) {
//           // Scroll DOWN → hide navbar
//           gsap.to(navRef.current, {
//             y: "-300%",
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         } else {
//           // Scroll UP → show navbar
//           gsap.to(navRef.current, {
//             y: "0%",
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         }

//         lastScroll = currentScroll;
//       },
//     });

//     return () => {
//       trigger.kill();
//     };
//   }, []);

//   const [isNavOpen, SetIsNavOpen] = useState(false);

//   const clickCheck = () => {
//     if (isNavOpen == false) {
//       const NT = gsap.timeline();
//       NT.to(
//         ".MOBILENAV",
//         {
//           left: "0%",
//           duration: 0.2,
//           ease: "none",
//           // onComplete: () => SetIsNavOpen(true)
//         },
//         "a11",
//       );
//       NT.to(
//         ".smNavItem",
//         {
//           opacity: 1,
//           stagger: {
//             each: 0.09,
//             ease: "none",
//           },
//           duration: 0.2,
//           ease: "none",
//           // onComplete: () => SetIsNavOpen(true)
//         },
//         "a11",
//       );
//       SetIsNavOpen(true);
//     } else {
//       const NTB = gsap.timeline();
//       NTB.to(
//         ".MOBILENAV",
//         {
//           left: "100%",
//           duration: 0.2,
//           ease: "none",
//           // onComplete: () => SetIsNavOpen(false)
//         },
//         "a1a",
//       );
//       NTB.to(
//         ".smNavItem",
//         {
//           opacity: 0,
//           stagger: {
//             each: 0.09,
//             ease: "none",
//           },
//           duration: 0.2,
//           ease: "none",
//           // onComplete: () =>
//         },
//         "a1a",
//       );
//       SetIsNavOpen(false);
//     }
//   };

//   const pathname = usePathname();
//   console.log(pathname);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <div
//       ref={navRef}
//       className="w-full h-[46px]  flex justify-between fixed top-0 pt-10 left-0 gap-10 items-center z-100 px-5"
//     >
//       {/* Left */}
//       <div className="w-full h-full RVSPBTN items-center max-lg:hidden flex justify-between uppercase text-[12px] COLOR_TEXT_RED ">
//         <div className="w-fit h-[40px] RVSPBTN  ">
//           <Link href={`/`}>
//             <img
//               src={`/icon/LOGO.svg`}
//               alt="Logo"
//               className="h-full object-cover object-center"
//             />
//           </Link>
//         </div>
//         <div className="w-fit h-fit flex justify-center items-center ml-auto gap-[2vw]">
//           <Link href={`/`}>
//             <div
//               className={`w-fit text-[14px] ${pathname === "/" && " border-b border-[#173e3d]"} h-fit flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>{" "}
//               The wedding
//             </div>
//           </Link>
//           <Link href={`/itinerary`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/itinerary" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               Itinerary{" "}
//             </div>
//           </Link>

//           <Link href={`/explore`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/explore" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               Explore Florence{" "}
//             </div>
//           </Link>
//           <Link href={`/travel-acmo`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/travel-acmo" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               Travel{" "}
//             </div>
//           </Link>

//           <Link href={`/salon-services`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/salon-services" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               Salon Services
//             </div>
//           </Link>
//           <Link href={`/travel-tips`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/travel-tips" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               Travel Tips{" "}
//             </div>
//           </Link>
//           <Link href={`/faq`}>
//             <div
//               className={`w-fit h-fit text-[14px] ${pathname === "/faq" && " border-b border-[#173e3d]"}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}
//             >
//               {" "}
//               <div className=" absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED"></div>
//               FAQs
//             </div>
//           </Link>

//           {/* BTN */}

//           <Link
//             target="_blank"
//             rel="noopener noreferrer"
//             href={`https://sonalandkush.rsvpify.com`}
//           >
//             <div className="w-fit h-[46px] RVSPBTN max-md:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[12px] text-white COLOR_BG_RED opacity-80 group ">
//               <div className="w-fit ">
//                 RSVP HERE
//                 <div className="w-[0px] group-hover:w-full transition-all duration-150 ease-in h-[1px] bg-[white]"></div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div
//         onClick={clickCheck}
//         htmlFor="check"
//         className=" absolute top-1 right-8 lg:hidden  "
//       >
//         {isNavOpen == false ? (
//           <>
//             <RiMenu4Fill className="text-[2rem]  text-[#952607]" />
//           </>
//         ) : (
//           <>
//             <RiMenu3Line className="text-[2rem] text-[#952607] " />
//           </>
//         )}
//       </div>

     
//     </div>
//   );
// };

// export default NavBar;


"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiMenu4Fill, RiMenu3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const pathname = usePathname();

  const [isNavOpen, SetIsNavOpen] = useState(false);

  // NAVBAR HIDE / SHOW
  useEffect(() => {
    if (!navRef.current) return;

    let lastScroll = 0;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(navRef.current, {
            y: "-300%",
            duration: 0.4,
            ease: "power3.out",
          });
        } else {
          gsap.to(navRef.current, {
            y: "0%",
            duration: 0.4,
            ease: "power3.out",
          });
        }

        lastScroll = currentScroll;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // MOBILE MENU
  const clickCheck = () => {
    if (!isNavOpen) {
      const tl = gsap.timeline();

      tl.to(".MOBILENAV", {
        right: "0%",
        duration: 0.35,
        ease: "power3.out",
      });

      tl.to(
        ".smNavItem",
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.2"
      );

      SetIsNavOpen(true);
    } else {
      const tl = gsap.timeline();

      tl.to(".smNavItem", {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.15,
      });

      tl.to(
        ".MOBILENAV",
        {
          right: "-100%",
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.05"
      );

      SetIsNavOpen(false);
    }
  };

  const closeMenu = () => {
    if (isNavOpen) clickCheck();
  };

  const navLinks = [
    { name: "The Wedding", path: "/" },
    { name: "Itinerary", path: "/itinerary" },
    { name: "Explore Florence", path: "/explore" },
    { name: "Travel", path: "/travel-acmo" },
    { name: "Salon Services", path: "/salon-services" },
    { name: "Travel Tips", path: "/travel-tips" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <div
        ref={navRef}
        className="w-full h-[80px] fixed top-0 left-0 z-[999] px-5 lg:px-8 flex items-center justify-between"
      >
        {/* LOGO */}
        <Link href={`/`} className="w-fit h-[40px] z-[1000]">
          <img
            src={`/icon/LOGO.svg`}
            alt="Logo"
            className="h-full object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-[2vw]">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path}>
              <div
                className={`relative text-[16px] Font_YV text-[#173e3d] uppercase cursor-pointer group ${
                  pathname === item.path
                    ? "border-b border-[#173e3d]"
                    : ""
                }`}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#173e3d] group-hover:w-full duration-300"></div>

                {item.name}
              </div>
            </Link>
          ))}

          {/* RSVP BUTTON */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={``}
          >
            <div className="h-[46px] px-5 text-[16px] text-white Font_YV bg-[#173e3d] flex items-center justify-center cursor-pointer uppercase tracking-wide hover:scale-[0.98] duration-300">
              RSVP HERE
            </div>
          </Link>
        </div>

        {/* MOBILE MENU BTN */}
        <div
          onClick={clickCheck}
          className="lg:hidden z-[1001] cursor-pointer"
        >
          {isNavOpen ? (
            <RiMenu3Line className="text-[2rem] text-[#952607]" />
          ) : (
            <RiMenu4Fill className="text-[2rem] text-[#952607]" />
          )}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="MOBILENAV fixed top-0 right-[-100%] w-full sm:w-[80%] h-screen bg-[#f8f5f1] z-[998] flex flex-col px-8 pt-[120px] pb-10">
        {/* LINKS */}
        <div className="flex flex-col gap-6">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path} onClick={closeMenu}>
              <div
                className={`smNavItem opacity-0 translate-y-[20px] text-[1.3rem] uppercase tracking-wide ${
                  pathname === item.path
                    ? "text-[#952607]"
                    : "text-[#173e3d]"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>

        {/* RSVP BTN */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={``}
          onClick={closeMenu}
          className="mt-10"
        >
          <div className="smNavItem opacity-0 translate-y-[20px] w-full h-[52px] bg-[#173e3d] text-white flex justify-center items-center uppercase tracking-wide">
            RSVP HERE
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;

