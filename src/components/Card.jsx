import React from "react";

function Card({ image, text1, text2, imgDesc, reverse }) {
  return (
    <div
      className={
        reverse
          ? "shadow-md flex flex-col space-y-10 items-center p-10 rounded-lg md:space-y-0 md:flex-row md:justify-around "
          : "shadow-md flex flex-col space-y-10 items-center p-10 rounded-lg md:space-y-0 md:flex-row-reverse md:justify-around "
      }
    >
      <img src={image} alt={imgDesc} className=" md:h-72 object-contain " />
      <div className="text-center flex flex-col space-y-3 max-w-md md:text-left">
        <p className="text-xl lg:text-2xl text-darkColor font-semibold">
          {text1}
        </p>
        <p className=" text-sm lg:text-base text-grayBlue">{text2}</p>
      </div>
    </div>
  );
}

export default Card;
