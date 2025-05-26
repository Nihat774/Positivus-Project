import { IoArrowForward } from "react-icons/io5";

function CaseStudies() {
  const studiesCart = [
    {
      id: 1,
      path: "",
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      path: "",
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      path: "",
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];
  return (
    <section className="flex flex-col gap-5 md:gap-20" id="use-cases">
      <div className="flex md:flex-row flex-col gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Case Studies
        </p>
        <p className="md:text-start text-center w-full md:w-[38vw]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="hidden md:flex bg-[#191A23] rounded-[45px] text-white md:h-[326px] items-center justify-between px-[60px]">
        {studiesCart.map((item) => {
          return (
            <>
              <div key={item.id} className="w-[286px] flex flex-col gap-4">
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
            </>
          );
        })}
      </div>

      <div className="flex gap-5 md:hidden w-full overflow-x-scroll">
        {studiesCart.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="w-[85%] flex flex-col gap-3 bg-[#191A23] rounded-[45px] text-white p-10 "
              >
                <p className="w-[60vw]">{item.text}</p>

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
