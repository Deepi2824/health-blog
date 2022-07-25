import React from "react";

const Product = () => {
  const data = [
    {
      type: "foodproduct",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Over 300 food products",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgcolor: "",
    },
    {
      type: "naturalproduct",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Only natural products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgcolor: "",
    },
    {
      type: "weight",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Significant weight loss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgcolor: "",
    },
  ];
  return (
    <div className="md:max-w-7xl md:mx-auto md:py-10 grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 p-5 sm:gap-5">
      <div className="md:my-10 p-5 lg:col-span-2">
        <h1 className="font-bold md:text-[2.25rem] text-2xl mb-5">
          Weight Loss Linked To Healthy Eating
        </h1>
        <p className="text-lg font-normal pb-5">
          Participants who ate the most vegetables and consumed the fewest
          processed foods, sugary drinks and unhealthy fats shed the most
          kilograms
        </p>
        <button className="bg-[#252d2e] hover:bg-[#4d4d4d] text-white font-bold px-14 py-4 pointer">
          READ MORE
        </button>
      </div>
      {/* <div className="md:w-2/3 md:flex gap-3 text-white p-5"> */}
        {data.map((x) => (
          <div
            className={`flex flex-col gap-5 mb-7 sm:p-5 lg:py-5 lg:px-0 ${
              x.title === "Over 300 food products"
                ? "bg-[#6a4aa1]"
                : x.title === "Only natural products"
                ? "bg-[#d01e55]"
                : "bg-[#292d33]"
            } py-10 text-white`}
          >
            <div className="mx-auto">{x.image} </div>
            <div className="text-2xl font-bold text-center lg:px-3">{x.title}</div>
            <div className="text-center">{x.description}</div>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default Product;
