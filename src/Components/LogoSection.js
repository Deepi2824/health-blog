import React from "react";

function LogoSection() {
  return (
    <div className="">
      <div className="flex justify-between items-center px-10 lg:px-24 py-5">
        <div className="w-16">
          <img src="/assets/default-logo.png" alt="logo" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="relative">
        <img
          className="lg:h-[730px] h-[600px] w-full object-cover"
          src="/assets/banner-image.jpeg"
          alt="bannerimage"
        />
        <div className="absolute text-white top-10 lg:w-[520px] lg:right-[13%] p-10">
          <h1 className="font-bold text-[6.25rem]">health</h1>
          <h2 className="font-bold text-xl mb-6">
            Time to Get Healthy & Active
          </h2>
          <p className="mb-5 font-normal text-[17px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="bg-white text-[#6a4aa1] font-bold px-14 py-4 pointer hover:bg-[#947ac1] hover:text-white">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
