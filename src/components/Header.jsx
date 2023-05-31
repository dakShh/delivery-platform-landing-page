import React, { useState } from "react";

// ** Component Import
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// ** Icons Import
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

// ** Logo Import
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header
      data-aos="fade-down"
      data-aos-delay="1200"
      data-aos-duration="1000"
      className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="#">
              <img src={Logo} alt="" width={60} />
            </a>

            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } block lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          <button className=" btn btn-quaternary flex items-center gap-x-[20px] md:gap-x-[200px] group whitespace-nowrap">
            Request Demo
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>

          <div
            className="lg:hidden text-2xl text-primary cursor-pointer "
            onClick={() => setNavMobile((prevState) => !prevState)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
