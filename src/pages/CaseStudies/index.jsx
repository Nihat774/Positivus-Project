import { IoArrowForward } from "react-icons/io5";
import { studiesCart } from "../../constants/constItems";
import React from "react";

function CaseStudies() {
 
  return (
    <section className="flex flex-col gap-5 xl:gap-20" id="use-cases">
      <div className="flex xl:flex-row flex-col gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Case Studies
        </p>
        <p className="xl:text-start text-center w-full xl:w-[38vw] sm:text-lg xl:text-lg md:text-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="hidden xl:flex bg-[#191A23] rounded-[45px] text-white  xl:h-[326px] items-center justify-between px-[60px]">
        {studiesCart.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div  className="w-[286px] flex flex-col gap-4">
                <p>{item.text}</p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#B9FF66]">Learn more</p>
                  <IoArrowForward className="rotate-[-25deg] text-xl text-[#B9FF66]" />
                </div>
              </div>
              <hr
                className={`${
                  item.id < 3 ? "block" : "hidden"
                } w-[2px] h-[26vh] bg-white`}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex gap-5 xl:hidden w-full overflow-x-scroll">
        {studiesCart.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="w-[85%] flex flex-col gap-3 bg-[#191A23] rounded-[45px] text-white md:p-14 xl:p-10 p-10 "
              >
                <p className="md:w-[40vw] w-[60vw] md:text-xl sm:text-lg xl:text-lg">{item.text}</p>

                <div className="flex gap-2 items-center">
                  <p className="text-[#B9FF66]">Learn more</p>
                  <IoArrowForward className="rotate-[-25deg] text-xl text-[#B9FF66]" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default CaseStudies;
