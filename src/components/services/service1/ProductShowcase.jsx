"use client";
import React, { useEffect, useRef, useState } from "react";
import bars from "../../../assets/images/services/service1/bars.png";
import coins from "../../../assets/images/services/service1/coins.png";
import scrap from "../../../assets/images/services/service1/scrap.png";

const ProductShowcase = () => {
    const products = [
        {
            image: bars,
            altText: "Gold bars",
            title: "Bars",
            description:
                "Investment-grade precious metal bars of various weights and purities.",
        },
        {
            image: coins,
            altText: "Gold and silver coins",
            title: "Coins",
            description:
                "Minted gold and silver coins suitable for investors and collectors.",
        },
        {
            image: scrap,
            altText: "Gold scrap metal",
            title: "Scrap Metals",
            description:
                "Including jewelry scrap and dore bars sourced directly from mines.",
        },
    ];

    const [isVisible, setIsVisible] = useState([false, false, false]);

    const productRefs = useRef([]);

    // Handle intersection observer to trigger animation when cards are in view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = productRefs.current.indexOf(entry.target);
                    setIsVisible((prev) => {
                        const newVisibility = [...prev];
                        newVisibility[index] = true;
                        return newVisibility;
                    });
                }
            });
        }, { threshold: 0.5 });

        productRefs.current.forEach((product) => {
            observer.observe(product);
        });

        return () => observer.disconnect();
    }, []);

    // Define the transition classes based on the product index
    const getAnimationClass = (index) => {
        if (!isVisible[index]) return "";
        switch (index) {
            case 0:
                return "animate-left"; // First card from left
            case 1:
                return "animate-top"; // Second card from top
            case 2:
                return "animate-right"; // Third card from right
            default:
                return "";
        }
    };

    const ProductCard = ({ image, altText, title, description, index }) => {
        return (
            <article
                ref={(el) => (productRefs.current[index] = el)}
                className={`flex flex-col items-center opacity-0 transition-all duration-1000 ease-in-out ${getAnimationClass(index)}`}
            >
                <img
                    src={image}
                    alt={altText}
                    className="object-cover h-[280px] rounded-[30px] w-[300px] max-md:w-[350px] max-md:h-[330px] max-sm:w-[290px] max-sm:h-[270px]"
                />
                <div className="mt-7 text-center w-[234px] max-sm:w-[90%]">
                    <h2 className="mb-2 text-base font-bold text-black max-sm:text-sm">
                        {title}
                    </h2>
                    <p className="text-base leading-normal text-black max-sm:text-sm">
                        {description}
                    </p>
                </div>
            </article>
        );
    };

    return (
        <section className="flex flex-wrap gap-10 justify-center items-center p-5 mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:max-w-[991px] max-sm:gap-8 max-sm:p-2.5 max-sm:max-w-screen-sm">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    altText={product.altText}
                    title={product.title}
                    description={product.description}
                    index={index}
                />
            ))}
        </section>
    );
};

export default ProductShowcase;
