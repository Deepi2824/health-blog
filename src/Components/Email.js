import React from "react";

export const Email = () => {
  const food = [
    {
      image: "/assets/food.png",
      title: "Base your meals on higher fibre starchy carbohydrates",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
    {
      image: "/assets/food1.png",
      title: "Eat lots of fruit and veg",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
    {
      image: "/assets/food3.png",
      title: "Eat more fish, including a portion of oily fish",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
    {
      image: "/assets/food4.png",
      title: "Cut down on saturated fat and sugar",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
    {
      image: "/assets/food5.png",
      title: "Eat less salt: no more than 6g a day for adults",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
    {
      image: "/assets/food6.png",
      title: "Get active and be a healthy weight",
      description:
        "Sample text. Click to select the text box. Click again or double clickto start editing the text.",
    },
  ];
  return (
    <div>
      <div className="relative">
        <img
          className="lg:h-[680px] w-full object-cover"
          src="/assets/straberry.jpeg"
          alt="straberry"
        />
        <div className="absolute top-[13%] left-[13%] lg:top-56 lg:left-56">
          <p className="lg:text-6xl text-3xl font-bold mb-10">Be healthy!</p>
          <input className="w-full px-[12px] py-[10px] mb-3" type="text" placeholder="Enter a valid email address" />
          <button className="w-full px-[12px] py-[10px] text-white font-semibold tracking-widest bg-[#6a4aa1]">SUBMIT</button>
        </div>
      </div>
      <div className="bg-[#6a4aa1] text-white p-10">
        <p className="text-center text-5xl font-bold pt-14">Top tips from the experts</p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:w-[1200px] mx-auto items-center py-20">
          {food.map((z) => (
            <div className="flex flex-col gap-3 lg:gap-5 ">
              <div className="flex gap-2">
                <img className="w-12 object-contain" src={z.image} alt="food" />
                <p className="text-2xl font-bold lg:px-10">{z.title}</p>
              </div>

              <p className="lg:px-10 px-2 ml-12 italic sm:text-lg ">{z.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
