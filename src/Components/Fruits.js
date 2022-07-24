import React from "react";

export const Fruits = () => {
  const fruits = [
    { image: "/assets/fruits.jpg" },
    { image: "/assets/fruits1.jpg" },
    { image: "/assets/fruits2.jpg" },
    { image: "/assets/fruits3.jpg" },
    { image: "/assets/fruits4.jpg" },
    { image: "/assets/fruits5.jpg" },
  ];
  return (
    <div className="lg:py-20 pt-10">
      <div className="text-center">
        <p className="text-[#6a4aa1] text-3xl lg:text-6xl font-bold lg:mb-8 mb-4 tracking-wide">Seasona​l Fruits & Veg</p>
        <p className="italic text-base mb-10">
          Organic food is food produced by methods that comply with the
          standards of organic farming.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-row-2 gap-6 md:px-32 lg:py-11 px-5">
        {fruits.map((a) => (
          <img className="" src={a.image} alt="fruits" />
        ))}
      </div>
    </div>
  );
};
