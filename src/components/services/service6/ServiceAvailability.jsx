"use client";
import React from "react";
import B2C from "../../../assets/images/services/service1/B2C-2.png";

const ServiceAvailability = () => {
  // Eligibility points
  const request = [
    "Contact our assay team and schedule an appointment.",
  ];

  const samples = [
    "Deliver your precious metals to our designated lab or collection point.",
  ];

  const results = [
    "Obtain a comprehensive assay report with certification.",
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
          {/* Submit a Request */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Submit a Request
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {request.map((condition, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {condition}
                </p>
              ))}
            </div>
          </div>

          {/* Provide Samples */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Provide Samples
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {samples.map((step, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>

          {/* Receive Results */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Receive Results
            </h2>
            <div className="flex flex-col gap-4 w-[400px]">
              {results.map((step, index) => (
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
