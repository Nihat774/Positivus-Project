import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { faq } from "../../constants/constItems";

function FAQPage() {
  const [openId, setOpenId] = useState(null);
  

  const handleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex flex-col gap-5 xl:gap-20" id="pricing">
      <div className="flex xl:flex-row flex-col gap-5 xl:gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Our Working Process
        </p>
        <p className="text-center xl:text-start w-full xl:w-[20vw] sm:text-lg md:text-xl xl:text-lg">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {faq.map((item) => {
          const isOpenItem = openId == item.id;

          return (
            <div
              key={item.id}
              className={`${
                isOpenItem ? "bg-[#B9FF66] rounded-[30px] pt-4" : "bg-[#F3F3F3] rounded-[60px] "
              } border flex flex-col  px-[20px] xl:px-[60px] cart-shadow transition-colors duration-300`}
            >
              <div className="flex items-center justify-between min-h-[70px] xl:min-h-[130px]">
                <div className="flex items-center gap-4 font-semibold">
                  <p className="text-3xl xl:text-5xl">0{item.number}</p>
                  <p className="text-lg xl:text-2xl">{item.title}</p>
                </div>

                {isOpenItem ? (
                  <FaMinus
                    className="transition-transform duration-500 rotate-180 border p-2 rounded-full text-4xl bg-[#F3F3F3] cursor-pointer"
                    onClick={() => handleOpen(item.id)}
                  />
                ) : (
                  <FaPlus
                    className="transition-transform duration-500 border p-2 rounded-full text-4xl bg-[#F3F3F3] cursor-pointer"
                    onClick={() => handleOpen(item.id)}
                  />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-500  ${
                  isOpenItem
                    ? "max-h-[300px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <hr className="w-full h-[2px] bg-black xl:mb-4" />
                <p className="text-lg text-gray-700 py-5">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQPage;
