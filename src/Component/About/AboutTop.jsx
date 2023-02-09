import React from "react";
import bg from "../../assets/abouts.jpg";

const AboutTop = () => {
  return (
    <div
      className="h-80 lg:h-[550px] flex items-center"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "Cover",
      }}
    >
      <h1 className="text-4xl text-white font-bold uppercase lg:ml-52 mx-auto">
        About Us
      </h1>
    </div>
  );
};

export default AboutTop;
