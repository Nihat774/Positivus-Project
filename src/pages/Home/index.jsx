import React from "react";
import { Link } from "react-router-dom";
import { companies } from "../../constants/constItems";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <main className="flex flex-col gap-[70px] " id="about">
      <div className=" flex md:flex-row flex-col justify-between">
        <section className=" w-full h-[93vh] md:h-[470px]  flex flex-col justify-between">
          <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between">
            <div className="flex flex-col gap-4 font-semibold text-4xl md:text-5xl leading-[100%] w-full md:w-[30vw]">
              <h1>Navigating the</h1>
              <h1>digital landscape </h1>
              <h1>for success</h1>
            </div>
            <img src="/Illustration.png" alt="Illustration image" />
          </div>

          <div className="absolute bottom-[-16vh] px-[15px] md:bottom-[-3vh] flex flex-col gap-5">
            <p className="leading-7 w-full md:w-[30vw]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              to=""
              className="bg-black text-white w-full md:w-[264px] py-5 text-center rounded-[14px]">
              Book a consultation
            </Link>
          </div>
        </section>
      </div>

      <div className="flex items-center justify-between ">
        <div className="md:hidden flex flex-col gap-3">
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

        <div className="hidden md:flex items-center justify-between w-full">
          {companies.map((imgPath, index) => {
            return <img key={index} src={`/companyImg/${imgPath}`} alt="" />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
