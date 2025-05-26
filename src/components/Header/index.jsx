import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constItems";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <header className="flex justify-between items-center py-6 md:py-9">
      <Link to="" className="flex items-center gap-2">
        <img
          src="/icons/Vector.svg"
          alt="icon"
          className="size-[28px] md:size-[36px]"
        />
        <h1 className="text-[36px] font-semibold">Positivus</h1>
      </Link>
      <nav className="hidden md:flex items-center justify-between w-[72%]">
        {navLinks.map((item, index) => {
          return (
            <a href={item.path} key={index} className="text-xl">
              {item.text}
            </a>
          );
        })}

        <Link to="" className="border rounded-[14px] py-4 px-[40px]">
          Request a quote
        </Link>
      </nav>
      <BsList
        className="md:hidden block text-3xl"
        onClick={() => setIsOpenNav(!isOpenNav)}
      />
      {isOpenNav ? (
        <nav className="flex flex-col bg-black text-white fixed left-0 h-screen top-0  p-5 justify-between w-[80%]">
          <div className="flex justify-end text-white">
            <CgClose className="text-3xl" />
          </div>

          {navLinks.map((item, index) => {
            return (
              <a href={item.path} key={index} className="text-xl">
                {item.text}
              </a>
            );
          })}

          <Link to="" className="border rounded-[14px] py-4 px-[40px]">
            Request a quote
          </Link>
          <div
            onClick={() => setIsOpenNav(false)}
            className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          ></div>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
