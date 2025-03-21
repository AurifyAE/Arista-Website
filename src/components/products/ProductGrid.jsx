"use client";
import React from "react";

// ProductCard Component
const ProductCard = ({ imageUrl, altText }) => {
    return (
        <article className="flex flex-col w-[310px] max-sm:w-[170px] md:w-[300px] lg:w-[310px]">
            <div className="flex justify-center items-center px-10 py-14 rounded-2xl bg-zinc-800 h-[342px] max-sm:h-[210px] max-sm:p-auto">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-[229px] h-[229px] object-cover max-sm:w-[140px] max-sm:h-[140px]"
                />
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-base text-black">PAMP 1 Gram</h3>
                <p className="text-xl font-semibold tracking-tighter leading-5 text-zinc-900">
                    AED 500.12
                </p>
            </div>
        </article>
    );
};

// NavigationArrow Component
const NavigationArrow = ({ direction = "right", disabled = false }) => {
    const svgClasses = `w-[66px] h-[67px] ${disabled ? "opacity-[0.2]" : ""}`;
    const transform = direction === "left" ? "matrix(-1 0 0 1 65 0)" : "";
    const pathD =
        direction === "left"
            ? "M30.6341 40C30.819 40 31.0039 39.9333 31.1499 39.7903C31.4321 39.5138 31.4321 39.0563 31.1499 38.7798L25.7589 33.4988L31.1499 28.2178C31.4321 27.9413 31.4321 27.4838 31.1499 27.2073C30.8677 26.9309 30.4006 26.9309 30.1184 27.2073L24.2117 32.9936C23.9295 33.27 23.9295 33.7276 24.2117 34.004L30.1184 39.7903C30.2644 39.9333 30.4493 40 30.6341 40Z"
            : "M35.3659 40C35.181 40 34.9961 39.9333 34.8501 39.7903C34.5679 39.5138 34.5679 39.0563 34.8501 38.7798L40.2411 33.4988L34.8501 28.2178C34.5679 27.9413 34.5679 27.4838 34.8501 27.2073C35.1323 26.9309 35.5994 26.9309 35.8816 27.2073L41.7883 32.9936C42.0705 33.27 42.0705 33.7276 41.7883 34.004L35.8816 39.7903C35.7356 39.9333 35.5507 40 35.3659 40Z";

    const pathM =
        direction === "left"
            ? "M24.8928 34.2137H41.2702C41.6691 34.2137 42 33.8896 42 33.4988C42 33.108 41.6691 32.7839 41.2702 32.7839H24.8928C24.4939 32.7839 24.163 33.108 24.163 33.4988C24.163 33.8896 24.4939 34.2137 24.8928 34.2137Z"
            : "M41.1072 34.2137H24.7298C24.3309 34.2137 24 33.8896 24 33.4988C24 33.108 24.3309 32.7839 24.7298 32.7839H41.1072C41.5061 32.7839 41.837 33.108 41.837 33.4988C41.837 33.8896 41.5061 34.2137 41.1072 34.2137Z";

    return (
        <svg
            width="66"
            height="67"
            viewBox="0 0 66 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={svgClasses}
        >
            <g opacity={disabled ? "0.2" : "1"}>
                <rect
                    x="-0.5"
                    y="0.5"
                    width="65"
                    height="66"
                    rx="32.5"
                    transform={transform}
                    stroke={disabled ? "#7C8034" : "black"}
                />
                <path d={pathD} fill={disabled ? "#7C8034" : "black"} />
                <path d={pathM} fill={disabled ? "#7C8034" : "black"} />
            </g>
        </svg>
    );
};

// Pagination Component
const Pagination = ({ currentPage = 2 }) => {
    return (
        <nav
            className="flex gap-6 justify-center items-center mt-6"
            aria-label="Pagination"
        >
            <button
                className="flex items-center justify-center"
                aria-label="Previous page"
            >
                <NavigationArrow direction="left" disabled={currentPage === 1} />
            </button>

            <div className="w-12 h-12 bg-black rounded-md" aria-hidden="true" />

            <span
                className="text-base font-bold leading-7 text-black"
                aria-current="page"
            >
                {currentPage}
            </span>

            <button
                className="flex items-center justify-center"
                aria-label="Next page"
            >
                <NavigationArrow direction="right" />
            </button>
        </nav>
    );
};

// ProductGrid Component
const ProductGrid = () => {
    const products = [
        {
            id: 1,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 2,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/09cff4c59571ab435bb2a77196cb611684cd9dc4",
        },
        {
            id: 3,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/61c2d0c841ab7336c8ef198d4acf4afec3f9f502",
        },
        {
            id: 4,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 5,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/a51445b850c969f6d57f532fd2e1d1d69062f53d",
        },
        {
            id: 6,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 7,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 8,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 9,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 10,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 11,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
        {
            id: 12,
            imageUrl:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4bd5655fe8883d8d734d2202d8be14e9a8b7ef8b",
        },
    ];

    return (
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:gap-6 sm:p-4 max-sm:gap-12">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        altText="PAMP Gold Bar"
                    />
                ))}
            </div>
            <Pagination />
        </section>
    );
};

export default ProductGrid;
