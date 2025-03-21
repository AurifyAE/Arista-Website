"use client";
import React, { useState } from "react";

const ProductPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState("description");

    const images = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f38e40ca726a05eecf1c592354aaf7543de1983b3f4d547b4438e6a73c3eb034?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
            thumbnail:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/304ff63ec29f3cedff9a622a9fe4b3ad335a8410e70e2474f201f75f1197cf8f?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f79855e2a2e29529bedbc2b21e12b4ed807437c831b1abc4d4cdf00f8ec4778?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
            thumbnail:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/7f79855e2a2e29529bedbc2b21e12b4ed807437c831b1abc4d4cdf00f8ec4778?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c30c060af1e4832e00f4e6cb19d4ec35cdba5da5d7640a0f5f565b89a00376f6?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
            thumbnail:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/c30c060af1e4832e00f4e6cb19d4ec35cdba5da5d7640a0f5f565b89a00376f6?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/22e123ddaf89f619f681c533dc2ca387a073bf008043cf6d0f65fcef28c7e74b?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
            thumbnail:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/22e123ddaf89f619f681c533dc2ca387a073bf008043cf6d0f65fcef28c7e74b?placeholderIfAbsent=true&apiKey=568f728627d34c6e8fee78087b99426b",
        },
    ];

    const productDetails = {
        name: "PAMP 1 Gram",
        sku: "PAMP1gram_01",
        price: "AED 500.12",
        specification: "Each bar is individually registered and sealed within protective certiPAMP packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.",
    };

    // Function to handle "Enquire Now" button click
    const handleEnquireNow = () => {
        const phoneNumber = "+919746791421"; 
        const message = `
            Hello, I am interested in the following product:
            Name: ${productDetails.name}
            SKU: ${productDetails.sku}
            Price: ${productDetails.price}
            Specification: ${productDetails.specification}
        `;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="flex flex-row justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full gap-20 max-sm:flex-col">
            {/* Image Gallery */}
            <div>
                <div className="max-w-full rounded-none w-[644px]">
                    <div className="flex flex-col justify-center px-16 py-16 rounded-3xl bg-stone-900 max-md:px-5 max-md:max-w-full max-sm:py-8">
                        <img
                            src={images[currentImage].src}
                            alt="Product"
                            className="object-contain w-full aspect-square max-md:max-w-full max-sm:w-full max-sm:h-[220px]"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 max-sm:gap-auto items-center mt-6 w-full max-w-[644px] max-md:max-w-full">
                    {/* Previous Button */}
                    <button
                        onClick={() =>
                            setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev))
                        }
                        className={`text-black px-8 py-6 max-sm:hidden max-sm:px-4 max-sm:py-2 rounded-full border-2 transition-opacity ${currentImage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={currentImage === 0}
                        aria-label="Previous image"
                    >
                        <span className="font-bold text-lg sm:text-xl">&#8592;</span>
                    </button>

                    {/* Image Thumbnails */}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            onClick={() => setCurrentImage(index)}
                            className={`object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[87px] max-sm:w-[60px] cursor-pointer ${currentImage === index ? "ring-2 ring-black" : ""}`}
                        />
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() =>
                            setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : prev))
                        }
                        className={`text-black px-8 py-6 max-sm:hidden max-sm:px-4 max-sm:py-2 rounded-full border-2 transition-opacity ${currentImage === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                        disabled={currentImage === images.length - 1}
                        aria-label="Next image"
                    >
                        <span className="font-bold text-lg sm:text-xl">&#8594;</span>
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <article className="mt-0 w-full max-md:mt-0 max-md:max-w-full">
                <div className="max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        <header className="flex flex-col self-start font-semibold text-black">
                            <h1 className="self-start text-2xl leading-none">{productDetails.name}</h1>
                            <p className="mt-4 text-xs text-neutral-400">SKU: {productDetails.sku}</p>
                            <p className="mt-6 text-3xl leading-none">{productDetails.price}</p>
                        </header>

                        <button
                            onClick={handleEnquireNow}
                            className="flex justify-center mt-10 items-center px-2 py-5 text-base font-semibold tracking-tight bg-black rounded-lg w-[305px] max-w-[305px] max-sm:w-full max-sm:max-w-[200px] max-sm:px-4 max-sm:py-3 max-md:px-5 max-md:max-w-full"
                        >
                            <span className="font-poppins text-stone-50">Enquire Now</span>
                        </button>
                    </div>
                </div>

                <nav className="flex gap-10 mt-11 max-w-full text-base leading-loose whitespace-nowrap w-[391px] max-md:mt-10">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`px-10 py-1.5 font-poppins rounded-[30px] ${activeTab === "description" ? "bg-[#B39844] text-stone-50" : "text-black"
                            } max-md:px-5`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab("specification")}
                        className={`px-10 py-1.5 font-poppins rounded-[30px] my-auto  ${activeTab === "specification" ? "bg-[#B39844] text-stone-50" : "text-black"
                            }`}
                    >
                        Specification
                    </button>
                </nav>

                <hr className="shrink-0 mt-7 h-px border border-black border-solid max-md:max-w-full" />

                {activeTab === "specification" && (
                    <p className="mt-9 mr-9 ml-3 text-base leading-7 text-black max-md:mr-2.5 max-md:max-w-full">
                        {productDetails.specification}
                    </p>
                )}

                {activeTab === "description" && (
                    <p className="mt-9 mr-9 ml-3 text-base leading-7 text-black max-md:mr-2.5 max-md:max-w-full">
                        {productDetails.specification}
                    </p>
                )}
            </article>
        </div>
    );
};

export default ProductPage;
