import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { cartServices } from "../../constants/constItems";

function ServicesPage() {

  return (
    <main className="flex flex-col gap-[70px] md:gap-[100px]">
      <section id="service" className="flex flex-col gap-8 md:gap-20">
        <div className="flex md:flex-row flex-col gap-8 md:gap-10 items-center">
          <p className="font-semibold my-green p-1 text-4xl rounded-[7px]">Services</p>
          <p className="w-full md:w-[38vw] md:text-start text-center">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* carts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cartServices.map((item) => {
            return (
              <Link
                to={item.path}
                key={item.id}
                className={`${
                  item.id % 3 == 0
                    ? "bg-black  "
                    : item.id % 3 == 2
                    ? "bg-[#B9FF66]"
                    : "bg-[#F3F3F3]"
                } relative h-[310px] md:w-[600px] w-full rounded-[45px] border p-10 md:p-[50px] cart-shadow shadow-black flex md:flex-row flex-col justify-between md:items-center`}
              >
                <div className="h-full flex flex-col justify-between">
                  
                  {/* text */}
                  <div className="font-semibold text-2xl">
                    <p
                      className={`${
                        item.id % 3 == 1 || item.id == 6 || item.id == 1
                          ? "bg-[#B9FF66]"
                          : "bg-white"
                      } p-1 rounded-[7px] w-fit text-[30px]`}
                    >
                      {item.text1}
                    </p>
                    <p
                      className={`${
                        item.id % 3 == 1 || item.id == 6 || item.id == 1
                          ? "bg-[#B9FF66]"
                          : "bg-white"
                      } p-1 rounded-[7px] w-fit text-[30px]`}
                    >
                      {item.text2}
                    </p>
                  </div>

                  {/* learn more */}
                  <div className="flex items-center gap-3">
                    <IoArrowForwardCircle
                      className={`${
                        item.id == 3 || item.id == 6 ? "text-white" : ""
                      } rotate-[-25deg] text-5xl md:text-4xl`}
                    />
                    <p
                      className={`${
                        item.id == 3 || item.id == 6 ? "text-white" : ""
                      } md:block hidden`}
                    >
                      Learn more
                    </p>
                  </div>
                </div>

                {/* image */}
                <div className="absolute bottom-3 right-14 md:bottom-[-40px] md:size-[250px] size-[150px]">
                  <img src={`/cart-images/${item.image}`} alt={item.text1} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="flex justify-between bg-[#F3F3F3] h-[347px] rounded-[45px]">
        <div className="p-10 md:p-[60px] flex flex-col md:gap-0 gap-3 justify-between">
          <p className="font-semibold text-[25px] md:text-[30px]">Let’s make things happen</p>
          <p className="w-full md:w-[33vw] ">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white w-[270px] md:w-[288px] rounded-[14px] p-5">
            Get your free proposal
          </button>
        </div>
        <div>
          <img src="/service-image.png" alt="" />
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
