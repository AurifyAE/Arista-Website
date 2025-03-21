"use client";
import React, { useState, useEffect } from "react";
import serviceImage1 from "../../assets/images/service1.png";
import serviceImage2 from "../../assets/images/service2.png";
import serviceImage3 from "../../assets/images/service3.png";
import serviceImage4 from "../../assets/images/service4.png";
import serviceImage5 from "../../assets/images/service5.jpg";
import serviceImage6 from "../../assets/images/service6.jpg";
import serviceImage7 from "../../assets/images/service7.jfif";
import serviceImage8 from "../../assets/images/service8.jpg";

const Services = () => {
    const [currentIndexServices, setCurrentIndexServices] = useState(0);
    const [maxVisibleSlides, setMaxVisibleSlides] = useState(3);

    // Array of services with their titles and images
    const services = [
        { image: serviceImage1, title: "Physical Precious Metal Trading" },
        { image: serviceImage2, title: "Precious Metal Consignment & Financing" },
        { image: serviceImage3, title: "Hedging and Risk Management" },
        { image: serviceImage4, title: "Secure Precious Metal Delivery Worldwide" },
        { image: serviceImage5, title: "Global Metal Transfer & Swap" },
        { image: serviceImage6, title: "Assay Services" },
        { image: serviceImage7, title: "Refinery Services" },
        { image: serviceImage8, title: "Storage and Vaulting Services" },
    ];

    const servicesUrl = [
        "Physical Precious Metal Trading",
        "Precious Metal Consignment Financing",
        "Hedging and Risk Management",
        "Secure Precious Metal Delivery Worldwide",
        "Global Metal Transfer Swap",
        "Assay Services",
        "Refinery Services",
        "Storage and Vaulting Services",
    ];

    // Function to format the service title to a URL-friendly format
    const formatUrl = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, "-")   // Replace spaces with hyphens
            .replace(/&/g, "")      // Remove '&' symbol entirely
            .replace(/-+/g, "-");   // Remove consecutive hyphens and keep only one
    };

    // Update maxVisibleSlides based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMaxVisibleSlides(1);
            } else if (window.innerWidth < 1024) {
                setMaxVisibleSlides(2);
            } else {
                setMaxVisibleSlides(3);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevServices = () => {
        if (currentIndexServices > 0) {
            setCurrentIndexServices(currentIndexServices - 1);
        }
    };

    const handleNextServices = () => {
        if (currentIndexServices < services.length - maxVisibleSlides) {
            setCurrentIndexServices(currentIndexServices + 1);
        }
    };

    // Calculate slide width based on screen size
    const getSlideWidth = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) {
                return window.innerWidth - 40; // Full width minus padding on small screens
            } else if (window.innerWidth < 768) {
                return 320;
            } else {
                return 350;
            }
        }
        return 350; // Default for SSR
    };

    return (
        <div className="w-full mt-16 flex flex-col items-center px-8 md:px-16 lg:px-36">
            {/* Container for the title */}
            <div className="flex mb-8 w-full justify-between relative">
                <h2 className="text-2xl md:text-3xl font-bold text-black font-poppins w-full">
                    Our Services
                </h2>
                <div className="flex space-x-4 justify-end">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevServices}
                        className={`text-black px-4 py-2 rounded-full border-2 transition-opacity ${currentIndexServices === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={currentIndexServices === 0}
                    >
                        <span className="font-bold text-xl">&#8592;</span>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNextServices}
                        className={`text-black px-4 py-2 rounded-full border-2 transition-opacity ${currentIndexServices >= services.length - maxVisibleSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={currentIndexServices >= services.length - maxVisibleSlides}
                    >
                        <span className="font-bold text-xl">&#8594;</span>
                    </button>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndexServices * getSlideWidth()}px)`,
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-[320px] md:w-[350px] mx-4 max-sm:mx-2 group"
                        >
                            {/* Wrap card in <a> tag for navigation */}
                                <a href={`/services/${formatUrl(service.title)}`} className="block">
                                <div
                                    className="flex flex-col items-center transition-all duration-300 ease-in-out mb-8 max-sm:mb-12 max-sm:mt-12 h-[250px] md:h-[350px] lg:h-[382px] max-sm:h-[300px] justify-center cursor-pointer group-hover:scale-105 group-hover:translate-x-4 group-hover:translate-y-4 rounded-lg"
                                >
                                    <img
                                        src={service.image}
                                        alt={`Service ${index + 1}`}
                                        className="w-[382px] h-[382px] object-cover rounded-3xl"
                                    />
                                    <h3 className="font-poppins font-semibold text-base md:text-lg mt-4 text-center text-black">
                                        {service.title}
                                    </h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
