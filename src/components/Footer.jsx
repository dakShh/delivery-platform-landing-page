import React from "react";

// ** Data import
import { footerData } from "../data";

// ** Component import
import Copyright from "./Copyright";
const Footer = () => {
  const { logo, address, email, phone, list, list2, socialList } = footerData;
  return (
    <footer data-aos="fade-up" data-aos-offset="300" data-aos-delay="200" className="">
      <div className="container mx-auto py-24">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            <a href="">
              <img src={logo} alt="" width={80} className="mb-[65px]"></img>
            </a>

            <div className="max-w-[260px] mb-5 text-primary font-bold">{address}</div>

            <div className="italic font-light">{email}</div>
            <div className="italic font-light">{phone}</div>
          </div>

          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
            <div>
              <div className="font-extrabold text-primary mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="text-primary" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="font-extrabold text-primary mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="text-primary" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="font-extrabold text-primary mb-8">Social Media</div>
              <ul className="flex gap-x-4 gap-y-4 justify-center">
                {socialList.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={index}
                    >
                      <a className="text-white text-xl hover:text-white" href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
