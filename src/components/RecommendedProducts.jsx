"use client";
import React, { useState, useEffect } from "react";
import productImage1 from "../assets/images/productImage1.png";
import productImage2 from "../assets/images/productImage2.png";
import productImage3 from "../assets/images/productImage3.png";
import productImage4 from "../assets/images/productImage4.png";

const RecommendedProducts = () => {
    const [currentIndexProducts, setCurrentIndexProducts] = useState(0);
    const [maxVisibleSlides, setMaxVisibleSlides] = useState(3);

    // Array of products and their respective titles
    const products = [
        { image: productImage1, title: "Pamp Collection", price: "AED 500.12" },
        { image: productImage2, title: "Valcambi Suisse", price: "AED 500.12" },
        { image: productImage3, title: "SAM", price: "AED 500.12" },
        { image: productImage4, title: "Al Etihad", price: "AED 500.12" },
    ];

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

    const handlePrevProducts = () => {
        if (currentIndexProducts > 0) {
            setCurrentIndexProducts(currentIndexProducts - 1);
        }
    };

    const handleNextProducts = () => {
        if (currentIndexProducts < products.length - maxVisibleSlides) {
            setCurrentIndexProducts(currentIndexProducts + 1);
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
        <div className="w-full mt-16 flex flex-col items-center px-8 md:px-16 lg:px-0 max-sm:px-0">
            {/* Container for the title */}
            <div className="flex items-center mb-8 w-full justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black font-poppins">
                    You may also like
                </h2>
            </div>

            {/* Product Cards Section */}
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndexProducts * getSlideWidth()}px)`,
                    }}
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-[320px] md:w-[350px] mx-2 md:mx-4 group"
                        >
                            <div
                                className="flex flex-col justify-center items-center bg-zinc-800 p-5 rounded-2xl"
                            >
                                <img
                                    src={product.image}
                                    alt={`Product ${index + 1}`}
                                    className="w-auto h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-contain"
                                />
                            </div>
                            <h3 className="font-poppins ext-base text-black mt-4">
                                {product.title}
                            </h3>
                            <h3 className="font-poppins text-xl font-bold text-zinc-900">
                                {product.price}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex space-x-4 justify-center md:justify-end max-sm:justify-end w-full mt-6 mb-8">
                {/* Previous Button */}
                <button
                    onClick={handlePrevProducts}
                    className={`text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 transition-opacity ${currentIndexProducts === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={currentIndexProducts === 0}
                >
                    <span className="font-bold text-lg sm:text-xl">&#8592;</span>
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNextProducts}
                    className={`text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 transition-opacity ${currentIndexProducts >= products.length - maxVisibleSlides ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                    disabled={currentIndexProducts >= products.length - maxVisibleSlides}
                >
                    <span className="font-bold text-lg sm:text-xl">&#8594;</span>
                </button>
            </div>
        </div>
    );
};

export default RecommendedProducts;