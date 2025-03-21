"use client";

import * as React from "react";

function HeroSection() {
    return (
        <article className="relative  h-[246px]  mx-4 max-sm:mx-4">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/641cdc7b5d4672b572903a043bcc8e163e3ac07d"
                alt="PAMP precious metals facility"
                className="w-full h-full object-cover"
            />
            <div
                className="absolute inset-0 bg-neutral-800 bg-opacity-70"
                aria-hidden="true"
            />
            <h2 className="absolute text-2xl font-bold leading-normal text-white bottom-[15px] inset-x-[30px] max-md:text-xl max-sm:text-lg">
                PAMP is a Swiss-based world leader in refining and producing
                high-quality, innovative, and trusted precious metal products.
            </h2>
        </article>
    );
}

export default HeroSection;
