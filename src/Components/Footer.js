import React from "react";

export const Footer = () => {
  return (
    <div className="">
      <div className="py-20 md:px-14 lg:max-w-6xl mx-auto px-10">
        <p className="text-[#6a4aa1] text-4xl lg:text-5xl font-bold pb-10 lg:mx-auto">
          About us
        </p>
        <div className="lg:flex mx-auto w-full">
          <div className="bg-[rgb(242,242,242)] lg:w-4/5 p-10">
            <p className="text-xl leading-9">
              We help you get smarter with how and what you eat with our top 10
              tips for eating healthily every day. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="font-bold text-xl leading-9 pt-10">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex flex-row bg-[#6a4aa1] w-1/5"></div>
        </div>
      </div>
      <div className="bg-[#333333] text-white text-center p-10 mx-auto flex flex-col gap-20">
        <p className="lg:w-[450px] mx-auto">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <p className="">
          {" "}
          <a className="text-[#32d2ea] underline" href="/">
            Website Templates
          </a>
          created with
          <a className="text-[#32d2ea] underline" href="/">
            {" "}
            Website Builder Software.
          </a>
        </p>
      </div>
    </div>
  );
};
