import React from "react";
import { Fruits } from "./Fruits";

export const FitContent = () => {
  return (
    <div className="w-full">
      <div className="py-10 px-3">
        <div className="md:py-14 md:px-32">
          <p className="md:w-4/5 lg:w-3/5 py-7 px-10 xl:pr-24 md:px-2 xl:mb-5 lg:text-lg">
            Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque. Turpis egestas sed tempus urna
            et pharetra. Id aliquet risus feugiat in ante metus dictum. Aliquet
            nec ullamcorper sit amet risus nullam. Lectus nulla at volutpat diam
            ut.
          </p>
          <p className="md:px-2 px-10 mb-5">
            image from <span className="underline">Freepik</span>
          </p>
          <button className="bg-[#6a4aa1] hover:bg-[#4d4d4d] mx-10 md:mx-2 text-white font-bold px-14 py-4 pointer mb-5 lg:mb-36">
            READ MORE
          </button>
        </div>
        <div className="xl:flex items-end ">
          <div className="relative xl:ml-24 w-full">
            <img
              className=" rounded-full md:h-[587px] object-cover md:w-[587px] w-[291px] h-[291px] mx-auto xl:mx-auto md:mx-8 mt-36 md:mt-6 lg:-mt-36"
              src="/assets/girl.jpg"
              alt="girl"
            />
            <div className="absolute xl:-top-3/4 xl:-right-8 md:-top-[30%] md:-right-1/5 -top-2/4 right-20 bg-[#af94de] rounded-[50%] md:w-[228px] md:h-[228px] w-[124px] h-[124px] xl:mx-auto"></div>
          </div>

          <div className="md:flex xl:block w-full">
            <div className="md:w-1/2"></div>
            <p className="lg:text-5xl text-4xl font-bold w-full md:w-1/2">
              25 Simple Tips to Make Your Diet Healthier
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e5e5e5] md:flex flex-col justify-between p-10">
        <div className="bg-[#af94de] rounded-[50%] w-[94px] h-[94px] xl:mx-48 mb-5"></div>

        <div className="md:flex justify-around md:max-w-6xl h-auto mx-auto mb-20">
          <div className="md:w-2/5 bg-white px-7 py-16">
            <p className="md:text-5xl text-3xl font-bold mb-5">
              How can I eat more healthily?
            </p>
            <p className="mb-5">
              Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat
              nisl vel pretium lectus quam id leo in vitae. Dictum sit amet
              justo donec enim diam vulputate. Sociis natoque penatibus et
              magnis dis parturient. Molestie ac feugiat sed lectus vestibulum
              mattis.
            </p>
            <p className="mb-6">
              Image from <span className="underline">Freepik</span>
            </p>
            <button className="bg-[#252d2e] hover:bg-[#4d4d4d] text-white font-bold px-14 py-4 pointer">
              READ MORE
            </button>
          </div>
          <div className="md:w-3/5">
            <img
              className="w-full xl:h-auto"
              src="/assets/girl1.jpg"
              alt="girl"
            />
          </div>
        </div>
      </div>
      <Fruits />
    </div>
  );
};
