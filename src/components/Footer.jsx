import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FootCard from "./FootCard";

// Footer Images
import LogoW from "../images/logoW.svg";
import Location from "../images/icon-location.svg";
import Contact from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    // Footer
    <div className="px-7 shadow-md bg-darkColor text-white flex flex-col items-center text-sm lg:px-20">
      <FootCard />
      {/* logo */}
      <div className="mx-auto container mb-5">
        <img src={LogoW} alt="footer Logo" className="object-contain h-5" />
      </div>
      <div className="flex flex-col mx-auto container space-y-10 lg:space-y-0 lg:flex-row lg:justify-between ">
        <ul className="flex flex-col space-y-5 max-w-md">
          <li className="flex flex-row items-start ">
            <img src={Location} alt="" />
            <div className="ml-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </li>
          <li className="flex flex-row items-center ">
            <img src={Contact} alt="" />
            <div className="ml-6">+1-543-123-4567</div>
          </li>
          <li className="flex flex-row items-center ">
            <img src={Email} alt="" />
            <div className="ml-6">example@huddle.com </div>
          </li>
        </ul>
        <div className="flex flex-col space-y-4 w-1/3 lg:space-y-0 lg:flex-row lg:justify-around ">
          {/* Links */}
          <ul className="flex flex-col space-y-4">
            <li className="hover:cursor-pointer hover:underline">About Us</li>
            <li className="hover:cursor-pointer hover:underline">What We Do</li>
            <li className="hover:cursor-pointer hover:underline">FAQ</li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li className="hover:cursor-pointer hover:underline">Career</li>
            <li className="hover:cursor-pointer hover:underline">Blog</li>
            <li className="hover:cursor-pointer hover:underline">Contact Us</li>
          </ul>
        </div>
        {/* Brand Logos */}
        <div className="flex flex-row self-center space-x-3 lg:space-y-0 lg:self-start">
          <div className="">
            <FontAwesomeIcon
              icon={faFacebook}
              size="sm"
              className="rounded-full border-2 p-2 hover:text-introButton hover:border-introButton hover:cursor-pointer"
            />
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faTwitter}
              size="sm"
              className="rounded-full border-2 p-2 hover:text-introButton hover:border-introButton hover:cursor-pointer"
            />
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faInstagram}
              size="sm"
              className="rounded-full border-2 p-2 hover:text-introButton hover:border-introButton hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mx-auto container text-center py-8 text-xs lg:text-right">
        © Copyright 2018 Huddle. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
