import React from "react";
// Navbar logo
import Logo from "../images/logo.svg";
// Buttons
import IntroButton from "./IntroButton";
import NavButton from "./NavButton";
// images
import IntroImage from "../images/illustration-mockups.svg";
function Intro() {
  return (
    <div className="px-7 bg-heroBg bg-heroMobile bg-no-repeat lg:bg-heroDesktop lg:px-20">
      {/* Navigation Bar */}
      <nav className="container mx-auto flex flex-row justify-between items-center py-8 ">
        <img
          src={Logo}
          alt="Logo huddle"
          className="object-contain h-4 md:h-6"
        />
        {/* Button */}
        <NavButton />
      </nav>
      {/* Hero Section */}
      <div className="mx-auto container flex flex-col items-center py-10 space-y-10 lg:space-y-0 lg:justify-between lg:flex-row">
        <div className="text-center flex flex-col space-y-5 items-center max-w-xl lg:items-start lg:text-left md:w-1/2 ">
          <p className="text-2xl text-darkColor font-semibold lg:text-4xl">
            Build The Community <br /> Your Fans Will Love
          </p>
          <p className=" px-2 text-lg lg:px-0 lg:pr-3">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <IntroButton />
        </div>
        <img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={IntroImage}
          className="md:w-1/2"
          alt="hero"
        />
      </div>
    </div>
  );
}

export default Intro;
