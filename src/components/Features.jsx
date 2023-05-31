import React from "react";

// ** Data import
import { featureData } from "../data";
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  const { title, subtitle, list } = featureData;
  return (
    <section className="xl:pb-[30px] my-[30px] xl:mt-[150px]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 data-aos="fade-down" data-aos-delay="100" className="h2 mb-6 xl:mb-12">
            {title}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="lead max-w-[585px] mx-auto xl:mb-24 mb-16"
          >
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={feature.delay}
                className="w-full max-w-[530px] h-[360px] rounded-3xl bg-teal-200/20  relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
              >
                {/* <div className="hidden blur-xl xl:flex absolute top-0 right-0 -z-10 p-1 rounded-3xl overflow-hidden">
                  <img src={feature.bgImage} alt="" />
                </div> */}
                <div
                  data-aos="zoom-in-right"
                  data-aos-delay={Number(feature.delay) + 200}
                  className="max-w-[120px] xl:mr-24 xl:max-w-[230px] ml-[-80px] "
                >
                  <img src={feature.image} alt="" width={250} />
                </div>
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{feature.title}</h3>
                  <p className="font-light italic gap-x-2 group">{feature.description}</p>
                  <div className=" flex items-center gap-x-2 group">
                    <a className="text-primary font-bold " href="">
                      {feature.linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all cursor-pointer " />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
