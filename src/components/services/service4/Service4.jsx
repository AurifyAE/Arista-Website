import React from 'react';
import serviceImage1 from "../../../assets/images/service4.png";
import ProductShowcase from "./ProductShowcase";
import ClientTypes from "./ClientTypes";
import ServiceAvailability from "./ServiceAvailability";
import Products from "../Products";

const Service1 = () => (
    <div>
        {/* Physical Precious Metal Trading */}
        <section className="flex flex-col px-36 w-full max-md:px-10 max-sm:px-5">
            <h2 className="gap-3.5 mt-20 text-3xl font-bold text-black max-md:mt-36 max-md:text-3xl max-sm:mt-24 max-sm:text-2xl font-poppins">
                Secure Precious Metal Delivery Worldwide
            </h2>
            <figure className="relative mt-14 w-full">
                <img
                    src={serviceImage1}
                    alt="Physical Precious Metal Trading"
                    className="w-full h-[282px] rounded-[47px] object-cover"
                />
                <figcaption className="absolute bottom-0 px-14 py-7 w-full text-3xl font-bold text-white backdrop-blur-[33.5px] bg-zinc-950 bg-opacity-50 h-[154px] rounded-[50px] max-md:px-8 max-md:text-2xl max-sm:px-5 max-sm:text-xl">
                    Through a robust logistics network, Arista ensures secure delivery of precious metals to any destination globally.
                </figcaption>
            </figure>
        </section>

        {/* What We Offer */}
        <section className="flex flex-col w-full mt-16">
            <div className="relative w-full">
                <h2 className="px-40 pb-16 text-3xl font-bold text-black max-md:px-20 max-sm:px-5 max-sm:text-2xl  font-poppins">
                    What We Offer
                </h2>
                <div className="w-full bg-orange-50 bg-opacity-50 py-5" >
                    <ProductShowcase />
                </div>
            </div>
        </section>

        {/* Who Can Benefit */}
        {/* <section className="px-36 max-md:px-10 max-sm:px-5 py-10 mx-auto my-0 w-full">
            <h2 className="mb-10 text-3xl font-bold text-black max-sm:text-2xl  font-poppins">
                Who Can Benefit
            </h2>
            <div className="flex gap-10 justify-between max-md:flex-col max-md:items-center">
                <ClientTypes />
            </div>
        </section> */}


        {/* How to avail this Service: */}
        <ServiceAvailability />

        {/* Our Products */}
        <Products />
    </div>
);

export default Service1;