"use client";
import React, { useEffect, useState, useRef } from "react";
import image1 from "../../../assets/images/services/service2/Service2c.png";
import image2 from "../../../assets/images/services/service2/Service2d.png";

const ClientTypes = () => {
  const clientTypes = [
    {
      image: image1,
      altText: "Gold bars",
      description: "Jewelers and manufacturers requiring inventory for ongoing production.",
    },
    {
      image: image2,
      altText: "Dollar bills",
      description: "Traders seeking price flexibility in a fluctuating market.",
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
              <p className="text-base font-bold text-black inline"> {client.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClientTypes;
