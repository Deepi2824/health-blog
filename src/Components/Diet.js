import React from "react";
import { Footer } from "./Footer";

export const Diet = () => {
  return (
    <div>
      <div className="bg-[#e5e5e5] w-full p-10">
        <div className="md:flex md:py-32 md:max-w-6xl mx-auto">
          <div className="md:w-1/2 lg:px-10 md:px-4">
            <p className="lg:text-[40px] text-[26px] font-bold leading-tight">
              Be mindful – take your time and notice what you eat
            </p>
            <div className="lg:w-[354px] h-[15px] bg-[#6a4aa1] my-7"></div>
            <p className="lg:text-xl text-lg leading-7 mb-10">
              Dui ut ornare lectus sit amet est placerat. Diam phasellus
              vestibulum lorem sed risus. Amet commodo nulla facilisi nullam
              vehicula ipsum. Amet consectetur adipiscing elit pellentesque. In
              ante metus dictum at tempor commodo ullamcorper. Sapien eget mi
              proin sed libero enim sed faucibus. Iaculis eu non diam phasellus.
              Elit eget gravida cum sociis natoque. Quis vel eros donec ac odio.
            </p>
            <button className="bg-[#6a4aa1] hover:bg-[#4d4d4d]  text-white font-bold px-14 py-4 pointer mb-10">
              READ MORE
            </button>
          </div>
          <div className="md:w-1/2 w-full bg-white py-8 px-5 flex flex-col justify-end">
            <div className="bg-[#af94de] rounded-[50%] w-[94px] h-[94px] mb-10"></div>

            <p className="text-xl">
              Orci nulla pellentesque dignissim enim sit amet venenatis. In
              mollis nunc sed id semper. Adipiscing commodo elit at imperdiet.
              Fermentum dui faucibus in ornare. Urna et pharetra pharetra massa
              massa ultricies mi quis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
