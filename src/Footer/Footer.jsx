import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import Container from "../components/Container/Container";

const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-10 md:mt-10">
        <Container>
          <div className="py-10 md:py-20 text-white px-3 grid grid-cols-1 md:grid-cols-6 ">
            {/* Div 1 */}
            <div className="md:col-span-2 mb-5 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-start">
                CS — Ticket System <span className="text-lg">- By Shihab</span>
              </h2>
              <p className="md:w-96 text-[#a1a1aa] text-sm text-justify">
                CS — Ticket System is a modern customer-support and
                ticket-tracking platform that helps teams manage and resolve
                issues faster. From login problems to billing queries,
                SupportHub keeps every request organized in one place and makes
                it easy for customers to get timely help.
              </p>
            </div>
            {/* Div 2 */}
            <div className="mb-5">
              <h2 className="md:text-lg font-bold mb-2">Company</h2>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="footerLink cursor-pointer w-fit">About Us</li>
                <li className="footerLink cursor-pointer w-fit">Our Mission</li>
                <li className="footerLink cursor-pointer w-fit">Contact Us</li>
              </ul>
            </div>
            {/* Div 3 */}
            <div className="mb-5">
              <h2 className="md:text-lg font-bold mb-2">Services</h2>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="footerLink cursor-pointer w-fit">
                  Products & Services
                </li>
                <li className="footerLink cursor-pointer w-fit">
                  Customer Stories
                </li>
                <li className="footerLink cursor-pointer w-fit">
                  Download Apps
                </li>
              </ul>
            </div>
            {/* Div 4 */}
            <div className="mb-5">
              <h2 className="md:text-lg font-bold mb-2">Information</h2>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="footerLink cursor-pointer w-fit">
                  Privacy Policy
                </li>
                <li className="footerLink cursor-pointer w-fit">
                  Terms & Conditions
                </li>
                <li className="footerLink cursor-pointer w-fit">Join Us</li>
              </ul>
            </div>
            {/* Div 5 */}
            <div>
              <h2 className="md:text-lg font-bold mb-2">Social Links</h2>
              <ul className="space-y-2 text-[#a1a1aa] text-sm">
                <li className="flex items-center gap-2 cursor-pointer w-fit group">
                  <TiSocialTwitter size={20} />
                  <span
                    className="transition-colors duration-500 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                  >
                    @CS — Ticket System
                  </span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer w-fit group">
                  <TiSocialLinkedinCircular size={20} />
                  <span
                    className="transition-colors duration-500 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                  >
                    @CS — Ticket System
                  </span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer w-fit group">
                  <TiSocialFacebookCircular size={20} />
                  <span
                    className="transition-colors duration-500 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                  >
                    @CS — Ticket System
                  </span>
                </li>
                <li className="flex items-center gap-3 cursor-pointer w-fit group">
                  <CgMail size={20} />
                  <span
                    className="transition-colors duration-500 
                    group-hover:text-transparent group-hover:bg-clip-text 
                    group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                  >
                    support@cst.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-5 md:py-7 border-t">
            <p className="text-[#fafafa] text-sm text-center ">
              © 2025 CS — Ticket System.{" "}
              <span className="block md:inline-block">
                All rights reserved.
              </span>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
