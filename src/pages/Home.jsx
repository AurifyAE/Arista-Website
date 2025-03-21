import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import bgVideo from "../assets/bgVideo.mp4";
import Products from "../components/home/Products";
import Services from "../components/home/Services";
import imageOverlay from "../assets/imageOverlay.png";
import whyChooseUs from "../assets/images/whyChooseUs.png";
import aristaExperience from "../assets/images/aristaExperience.png";
import ChartSection from "../components/Chart";
import {
  fetchSpotRates,
  fetchServerURL,
} from "../api/api";
import io from "socket.io-client";
import { useSpotRate } from "../context/SpotRateContext";
import '../app.css';

// Import Glider.js styles
import "glider-js/glider.min.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serverURL, setServerURL] = useState("");
  const [marketData, setMarketData] = useState({});
  const [commodities, setCommodities] = useState([]);
  const [goldBidSpread, setGoldBidSpread] = useState("");
  const [goldAskSpread, setGoldAskSpread] = useState("");
  const [silverBidSpread, setSilverBidSpread] = useState("");
  const [silverAskSpread, setSilverAskSpread] = useState("");
  const [symbols, setSymbols] = useState(["GOLD", "SILVER"]);
  const [error, setError] = useState(null);

  const { updateMarketData } = useSpotRate();

  const adminId = import.meta.env.VITE_APP_ADMIN_ID;

  updateMarketData(
    marketData,
    goldBidSpread,
    goldAskSpread,
    silverBidSpread,
    silverAskSpread
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [spotRatesRes, serverURLRes] = await Promise.all([
          fetchSpotRates(adminId),
          fetchServerURL(),
        ]);

        // Handle Spot Rates
        const {
          commodities,
          goldBidSpread,
          goldAskSpread,
          silverBidSpread,
          silverAskSpread,
        } = spotRatesRes.data.info;
        setCommodities(commodities);
        setGoldBidSpread(goldBidSpread);
        setGoldAskSpread(goldAskSpread);
        setSilverBidSpread(silverBidSpread);
        setSilverAskSpread(silverAskSpread);

        // Handle Server URL
        const { serverURL } = serverURLRes.data.info;
        setServerURL(serverURL);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data");
      }
    };

    fetchData();

    // // Fetch TV screen data (you can leave this as a separate call)
    // fetchTVScreenData(adminId)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       // Allow TV screen view
    //       setShowLimitModal(false);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 403) {
    //       setShowLimitModal(true); // Show the modal on 403 status
    //     } else {
    //       console.error("Error:", error.message);
    //       alert("An unexpected error occurred.");
    //     }
    //   });
  }, [adminId]);

  // Function to Fetch Market Data Using Socket
  useEffect(() => {
    if (serverURL) {
      const socket = io(serverURL, {
        query: { secret: import.meta.env.VITE_APP_SOCKET_SECRET_KEY },
        transports: ["websocket"],
        withCredentials: true,
      });

      socket.on("connect", () => {
        // console.log("Connected to WebSocket server");
        socket.emit("request-data", symbols);
      });

      socket.on("disconnect", () => {
        // console.log("Disconnected from WebSocket server");
      });

      socket.on("market-data", (data) => {
        if (data && data.symbol) {
          setMarketData((prevData) => ({
            ...prevData,
            [data.symbol]: {
              ...prevData[data.symbol],
              ...data,
              bidChanged:
                prevData[data.symbol] && data.bid !== prevData[data.symbol].bid
                  ? data.bid > prevData[data.symbol].bid
                    ? "up"
                    : "down"
                  : null,
            },
          }));
        } else {
          // console.warn("Received malformed market data:", data);
        }
      });

      socket.on("error", (error) => {
        // console.error("WebSocket error:", error);
        setError("An error occurred while receiving data");
      });

      // Cleanup function to disconnect the socket
      return () => {
        socket.disconnect();
      };
    }
  }, [serverURL, symbols]);

  useEffect(() => {
    // Trigger the animation after component is mounted
    setIsVisible(true);
  }, []);

  const maxVisibleSlides = 3; // Number of visible slides at a time

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about-us');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-20">
      <div className="flex flex-col px-36 max-sm:px-8">
        <h1 className="font-poppins font-bold text-[40px] text-center mb-4 mt-5">
          Welcome to Arista Gold
        </h1>
        <p className="font-poppins font-bold text-[18px] text-center text-[#B39844] mb-8">
          Legacy | Trust | Sustainability | Competitiveness
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full overflow-hidden rounded-[25px] px-36 max-sm:px-8">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="w-full h-[20vw] max-sm:h-[20vw] object-cover rounded-t-[50px] max-sm:rounded-t-[20px]"
        ></video>

        <div className="absolute bottom-0  h-[30%] max-sm:h-[50%] max-sm:w-[88%] bg-transparent flex justify-center items-center rounded-b-[25px]">
          <img
            src={imageOverlay}
            alt="Image Overlay"
            className="w-full h-full object-contain mt-5 max-sm:mt-8"
          />
        </div>
      </div>

      {/* About Us */}
      <div className="flex flex-col justify-center items-center mt-5 px-36 max-sm:px-8">
        <p className="text-center px-32 max-sm:px-4 text-base max-sm:text-sm">
          Located in Dubai’s renowned Gold Souk, Arista Gold stands as a beacon of trust, transparency, and excellence in the precious metals trading industry. With a history rooted in Indian heritage, particularly Tamil Nadu, and a vast clientele that spans South Asian expatriates, global businesses, and large corporate buyers, Arista Gold has earned its place as a leader in the market.
        </p>
        <button
          onClick={handleLearnMoreClick}
          className="mt-5 border-2 rounded-md border-black py-3 px-8 max-sm:px-4 max-sm:py-2 max-sm:w-[120px]">
          Learn More
        </button>
      </div>

      {/* Live Rate Chart */}
      <ChartSection />

      {/* Our Services Section */}
      <Services />

      {/* Our Products Section */}
      <Products />


      {/* Why Choose Us */}
      <div className="flex flex-col justify-center items-center overflow-hidden w-full mt-36 px-20 max-sm:px-8">
        <h2 className="font-[Montserrat] font-extrabold text-[40px] leading-[100%]">
          Why Choose Us?
        </h2>
        <div
          className={`transition-transform duration-[3000ms] ease-in-out transform ${isVisible ? 'translate-x-0' : 'translate-x-[-90%]'} max-sm:mt-6`}
        >
          <img
            src={whyChooseUs}
            alt="Why Choose Us"
            className="h-[315px] max-sm:h-[180px] w-full object-cover"
            style={{ borderRadius: "35px", marginTop: "3.5vw" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-60 max-sm:px-4 mt-16">
          <div className="flex flex-col justify-between h-auto lg:h-[380px] flex-1 px-0">
            {/* 1 */}
            <div>
              <div className="flex flex-row mb-6">
                <div className="font-poppins font-bold text-[40px] sm:text-[50px] lg:text-[55px] leading-[100%] mr-5 text-[#BA8A54] mb-0 lg:mb-0">
                  1.
                </div>
                <div>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Legacy of</p>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Excellence</p>
                </div>
              </div>
              <div className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[100%]">
                Decades of experience and a steadfast reputation make us a trusted partner in the precious metals industry.
              </div>
            </div>

            {/* 3 */}
            <div className="max-sm:mt-16">
              <div className="flex flex-row mb-6">
                <div className="font-poppins font-bold text-[40px] sm:text-[50px] lg:text-[55px] leading-[100%] mr-5 text-[#BA8A54] mb-0 lg:mb-0">
                  3.
                </div>
                <div>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Compliance</p>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Leadership</p>
                </div>
              </div>
              <div className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[100%]">
                Arista Gold follows stringent AML (Anti-Money Laundering) practices and global compliance frameworks to ensure secure and ethical operations. We prioritize adherence to UAE laws, including goAML portal reporting and risk assessments, providing peace of mind to our clients and partners.
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="border-s-2 border-[#B39844] mx-0 lg:mx-24 my-8 lg:my-0"></div>

          <div className="flex flex-col justify-between h-auto lg:h-[380px] flex-1 px-0">
            {/* 2 */}
            <div>
              <div className="flex flex-row mb-6">
                <div className="font-poppins font-bold text-[40px] sm:text-[50px] lg:text-[55px] leading-[100%] mr-5 text-[#BA8A54] mb-0 lg:mb-0">
                  2.
                </div>
                <div>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Sustainability</p>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Focus</p>
                </div>
              </div>
              <div className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[100%]">
                We care about the planet and future generations. Arista Gold aligns its operations with UAE government laws and guidelines for sustainable practices, ensuring responsible sourcing, trading, and operational transparency.
              </div>
            </div>

            {/* 4 */}
            <div className="max-sm:mt-16">
              <div className="flex flex-row mb-6">
                <div className="font-poppins font-bold text-[40px] sm:text-[50px] lg:text-[55px] leading-[100%] mr-5 text-[#BA8A54] mb-0 lg:mb-0">
                  4.
                </div>
                <div>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">Transparency</p>
                  <p className="font-poppins font-bold text-[22px] sm:text-[25px] lg:text-[30px] leading-[100%]">and Trust</p>
                </div>
              </div>
              <div className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[100%]">
                We care about the planet and future generations. Arista Gold aligns its operations with UAE government laws and guidelines for sustainable practices, ensuring responsible sourcing, trading, and operational transparency.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Arista Experience */}
      <div className="flex flex-col lg:flex-row bg-[#FDF5EB] w-full h-auto mt-24 py-8 sm:py-12 lg:py-16 px-4 max-sm:px-8 md:px-16 lg:px-24 xl:px-72 gap-6 lg:gap-12">
        {/* Left content (Text) */}
        <div
          ref={textRef} // Attach the intersection observer to this element
          className={`flex flex-col justify-center items-center lg:items-start flex-1 transition-all duration-[3000ms] ease-in-out ${textInView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-56 opacity-0'
            }`} // Apply the transition based on the `inView` state
        >
          <h1 className="font-[montserrat] font-bold text-sm sm:text-base lg:text-xl xl:text-2xl leading-normal lg:leading-tight text-center lg:text-left w-full">
            The Arista Experience
          </h1>
          <p className="font-poppins font-normal text-sm sm:text-base lg:text-lg xl:text-lg leading-relaxed mt-4 mb-4 sm:mt-6 sm:mb-6 text-center lg:text-left">
            By choosing Arista Gold, clients gain access to a world of possibilities in the precious metals industry, with services designed
            to maximize value, ensure security, and build lasting relationships.
          </p>
          <span className="font-poppins font-bold text-xs sm:text-sm lg:text-base xl:text-lg leading-normal text-center lg:text-left">
            Start your journey with Arista today!
          </span>
        </div>


        {/* Right content (Image) */}
        <div
          ref={imageRef} // Attach the intersection observer to this element
          className={`flex flex-1 overflow-hidden transition-all duration-[3000ms] hover:scale-105 ease-in-out h-64 sm:h-72 md:h-80 lg:h-auto ${imageInView ? 'transform -translate-x-100 opacity-100' : 'transform translate-x-56 opacity-0'
            }`} // Apply the transition based on the `inView` state
        >
          <img
            src={aristaExperience}
            alt="Arista Experience"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Subscribe */}
      <div className="flex flex-col justify-center items-center py-12 sm:py-16 md:py-24 px-56 max-sm:px-12">
        <h1 className="font-[montserrat] font-bold text-[24px] sm:text-[28px] md:text-[30px] leading-[100%] text-center">
          Sign up and receive our expert guide to buy gold
        </h1>
        <h2 className="font-poppins font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] mt-4 mb-8 text-center">
          Receive regular updates about gold bars and bullion
        </h2>
        <input
          type="text"
          placeholder="Enter your email id"
          className="font-poppins font-normal text-center text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] mb-8 border-b-2 border-gray-900 focus:outline-none focus:border-black-500 p-2 w-[80%] sm:w-[70%] md:w-[60%]"
        />
        <button className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] border-2 border-gray-900 py-2 px-12 maxsm:px-8 md:px-16">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
