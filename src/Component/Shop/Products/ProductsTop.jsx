import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

const ProductsTop = () => {
  return (
    <div className="border-t border-[#ededed]">
      <div className="py-[25px] flex items-center justify-between">
        <div className="flex">
          <p className="bg-[#f0f0f0] text-[#222] p-[6px] text-lg">
            <BsFillGridFill />
          </p>
          <p className="bg-[#222]  text-lg text-white p-[6px]">
            <FaListUl className="" />
          </p>
        </div>
        <div className="text-[#5d5d5d]">
          <span className="italic">View:</span>
          <select className="max-w-sm border p-[6px] border-[#cacaca] ml-[5px] focus:outline-none">
            <option value="06">06</option>
            <option value="09">09</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="text-[#5d5d5d]">
          <span className="italic">Sort by:</span>
          <select className="border p-[6px] border-[#cacaca] ml-[5px] focus:outline-none">
            <option value="Default sorting">Default sorting</option>
            <option value="Sort by Popularity">Sort by Popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="Sort by Newness">Sort by Newness</option>
            <option value="Sort by price: Low to High">
              Sort by price: Low to High
            </option>
            <option value="Sort by price: High to Low">
              Sort by price: High to Low
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsTop;
