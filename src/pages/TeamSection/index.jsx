
import { LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router-dom";
import { teamCart } from "../../constants/constItems";

function TeamSection() {
  return (
    <section className="flex flex-col gap-10" id="blog">
      <div className="flex flex-col gap-5 md:gap-20">
        <div className="flex md:flex-row flex-col gap-5 md:gap-10 items-center">
          <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
            Team
          </p>
          <p className="w-full md:w-[34vw]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
          {teamCart.map((item) => {
            return (
              <div
                key={item.id}
                className="border rounded-[45px] cart-shadow h-[300px] md:h-[331px] py-5  md:py-10 pl-6 md:px-[35px] flex flex-col justify-between"
              >
                <div className="flex  justify-between gap-5">
                  <img src={item.image} alt={item.name} />
                  <div className="flex flex-col justify-between items-end pr-10">
                    <Link to={item.path}>
                      <LiaLinkedinIn className="text-[#B9FF66] bg-black rounded-full  text-3xl p-1" />
                    </Link>
                    <div className="flex flex-col  w-[176px]">
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p>{item.specialty}</p>
                    </div>
                  </div>
                </div>

                <hr className="w-[75vw] md:w-full bg-neutral-400 md:bg-black h-[2px]" />

                <div className="h-fit md:w-full w-[78vw] md:py-0 py-3 md:h-[16vh]">
                  <p>{item.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end ">
        <Link
          to=""
          className="w-full md:w-[270px] flex justify-center bg-black text-white py-5 rounded-[14px] "
        >
          See all team
        </Link>
      </div>
    </section>
  );
}

export default TeamSection;
