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
      <nav className="hidden md:flex items-center justify-between w-[72%]">
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
        className="md:hidden block text-3xl cursor-pointer"
        onClick={() => setIsOpenNav(true)}
      />

      {/* Mobil nav - həmişə DOM-da, animasiya ilə */}
      <nav
        className={`fixed top-0 left-0 h-screen w-[80%] bg-black text-white p-5 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpenNav ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-end text-white">
          <CgClose
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpenNav(false)}
          />
        </div>

        {navLinks.map((item, index) => (
          <a href={item.path} key={index} className="text-xl">
            {item.text}
          </a>
        ))}

        <Link to="" className="border rounded-[14px] py-4 px-[40px]">
          Request a quote
        </Link>
      </nav>

      {/* Overlay */}
      {isOpenNav && (
        <div
          onClick={() => setIsOpenNav(false)}
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
}


export default Header;
