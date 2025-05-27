import { Link } from "react-router-dom";
import { footerNavLinks, navLinks } from "../../constants/constItems";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <div className="bg-deepgray flex flex-col xl:items-start items-center h-fit mx-[-15px] md:mx-[-30px] xl:mx-0 xl:h-[514px] justify-between text-white rounded-none xl:rounded-t-[45px] py-10 xl:py-[55px] xl:px-[60px]">
        <div className="xl:w-full">
          <div className="flex xl:flex-row flex-col items-center xl:items-start xl:gap-0 gap-7 justify-between ">
            {/* icon */}
            <Link to="" className="flex gap-2">
              <img src="/icons/Vector-white.svg" alt="" />
              <h2 className="text-3xl xl:text-4xl font-semibold">Positivus</h2>
            </Link>

            <nav className="flex md:flex-row flex-col items-center justify-between gap-5 xl:w-[50%]">
              {footerNavLinks.map((item, index) => {
                return (
                  <a
                  href={item.path}
                    key={index}
                    className="text-lg xl:underline leading-[100%]"
                  >
                    {item.text}
                  </a>
                );
              })}
            </nav>

            {/* social icons */}
            <div className="hidden xl:flex items-center gap-4">
              <Link to="">
                <LiaLinkedinIn className="text-black bg-white rounded-full text-2xl p-1" />
              </Link>

              <Link to="">
                <FaFacebook className="text-2xl" />
              </Link>

              <Link to="">
                <TiSocialTwitter className="text-black bg-white rounded-full text-2xl p-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col  xl:items-center gap-7 xl:w-full xl:justify-between mt-4">
          <div className="flex flex-col xl:items-start items-center  gap-4 text-lg w-full">
            <p className="rounded-[7px] bg-[#B9FF66] text-black p-1 my-6 xl:my-0 leading-[100%] font-semibold w-fit">
              Contact us:
            </p>

            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <div className="flex flex-col items-center xl:items-start">
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          <form className="bg-[#292A32] flex md:flex-row flex-col justify-center items-center gap-5 rounded-[14px] py-[30px] xl:py-[58px] px-12 xl:px-10 w-fit  md:w-[634px]">
            <input
              type="email"
              className="rounded-[14px] border border-white w-[249px] py-4 px-6 placeholder:text-white"
              placeholder="Email"
            />
            <button className="bg-[#B9FF66] rounded-[14px] w-[249px] py-4 px-6 text-black cursor-pointer">
              Subscribe to news
            </button>
          </form>

          <div className="xl:hidden flex justify-center items-center gap-4">
            <Link to="">
              <LiaLinkedinIn className="text-black bg-white rounded-full text-3xl p-1" />
            </Link>

            <Link to="">
              <FaFacebook className="text-3xl" />
            </Link>

            <Link to="">
              <TiSocialTwitter className="text-black bg-white rounded-full text-3xl p-1" />
            </Link>
          </div>
        </div>

        {/* hr */}
        <div className="w-full py-7">
          <hr className="mx-[23px] xl:mx-0 bg-neutral-500 xl:bg-white h-[3px]" />
        </div>

        <div className="flex xl:flex-row flex-col xl:items-start items-center gap-3 xl:gap-5">
          <p>&copy; 2023 Positivus. All Rights Reserved.</p>
          <Link to="" className="xl:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
