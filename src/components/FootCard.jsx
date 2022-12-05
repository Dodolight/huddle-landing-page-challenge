import React from "react";
import IntroButton from "./IntroButton";

function FootCard() {
  return (
    <div className=" shadow-lg bg-white relative flex flex-col items-center space-y-5 py-10 px-5 rounded-xl text-center bottom-24 w-full max-w-2xl">
      <p className="text-xl text-darkColor font-semibold lg:text-2xl">
        Ready To Build Your Community?
      </p>
      <IntroButton />
    </div>
  );
}

export default FootCard;
