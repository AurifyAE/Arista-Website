"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // List of services
  const services = [
    "Physical Precious Metal Trading",
    "Precious Metal Consignment Financing",
    "Hedging and Risk Management",
    "Secure Precious Metal Delivery Worldwide",
    "Global Metal Transfer Swap",
    "Assay Services",
    "Refinery Services",
    "Storage and Vaulting Services",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Company Logo Section */}
      <div className="bg-black p-3 md:p-4">
        <div className="flex justify-center">
          <a href="/" aria-label="Go to Homepage">
            <img src={logo} alt="Company Logo" className="h-16 md:h-20 lg:h-24" />
          </a>
        </div>
      </div>


      {/* Navigation Links Section */}
      <div className="bg-white p-3 md:p-4 relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex justify-center space-x-6 lg:space-x-16 xl:space-x-32">
            <li>
              <Link
                to="/about-us"
                className="text-black font-poppins font-bold text-[16px] hover:text-yellow-500 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/bullions"
                className="text-black font-poppins font-bold text-[16px] hover:text-yellow-500 transition-colors duration-200"
              >
                Why Bullion
              </Link>
            </li>
            {/* Services dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer">
                <Link
                  to="/services"
                  className="text-black font-poppins font-bold text-[16px] hover:text-yellow-500 transition-colors duration-200 mr-1"
                >
                  Services
                </Link>
                <svg
                  className="w-4 h-4 text-black group-hover:text-yellow-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Dropdown menu */}
              <ul className="absolute left-0 hidden bg-white text-black space-y-2 top-full group-hover:block p-4 shadow-lg min-w-[250px] lg:min-w-[350px] z-50 rounded-b-lg">
                {services.map((service, index) => (
                  <li key={index} className="py-1">
                    <Link
                      to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-black text-[14px] hover:text-yellow-500 transition-colors duration-200 block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                to="/all-products"
                className="text-black font-poppins font-bold text-[16px] hover:text-yellow-500 transition-colors duration-200"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col">
              <li className="py-3 px-4 border-b border-gray-100">
                <Link
                  to="/about-us"
                  className="text-black font-poppins font-bold text-[16px] block"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="py-3 px-4 border-b border-gray-100">
                <Link
                  to="/bullions"
                  className="text-black font-poppins font-bold text-[16px] block"
                  onClick={toggleMenu}
                >
                  Why Bullion
                </Link>
              </li>
              {/* Services dropdown for mobile */}
              <li className="border-b border-gray-100">
                <div
                  className="flex items-center justify-between py-3 px-4 cursor-pointer"
                  onClick={toggleServicesDropdown}
                >
                  <Link
                    to="/services"
                    className="text-black font-poppins font-bold text-[16px]"
                    onClick={(e) => e.preventDefault()}
                  >
                    Services
                  </Link>
                  <svg
                    className={`w-4 h-4 text-black transition-transform duration-200 ${servicesDropdownOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {/* Mobile dropdown list */}
                {servicesDropdownOpen && (
                  <ul className="bg-gray-50 text-black py-2">
                    {services.map((service, index) => (
                      <li key={index} className="py-2 px-8">
                        <Link
                          to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-black text-[14px] block"
                          onClick={toggleMenu}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="py-3 px-4">
                <Link
                  to="/all-products"
                  className="text-black font-poppins font-bold text-[16px] block"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;