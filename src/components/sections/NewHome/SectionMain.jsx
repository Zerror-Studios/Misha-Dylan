import React from "react";

const SectionMain = () => {
  return (
    <div className="w-full min-h-screen bgFirst  relative pt-10">
      <div className="w-full h-fit flex justify-center items-center pt-[9vh] sm:pt-[4vh]">
        <h1 className="Font_Q max-sm:leading-[13vw] max-sm:text-[12vw] max-sm:px-5 text-[13vw] uppercase COLOR_TEXT_RED">
          Dylan & Misha 
        </h1>
      </div>
      {/* 
      <div className="w-[18%] max-sm:w-[97%] max-sm:border-[4vw] sm:border-[2vw] border-[#F9DE85] max-sm:mx-auto aspect-5/7 overflow-hidden sm:absolute sm:top-[60%] sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2">
        <img
          src={`/FinalImage/11.webp`}
          className="w-full h-full object-cover object-center"
          alt="IMG"
        />
      </div> */}

      <div className="w-[18%] max-sm:w-[100%] sm:absolute  sm:top-[70%]   sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        {/* Main Card */}
        <div className="relative w-full aspect-[5/7]   p-[1rem] overflow-hidden ">
         

          {/* Oval Image */}
         
            <img
              src="/FinalImage/h3.webp"
              alt="IMG"
              className="w-full h-full object-cover"
            />

            
         

         
        </div>
      </div>

      {/* <div className="w-full max-sm:hidden h-fit flex justify-end items-center mt-[40vh]">
        <h1 className="SEFONT text-[14vw] font-semibold leading-[14vw] text-[#173e3d]/5">
          Wedding
        </h1>
      </div> */}

      <div className=" sm:absolute sm:left-0 max-sm:pt-5 sm:bottom-[10%] w-full sm:w-[25%]  px-[20px] flex flex-col gap-10">
        <div className="w-[50%] max-sm:hidden aspect-square overflow-hidden max-sm:border-[2vw] sm:border-[0.5vw] border-[#F9DE85]">
          <img
            src={`/FinalImage/h2.webp`}
            className="w-full h-full object-cover object-center"
            alt="IMG"
          />
        </div>

        <span className="text-justify Font_YV text-[1.1rem] max-sm:py-10 COLOR_TEXT_RED leading-[1.2rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero enim
          delectus magni aliquid eos, qui suscipit eum, est dolorum repellat
          ratione sapiente commodi dolores facilis officiis asperiores? Harum,
          tempore dolores!
        </span>
      </div>
    </div>
  );
};

export default SectionMain;
