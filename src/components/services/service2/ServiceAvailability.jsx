"use client";
import React from "react";
import B2C from "../../../assets/images/services/service1/B2C-2.png";

const ServiceAvailability = () => {
  // Eligibility points
  const eligibility = [
    "Ensure you are registered as a business entity with a valid trade license.",
    "Submit your financial and operational details for initial assessment.",
  ];

  const process = [
    "Contact Arista's consignment desk to discuss terms.",
    "Sign a consignment agreement detailing delivery timelines, pricing terms, and payment schedules.",
    "Receive the consigned metals and start using them for your business needs.",
    "Fix the price at an agreed date and complete the payment process.",
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

        {/* Eligibility Section */}
        <section className="flex justify-between max-sm:flex-col max-sm:gap-16">
          {/* Eligibility Box */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Eligibility
            </h2>
            <div className="flex flex-col gap-4">
              {eligibility.map((condition, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  ⦁ {condition}
                </p>
              ))}
            </div>
          </div>

          {/* Process Box */}
          <div className="flex flex-col space-y-4 max-sm:px-4">
            <h2 className="px-8 py-4 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
              Process
            </h2>
            <div className="flex flex-col gap-4">
              {process.map((step, index) => (
                <p
                  key={index}
                  className="text-base leading-6 text-black max-sm:text-sm"
                >
                  ⦁ {step}
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
