"use client";
import React from "react";
import B2C from "../../../assets/images/services/service1/B2C-2.png";

const ServiceAvailability = () => {
  // Eligibility points
  const order = [
    "Provide details of the transfer or swap, including metal type, quantity, and destination.",
  ];

  const verification = [
    "Submit KYC and trade documents for regulatory approval.",
  ];

  const delivery = [
    "Confirm pricing and logistics arrangements with our team.",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="py-10 px-36 max-md:px-6 mx-auto w-full">
        <h1 className="mb-10 text-3xl font-bold text-black max-sm:text-2xl font-poppins">
          How to avail this Service:
        </h1>

        {/* Section */}
        <section className="flex justify-between max-sm:flex-col max-sm:gap-16">
          {/* Initiate a Request */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Initiate a Request
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {order.map((condition, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {condition}
                </p>
              ))}
            </div>
          </div>

          {/* Compliance Check */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Compliance Check
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {verification.map((step, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>

          {/* Transaction Execution */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Transaction Execution
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {delivery.map((step, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAvailability;
