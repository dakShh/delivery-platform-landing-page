import React from "react";

// ** Data import
import { aboutData } from "../data";

const About = () => {
  const { title, subTitle, image } = aboutData;

  return (
    <section data-aos="fade-up" data-aos-offset="350" className="my-[30px] xl:mt-[100px ]">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60xp] xl:pb-0">
          <div className="flex-1">
            <img src={image} alt="" width={650} />
          </div>

          <div className="flex-1 xl:pr-12">
            <h2 data-aos="fade-up" data-aos-delay="500" className="h2 mb-10">
              {title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="600" className="max-w-[474px] mx-auto xl:mx-0 ">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
