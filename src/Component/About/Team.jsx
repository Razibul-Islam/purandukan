import React from "react";
import designer from "../../assets/about4.jpg";
import marketer from "../../assets/about3.jpg";
import ceo from "../../assets/about2.jpg";

const Team = () => {
  return (
    <div className="bg-[#F2F2F2] py-10">
      <h1 className="text-4xl font-bold text-center text-[#333333]">
        MEET OUR TEAM OF EXPERTS
      </h1>
      <div className="px-5 flex flex-wrap items-center justify-center gap-7 py-16">
        <div>
          <img src={designer} alt="" />
          <div className="text-center mt-4 text-lg font-bold">
            <h1>JOHNY BRAVISSIMO</h1>
            <h1 className="text-sm">DESIGNER</h1>
          </div>
        </div>
        <div>
          <img src={marketer} alt="" />
          <div className="text-center mt-4 text-lg font-bold">
            <h1>JOHNY BRAVISSIMO</h1>
            <h1 className="text-sm">MARKETER</h1>
          </div>
        </div>
        <div>
          <img src={ceo} alt="" />
          <div className="text-center mt-4 text-lg font-bold">
            <h1>JOHNY BRAVISSIMO</h1>
            <h1 className="text-sm">CEO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
