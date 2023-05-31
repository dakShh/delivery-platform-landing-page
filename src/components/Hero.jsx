import React from "react";

// ** Import Hero data
import { heroData } from "../data";

// ** Import Header
import Header from "./Header";

const Hero = () => {
  const { title, subtitle, image, btnText } = heroData;

  return (
    <section className="lg:h-[900px] pb-12 pt-8">
      <Header />
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center h-full md:pb-24">
          <div className="text-center xl:text-left xl:absolute">
            <h1
              data-aos="fade-down"
              data-aos-delay="400"
              className="h1 xl:max-w-[700px] mb-6 lg:mb-12"
            >
              {title}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="lead xl:max-w-[380px] mb-6 lg:mb-12 "
            >
              {subtitle}
            </p>
            <button
              data-aos="fade-down"
              data-aos-delay="600"
              className="btn btn-primary mb-8 xl:mb-0"
            >
              {btnText}
            </button>
          </div>

          <div className="xl:absolute xl:right-12 xl:bottom-16">
            <img data-aos="fade-up" data-aos-delay="700" src={image} alt="" width={650} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
