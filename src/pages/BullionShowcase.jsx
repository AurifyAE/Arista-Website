"use client";
import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import image1 from "../assets/images/bullions/bullion1.png"
import image2 from "../assets/images/bullions/bullion2.png"
import image3 from "../assets/images/bullions/bullion3.png"
import image4 from "../assets/images/bullions/bullion4.png"
import image5 from "../assets/images/bullions/bullion5.png"
import image6 from "../assets/images/bullions/bullion6.png"


const BullionShowcase = () => {
    const dynamicPath = "/bullions";

    const ArrowIcon = ({ className = "" }) => {
        return (
            <svg
                className={`w-4 h-4 ${className}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 18l6-6-6-6" />
            </svg>
        );
    };


    const BullionCard = ({ image, title, description }) => {
        return (
            <article className="flex relative flex-col items-center max-md:items-center">
                <div className="relative flex justify-center w-full" style={{ height: "350px" }}>
                    {/* Background div positioned absolutely */}
                    <div className="absolute bottom-0 rounded-2xl bg-zinc-800 h-[120px] w-[350px] max-w-full max-sm:w-[260px] max-sm:h-[100px]" />

                    {/* Image positioned with higher z-index */}
                    <img
                        src={image}
                        alt="Bullion item"
                        className="absolute z-10 h-auto max-w-[280px] bottom-0 max-sm:w-[160px]"
                        style={{ transform: "translateY(-15px)" }} // Move image down to overlap with background
                    />
                </div>


                <div className="mt-16 max-w-[596px] max-md:text-left">
                    <h2 className="mb-5 text-2xl font-semibold text-black max-sm:text-2xl">
                        {title}
                    </h2>
                    <p className="mb-5 text-base leading-7 text-black max-sm:text-sm">
                        {description}
                    </p>
                    <a
                        href="#"
                        className="text-base font-bold text-[#C29507] cursor-pointer hover:underline right-0"
                    >
                        Explore<ArrowIcon className="inline-block font-bold text-[#C29507]" />
                    </a>
                </div>

            </article>
        );
    };

    const BullionGrid = () => {
        const bullions = [
            {
                image: image1,
                altText: "PAMP Gold Bar",
                showDescription: true,
                title: "PAMP",
                description: "PAMP is a renowned precious metals refiner based in Switzerland, known for its high-quality gold bars.PAMP gold bars are highly trusted by investors and collectors due to the refinery's strong reputation for quality and precision. Their bars are recognized and accepted globally, making them a popular choice in the precious metals market.",
                navigation: ""
            },
            {
                image: image2,
                altText: "Valcambi Gold Bar",
                showDescription: true,
                title: "Valcambi Suisse",
                description: "The Valcambi Suisse is a highly regarded investment piece known for its purity and quality.These gold bars are highly trusted by investors and collectors due to Valcambi's reputation for producing high-quality and accurately weighted bars. They are also recognized globally, making them easy to trade and liquidate.",
                navigation: ""
            },
            {
                image: image3,
                altText: "PAMP Gold Bar",
                showDescription: true,
                title: "The Royal Mint",
                description: "With a history spanning more than 1,100 years, The Royal Mint is a British maker of thoughtfully designed products and services. They make original coin collections and gifts to celebrate special moments, and offer eye-opening experiences, investment opportunities and produce currency for the UK.",
                navigation: ""
            },
            {
                image: image4,
                altText: "Valcambi Gold Bar",
                showDescription: true,
                title: "Emirates Gold",
                description: "Emirates Gold minted bars are renowned for their exceptional purity, craftsmanship, and elegance. Produced in Dubai by one of the region's leading refineries, these bars are precision-crafted to meet the highest international standards, making them a trusted choice for investors and collectors alike",
                navigation: ""
            },
            {
                image: image5,
                altText: "Valcambi Gold Bar",
                showDescription: true,
                title: "Special  Edition Gold Coins",
                description: "Al Etihad Gold is a reputable gold refiner and mint located in Dubai, UAE, known for its high-quality gold products.Al Etihad Gold bars are trusted by investors and collectors due to the refinery's commitment to quality and precision. Their products are recognized globally, making them a reliable choice for those looking to invest in fine gold.",
                navigation: ""
            },
            {
                image: image6,
                altText: "PAMP Gold Bar",
                showDescription: true,
                title: "SAM",
                description: "Special gold coins are crafted with exceptional attention to detail, often featuring unique designs and limited mintages that make them highly desirable to collectors. These coins usually commemorate significant events, historical figures, or cultural icons, adding to their intrinsic and aesthetic value. Investing in special gold coins offers both a tangible asset and a piece of art, appealing to both investors and enthusiasts.",
                navigation: ""
            },
        ];

        return (
            <section className="grid gap-10 mx-auto my-0 grid-cols-[repeat(2,1fr)] max-w-[1200px] max-md:gap-8 max-md:grid-cols-[1fr]">
                {bullions.map((bullion, index) => (
                    <BullionCard
                        key={index}
                        image={bullion.image}
                        altText={bullion.altText}
                        description={bullion.description}
                        title={bullion.title}
                    />
                ))}
            </section>
        );
    };

    return (
        <main className="p-5 mx-auto my-0 max-w-[1400px] max-md:max-w-[991px] max-sm:p-4 max-sm:max-w-screen-sm mb-20">
            <Breadcrumb dynamicPath={dynamicPath} />
            <BullionGrid />
        </main>
    );
};

export default BullionShowcase;
