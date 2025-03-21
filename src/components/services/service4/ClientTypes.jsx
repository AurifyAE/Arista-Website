"use client";
import React, { useEffect, useState, useRef } from "react";
import B2B from "../../../assets/images/services/service1/B2B.png";
import B2C from "../../../assets/images/services/service1/B2C.png";

const ClientTypes = () => {
  const clientTypes = [
    {
      image: B2B,
      altText: "Gold bars",
      title: "Business-to-Business (B2B) clients:",
      description: "Jewelers, bullion dealers, and wholesalers.",
    },
    {
      image: B2C,
      altText: "Dollar bills",
      title: "Business-to-Consumer (B2C) clients:",
      description: "Individual investors and collectors.",
    },
  ];

  const [isVisible, setIsVisible] = useState([false, false]);
  const cardRefs = useRef([]);

  // Intersection observer to detect when cards enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          } else {
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = false;
              return newVisibility;
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in the viewport
    );

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (index) => {
    if (!isVisible[index]) return "";
    // Check for screen size and apply the appropriate animation
    if (window.innerWidth > 768) {
      // For larger screens: Use "slide" animation
      return index % 2 === 0
        ? "animate-from-left"
        : "animate-from-right"; // For alternate animation
    } else {
      // For small screens: Use a simpler "slide" animation
      return index % 2 === 0
        ? "animate-from-left-small"
        : "animate-from-right-small";
    }
  };

  return (
    <section className="flex justify-center items-start px-5 py-10 w-full">
      <div className="flex gap-10 justify-center max-md:gap-5 max-sm:flex-col max-sm:gap-5 max-sm:px-2">
        {clientTypes.map((client, index) => (
          <article
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`flex flex-col items-center opacity-0 transition-all duration-1000 ease-in-out ${
              getAnimationClass(index)
            }`}
          >
            <img
              src={client.image}
              alt={client.altText}
              className="w-[506px] h-[260px] rounded-[30px] max-lg:w-[400px] max-lg:h-[206px] max-sm:w-[100%] max-sm:h-[180px]"
            />
            <div className="mt-7 text-center w-[318px] max-sm:w-full">
              <h2 className="text-base font-bold text-black inline">
                {client.title}
              </h2>
              <p className="text-base text-black inline"> {client.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClientTypes;
