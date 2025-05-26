import React from "react";
import { Link } from "react-router-dom";
import { companies } from "../../constants/constItems";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <main className="flex flex-col gap-[70px]" id="about">
      <div className=" flex md:flex-row flex-col justify-between">
        <section className=" w-full md:w-[30vw] h-[280px] md:h-[380px] flex flex-col justify-between">
          <div className="flex flex-col gap-4 font-semibold text-4xl md:text-5xl leading-[100%]">
            <h1>Navigating the</h1>
            <h1>digital landscape </h1>
            <h1>for success</h1>
          </div>

          <p className="leading-7">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
         
        </section>

        <section>
          <img src="/Illustration.png" alt="Illustration image" />
           <Link
            to=""
            className="bg-black text-white w-[264px] py-5 text-center rounded-[14px] absolute left-[60px] bottom-[-13vh]"
          >
            Book a consultation
          </Link>
        </section>
      </div>

      <div className="flex items-center justify-between ">
        <div className="md:hidden flex flex-col gap-3">
          <Marquee speed={35} gradient={false}>
            <div className="flex">
              {companies.slice(0,3).map((imgPath) => {
                return (
                  <img src={`/companyImg/${imgPath}`} className="px-4" alt="" />
                );
              })}
            </div>
          </Marquee>
          <Marquee speed={35} gradient={false} direction="right">
            <div className="flex">
              {companies.slice(3,7).map((imgPath) => {
                return (
                  <img src={`/companyImg/${imgPath}`} className="px-4" alt="" />
                );
              })}
            </div>
          </Marquee>
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          {companies.map((imgPath) => {
            return <img src={`/companyImg/${imgPath}`} alt="" />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
