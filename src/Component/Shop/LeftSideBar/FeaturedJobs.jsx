import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import stored from "../../../assets/store1.jpg";

const FeaturedJobs = () => {
  return (
    <div className="border-b border-x border-[#ededed] mb-8">
      <h2 className="py-[10px] px-[15px] bg-[#3b3d42] text-base uppercase tracking-[0.1875rem] text-white border-t-[3px] border-[#f79800]">
        FEATURED STORE
      </h2>
      <div className="p-[15px]">
        <img src={stored} alt="" />
        <div>
          <h4 className="mt-[15px] text-[#3b3d42] text-xl hover:text-[#f79800] cursor-pointer">
            Fajar Accessories & Fashion Store
          </h4>
          <div className="mt-[10px] flex items-center">
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
            <p className="text-[#5d5d5d] text-xs ml-[15px]">230 reviews</p>
          </div>
          <div className="flex items-center text-sm text-[#5d5d5d]">
            <MdLocationOn /> <span>25 Birmingham, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
