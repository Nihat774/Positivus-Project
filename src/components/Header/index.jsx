import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constItems";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <header className="flex justify-between items-center py-6 md:py-9 relative z-50">
      <Link to="" className="flex items-center gap-2">
        <img
          src="/icons/Vector.svg"
          alt="icon"
          className="w-[28px] md:w-[36px]"
        />
        <h1 className="text-[36px] font-semibold">Positivus</h1>
      </Link>
      <nav className="hidden xl:flex items-center justify-between w-[72%]">
        {navLinks.map((item, index) => (
          <a href={item.path} key={index} className="text-xl">
            {item.text}
          </a>
        ))}

        <Link to="" className="border rounded-[14px] py-4 px-[40px]">
          Request a quote
        </Link>
      </nav>

      <BsList
        className="xl:hidden block text-3xl md:text-5xl cursor-pointer"
        onClick={() => setIsOpenNav(true)}
      />

    
      <nav
        className={`fixed top-0 left-0 h-screen w-[80%] bg-black text-white p-5 flex flex-col justify-around
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpenNav ? "translate-x-0" : "-translate-x-full"}
          xl:hidden
        `}
      >
        <div className="flex justify-end text-white">
          <CgClose
            className="text-3xl xl:text-3xl md:text-4xl md:mr-5 cursor-pointer"
            onClick={() => setIsOpenNav(false)}
          />
        </div>

        {navLinks.map((item, index) => (
          <a href={item.path} key={index} className="text-xl md:text-3xl text-center"   onClick={() => setIsOpenNav(false)}>
            {item.text}
          </a>
        ))}

        <div className="flex justify-center">
          <Link to="" className=" flex border rounded-[14px] py-4 px-[40px] w-fit md:text-2xl">
          Request a quote
        </Link>
        </div>
      </nav>

   
      {isOpenNav && (
        <div
          onClick={() => setIsOpenNav(false)}
          className="fixed inset-0 bg-black opacity-40 z-30 xl:hidden"
        ></div>
      )}
    </header>
  );
}


export default Header;
