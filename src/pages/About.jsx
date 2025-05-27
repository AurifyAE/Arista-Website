import React from 'react';
import image from "../assets/images/about.jpg"

const About = () => {
    return (
        <section className="py-16 px-36 max-sm:px-8">
            <div className="container mx-auto px-0">
                {/* Heading Section */}
                <div className="flex flex-col">
                    <h1 className="font-poppins font-bold text-[33px] text-center mb-4 mt-5">
                        Welcome to Arista
                    </h1>
                    <p className="font-poppins font-bold text-[16px] text-center text-[#B39844] mb-8">
                        Legacy | Trust | Sustainability | Competitiveness
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Located in Dubai's renowned Gold Souk, Arista stands as a beacon of trust, transparency, and excellence in the precious metals trading industry. With a history rooted in Indian heritage, particularly Tamil Nadu, and a vast clientele that spans South Asian expatriates, global businesses, and large corporate buyers, Arista has earned its place as a leader in the market.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Arista, we believe in a future where tradition meets innovation, guided by the principles of sustainability, compliance, and value creation. Our operations are built on decades of experience, a robust understanding of the supply chain, and a commitment to leveraging these strengths for our client's success.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={image}
                            alt="Gold Bullion"
                            className="w-full h-auto rounded-[30px] shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
