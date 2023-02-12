import React from "react";
import { AiFillStar } from "react-icons/ai";
import image1 from "../../../assets/product1-1.jpg";
import image2 from "../../../assets/product2-1.jpg";
import image3 from "../../../assets/product3-1.jpg";
import image4 from "../../../assets/product4-1.jpg";

const Trending = () => {
  return (
    <div className="border-b border-x border-[#ededed] mb-8">
      <h2 className="py-[10px] px-[15px] bg-[#3b3d42] text-base uppercase tracking-[0.1875rem] text-white border-t-[3px] border-[#f79800]">
        TRENDING
      </h2>
      <div className="p-[15px]">
        <div className="flex">
          <div className="max-w-[100px] mb-4 mr-[10px]">
            <img
              src={image1}
              alt=""
              className="border-4 border-[#fefefe] transition-shadow duration-[0.2s] ease-out bg"
            />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#5d5d5d] hover:text-[#f79800] cursor-pointer">Red hot skirt with laces</h3>
            <p className="text-[#f79800] font-bold">$22</p>
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[100px] mb-4 mr-[10px]">
            <img
              src={image4}
              alt=""
              className="border-4 border-[#fefefe] transition-shadow duration-[0.2s] ease-out bg"
            />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#5d5d5d] hover:text-[#f79800] cursor-pointer">Red hot skirt with laces</h3>
            <p className="text-[#f79800] font-bold">$22</p>
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[100px] mb-4 mr-[10px]">
            <img
              src={image3}
              alt=""
              className="border-4 border-[#fefefe] transition-shadow duration-[0.2s] ease-out bg"
            />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#5d5d5d] hover:text-[#f79800] cursor-pointer">Red hot skirt with laces</h3>
            <p className="text-[#f79800] font-bold">$22</p>
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[100px] mb-4 mr-[10px]">
            <img
              src={image2}
              alt=""
              className="border-4 border-[#fefefe] transition-shadow duration-[0.2s] ease-out bg"
            />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#5d5d5d] hover:text-[#f79800] cursor-pointer">Red hot skirt with laces</h3>
            <p className="text-[#f79800] font-bold">$22</p>
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
