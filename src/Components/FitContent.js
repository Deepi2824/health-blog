import React from "react";
import { Fruits } from "./Fruits";

export const FitContent = () => {
  return (
    <div className="">
      <div className="lg:pt-10 lg:pb-20">
        <div className="lg:py-14 lg:px-32">
          <p className="lg:w-2/5 lg:px-8 px-10  py-7 lg:mb-5 md:text-lg ">
            Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque. Turpis egestas sed tempus urna
            et pharetra. Id aliquet risus feugiat in ante metus dictum. Aliquet
            nec ullamcorper sit amet risus nullam. Lectus nulla at volutpat diam
            ut.
          </p>
          <p className="lg:px-8 px-10 mb-5">
            image from <span className="underline">Freepik</span>
          </p>
          <button className="bg-[#6a4aa1] hover:bg-[#4d4d4d] mx-10 lg:mx-8 text-white font-bold px-14 py-4 pointer mb-5 lg:mb-36">
            READ MORE
          </button>
        </div>
        <div className="lg:flex items-end ">
          <div className="relative lg:ml-24 w-full">
            <img
              className=" rounded-full md:h-[587px] object-cover md:w-[587px] w-[291px] h-[291px] mx-auto mt-36 lg:-mt-44"
              src="/assets/girl.jpg"
              alt="girl"
            />
            <div className="absolute lg:-top-3/4 lg:-right-8 -top-2/4 right-20 bg-[#af94de] rounded-[50%] md:w-[228px] md:h-[228px] w-[124px] h-[124px] mx-auto"></div>
          </div>

          <div className="">
            <p className="md:text-5xl text-4xl font-bold p-10 ">
              25 Simple Tips to Make Your Diet Healthier
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e5e5e5] lg:flex flex-col justify-between p-10">
        <div className="bg-[#af94de] rounded-[50%] w-[94px] h-[94px] lg:mx-52 mb-5"></div>

        <div className="lg:flex justify-around lg:w-[1100px] h-auto mx-auto mb-20">
          <div className="lg:w-2/5 bg-white px-[20px] py-[40px]">
            <p className="lg:text-5xl text-3xl font-bold mb-5">
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
          <div className="lg:w-3/5">
            <img
              className="w-full lg:h-auto"
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
