import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { cartServices } from "../../constants/constItems";

function ServicesPage() {

  return (
    <main className="flex flex-col gap-[70px] xl:gap-[100px]">
      <section id="service" className="flex flex-col gap-8 xl:gap-20">
        <div className="flex xl:flex-row flex-col gap-8 xl:gap-10 items-center">
          <p className="font-semibold my-green p-1 text-4xl rounded-[7px]">Services</p>
          <p className="w-full xl:w-[38vw] xl:text-start text-center sm:text-lg xl:text-lg md:text-xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* carts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
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
                } relative h-[310px] md:h-[400px] xl:h-[310px] xl:w-[600px] w-full rounded-[45px] border p-10 xl:p-[50px] cart-shadow shadow-black flex xl:flex-row flex-col justify-between xl:items-center`}
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
                      } rotate-[-25deg] text-5xl xl:text-4xl`}
                    />
                    <p
                      className={`${
                        item.id == 3 || item.id == 6 ? "text-white" : ""
                      } md:block hidden md:text-2xl xl:text-lg sm:text-lg`}
                    >
                      Learn more
                    </p>
                  </div>
                </div>

                {/* image */}
                <div className="absolute bottom-3 xl:right-[20px] right-14 md:size-[300px] md:bottom-[-10vh] md:right-[-7vw] xl:bottom-[-25px] xl:size-[250px] size-[150px]">
                  <img src={`/cart-images/${item.image}`} alt={item.text1} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="flex md:items-center justify-between bg-[#F3F3F3] h-[347px] rounded-[45px]">
        <div className="p-10 xl:p-[60px] flex flex-col xl:gap-0 md:gap-7 gap-3 justify-between">
          <p className="font-semibold text-[25px] xl:text-[30px]">Let’s make things happen</p>
          <p className="w-full xl:w-[33vw] ">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white w-[270px] xl:w-[288px] rounded-[14px] p-5">
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
