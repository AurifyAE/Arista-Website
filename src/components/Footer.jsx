"use client";

import FooterLink from "./footer/FooterLink";
import FooterSection from "./footer/FooterSection";
import SocialIcons from "./footer/SocialIcons";

const Footer = () => {
  return (
    <footer className="px-60 pt-12 pb-10 bg-black max-md:px-16 max-md:pt-10 max-md:pb-8 max-sm:px-5 max-sm:pt-8 max-sm:pb-5">
      <div className="flex gap-52 justify-start mb-10 max-md:flex-wrap max-md:gap-10 max-sm:flex-col max-sm:gap-8">
        <FooterSection title="COMPANY">
          <nav className="flex flex-col">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/policies">Policies</FooterLink>
            <FooterLink href="/faqs">Faqs</FooterLink>
            <FooterLink href="/trading-partner">Trading Partner</FooterLink>
            <FooterLink href="/physical-bullion">Physical Bullion</FooterLink>
            <FooterLink href="/precious-metals">Precious Metals</FooterLink>
          </nav>
        </FooterSection>

        <FooterSection title="BUSINESS">
          <nav className="flex flex-col">
            <FooterLink href="/bullion-account">Bullion Account</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/economic-calendar">Economic Calendar</FooterLink>
            <FooterLink href="/clients-feedback">Clients Feedback</FooterLink>
            <FooterLink href="/etihad-gold-bars">Etihad Gold Bars</FooterLink>
            <FooterLink href="/suisse-gold-bars">Suisse Gold Bars</FooterLink>
            <FooterLink href="/canadian-silver-coins">
              Canadian Silver Coins
            </FooterLink>
            <FooterLink href="/emirates-silver-bars">
              Emirates Silver bars
            </FooterLink>
          </nav>
        </FooterSection>

        <FooterSection title="CONTACT US">
          <address className="text-sm leading-7 text-white not-italic">
            Shop no:1, Hakkim Building,
            <br />
            Gold Souq, PO Box : 379742, Deira, Dubai, UAE
            <br />
            <a
              href="tel:+97142256116"
              className="hover:text-yellow-600 transition-colors"
            >
              +971 42256116
            </a>
            ,{" "}
            <a
              href="mailto:info@aristagold.com"
              className="hover:text-yellow-600 transition-colors"
            >
              info@aristagold.com
            </a>
          </address>
        </FooterSection>

        <FooterSection title="FOLLOW US">
          <SocialIcons />
        </FooterSection>
      </div>

      <p className="text-md leading-7 text-center text-[#B39844]">
        Arista 2025. All rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;
