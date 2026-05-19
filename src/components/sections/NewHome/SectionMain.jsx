import React from "react";

const SectionMain = () => {
  return (
    <div className="w-full min-h-screen bgFirst  relative pt-10">
      <div className="w-full h-fit flex justify-center items-center pt-[9vh] sm:pt-[4vh]">
        <h1 className="Font_Q max-sm:leading-[13vw] max-sm:text-[12vw] max-sm:px-5 text-[13vw] COLOR_TEXT_RED">
          MISHA & DYLAN
        </h1>
      </div>

      <div className="w-[18%] max-sm:w-[97%] max-sm:mx-auto aspect-5/7 overflow-hidden sm:absolute sm:top-[60%] sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2">
        <img
          src={`/FinalImage/11.webp`}
          className="w-full h-full object-cover object-center"
          alt="IMG"
        />
      </div>

      <div className="w-full max-sm:hidden h-fit flex justify-end items-center mt-[40vh]">
        <h1 className="Font_Q text-[14vw] leading-[14vw] text-[#173e3d]/5">
          Wedding
        </h1>
      </div>

      <div className=" sm:absolute sm:left-0 max-sm:pt-5 sm:bottom-[10%] w-full sm:w-[25%]  px-[20px] flex flex-col gap-10">
        <div className="w-[50%] max-sm:hidden aspect-square overflow-hidden">
          <img
            src={`/FinalImage/15.webp`}
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
