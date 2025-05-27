import React from "react";
import { Link } from "react-router-dom";
import { companies } from "../../constants/constItems";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <main className="flex flex-col xl:gap-[70px] md:gap-[50px] sm:gap-[70px] " id="about">
      <section className=" flex xl:flex-row flex-col justify-between">
        <div className=" w-full h-[93vh] md:h-[90vh]   flex flex-col justify-between">
          <div className="flex xl:flex-row flex-col gap-8 xl:gap-0 justify-between">
            <div className="flex flex-col gap-4 font-semibold text-4xl md:text-6xl xl:text-5xl leading-[100%] w-full xl:w-[30vw]">
              <h1>Navigating the</h1>
              <h1>digital landscape </h1>
              <h1>for success</h1>
            </div>
            <img src="/Illustration.png" alt="Illustration image" />
          </div>

          <div className="absolute bottom-[-16vh] mx-[15px] md:bottom-[-4vh] xl:bottom-[-3vh] flex flex-col sm:gap-5 md:gap-10 xl:gap-5">
            <p className="leading-7 w-full xl:w-[30vw] xl:text-lg sm:text-lg md:text-2xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              to=""
              className="bg-black text-white w-full xl:w-[264px] py-5 mx-[-15px] text-center rounded-[14px]">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between ">
        <div className="md:hidden flex flex-col gap-3 mt-20">
          <Marquee speed={35} gradient={false}>
            <div className="flex">
              {companies.slice(0, 3).map((imgPath, index) => {
                return (
                  <img
                    key={index}
                    src={`/companyImg/${imgPath}`}
                    className="px-4"
                    alt={imgPath}
                  />
                );
              })}
            </div>
          </Marquee>
          <Marquee speed={35} gradient={false} direction="right">
            <div className="flex">
              {companies.slice(3, 7).map((imgPath, index) => {
                return (
                  <img
                    key={index}
                    src={`/companyImg/${imgPath}`}
                    className="px-4"
                    alt={imgPath}
                  />
                );
              })}
            </div>
          </Marquee>
        </div>

        <div>
          <Marquee speed={35} gradient={false}>
            <div className="md:flex hidden xl:hidden">
              {companies.map((imgPath, index) => {
                return (
                  <img
                    key={index}
                    src={`/companyImg/${imgPath}`}
                    className="px-4"
                    alt={imgPath}
                  />
                );
              })}
            </div>
          </Marquee>
        </div>

        <div className="hidden xl:flex items-center justify-between w-full">
          {companies.map((imgPath, index) => {
            return <img key={index} src={`/companyImg/${imgPath}`} alt="" />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
