import { useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Slider = () => {
  const items = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Marketing Director at XYZ Corp",
      comment:
        "John is a visionary leader with a decade of experience driving market growth. He consistently delivers innovative marketing strategies that significantly boost brand awareness and revenue.",
    },
    {
      id: 2,
      name: "Alice Johnson",
      specialty: "Senior Product Manager at ABC Inc",
      comment:
        "Alice excels at aligning product development with customer needs, managing cross-functional teams efficiently, and ensuring timely delivery of high-quality products that exceed market expectations.",
    },
    {
      id: 3,
      name: "Robert Lee",
      specialty: "UX Designer at Creative Solutions",
      comment:
        "Robert crafts intuitive designs that enhance user engagement. His expertise in user research and interaction design leads to seamless digital experiences that delight customers.",
    },
    {
      id: 4,
      name: "Maria Garcia",
      specialty: "Data Analyst at DataCorp",
      comment:
        "Maria transforms complex data into actionable insights for the team. Her analytical skills enable data-driven decision making that drives company growth and operational efficiency.",
    },
    {
      id: 5,
      name: "Maria Garcia",
      specialty: "Data Analyst at DataCorp",
      comment:
        "Maria transforms complex data into actionable insights for the team. Her analytical skills enable data-driven decision making that drives company growth and operational efficiency.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  my-16 ">
      <div className="overflow-hidden">
        <div
          className="flex gap-8 justify-center transition-transform duration-300 w-full"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex flex-col gap-8 text-xl">
              <div className="relative w-[80vw] h-[45vh] md:h-[20vh] md:w-[60vw]  xl:w-[40vw] xl:h-[50vh] p-5 md:p-10 bg-[#191A23] rounded-[45px] shadow-xl flex items-center justify-center border border-[#B9FF66]">
                <p className="text-white">{item.comment}</p>

                {/* Böyük yaşıl üçbucaq */}
                <div
                  className="
                            absolute bottom-[-20px] 
                            xl:left-[5vw]
                            left-[10vw] 
                            border-l-[17px] xl:border-l-[25px] 
                            border-r-[20px] xl:border-r-[20px] 
                            border-t-[18px] xl:border-t-[20px] 
                            border-l-transparent border-r-transparent border-t-[#B9FF66]"
                ></div>

                <div
                  className="
                           absolute bottom-[-13px] 
                           xl:left-[5vw]
                           left-[10vw] 
                           z-50 
                           border-l-[16px] xl:border-l-[25px] 
                           border-r-[18px] xl:border-r-[20px] 
                           border-t-[18px] xl:border-t-[19px] 
                           border-l-transparent border-r-transparent border-t-[#191A23]
  "
                ></div>
              </div>

              <div className="pl-10">
                <p className="text-[#B9FF66]">{item.name}</p>
                <p className="text-white text-sm">{item.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex h-[12vh] w-full md:h-[15vh] xl:h-[26vh] xl:w-[50vw] items-end  justify-around">
          <button
            onClick={prev}
            className="cursor-pointer  -translate-y-1/2 z-10 text-3xl font-bold"
            aria-label="Previous"
          >
            <LuArrowLeft className="text-white" />
          </button>
          <div className=" flex gap-3 mb-5">
            {[...Array(currentIndex)].map((_, i) => (
              <img
                key={i}
                className=" w-[15px] h-[15px]"
                src="/icons/slider-icon.svg"
                alt={`icon-${i}`}
              />
            ))}

            {[...Array(items.length - currentIndex)].map((_, i) => (
              <img
                key={i}
                className="size-[15px]"
                src="/icons/slider-icon-white.svg"
                alt="icon"
              />
            ))}
          </div>
          <button
            onClick={next}
            className="cursor-pointer -translate-y-1/2 z-10 text-3xl font-bold"
            aria-label="Next"
          >
            <LuArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
