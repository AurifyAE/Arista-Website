"use client";
import React from "react";
import B2C from "../../../assets/images/services/service1/B2C-2.png";

const ServiceAvailability = () => {
  const steps = [
    {
      description:
        "Contact our trading desk via phone or email to discuss your requirements.",
    },
    {
      description: "Provide KYC documentation as per UAE regulations",
    },
    {
      description:
        "Confirm your order details, including quantity, type, and delivery terms",
    },
    {
      description:
        "Complete the transaction through bank transfer or other approved payment methods.",
    },
    {
      description:
        "Arrange for secure delivery or collection from our designated locations.",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="py-5 px-36 max-md:px-4 mx-auto my-0 w-full">
        <h1 className="mb-10 text-3xl font-bold text-black max-sm:text-2xl font-poppins">
          How to avail this Service:
        </h1>

        {/* B2B Section */}
        <section>
          <h2 className="text-xl font-semibold text-black text-center mb-8 max-sm:text-lg font-poppins">
            1. For B2B Clients:
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10 w-full">
            {steps.slice(0, 3).map((step, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center max-w-[300px] w-full"
              >
                <header className="px-8 py-4 mb-5 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
                  Step {index + 1}
                </header>
                <p className="text-base leading-6 text-black text-center max-w-[241px] max-md:text-md max-sm:text-md">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-10 w-full">
            {steps.slice(3).map((step, index) => (
              <article
                key={index + 3}
                className="flex flex-col items-center justify-center max-w-[300px] w-full"
              >
                <header className="px-8 py-4 mb-5 text-xl font-semibold text-center text-white bg-black rounded-3xl w-[225px] max-md:text-lg max-md:w-[180px] max-sm:text-base max-sm:w-[200px]">
                  Step {index + 4}
                </header>
                <p className="text-base leading-6 text-black text-center max-w-[241px] max-md:text-md max-sm:text-md">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* B2C Section */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-black text-center mb-8 max-sm:text-lg font-poppins">
            2. For B2C Clients:
          </h2>
          <img
            src={B2C}
            alt="Showroom interior"
            className="block mx-auto my-5 w-full h-auto max-w-[801px]"
          />
          <div className="text-xl leading-6 text-center text-black max-sm:text-base">
            <p className="mx-0 my-2.5">Visit our showroom in the Gold Souk</p>
            <p className="mx-0 my-2.5">
              Choose your preferred items and make your purchase securely in-store
              or online
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAvailability;
