"use client";
import React from "react";
import B2C from "../../../assets/images/services/service1/B2C-2.png";

const ServiceAvailability = () => {
  // Eligibility points
  const refining = [
    "Contact our refinery services team with details of the material to be refined.",
  ];

  const submission = [
    "Deliver materials to our partner refinery or arrange a pickup.",
  ];

  const receive = [
    "Collect refined metals along with detailed documentation.",
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
          {/* Initiate Refining */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Initiate Refining
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {refining.map((condition, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {condition}
                </p>
              ))}
            </div>
          </div>

          {/* Material Submission */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Material Submission
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {submission.map((step, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>

          {/* Receive Refined Metals */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Receive Refined Metals
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {receive.map((step, index) => (
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
