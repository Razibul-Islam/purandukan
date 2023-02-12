import React from "react";
import { BsChevronRight } from "react-icons/bs";

const RelatedCategory = () => {
  return (
    <div className="border-b border-x border-[#ededed] mb-8">
      <h2 className="py-[10px] px-[15px] bg-[#3b3d42] text-base uppercase tracking-[0.1875rem] text-white border-t-[3px] border-[#f79800]">
        RELATED CATEGORIES
      </h2>
      <div>
        <ol className="p-[15px]">
          <li className="flex items-center cursor-pointer hover:text-[#f79800]">
            <span>
              <BsChevronRight className="text-[13px]" />
            </span>{" "}
            <span className="py-[10px] px-[15px]">Women</span>
          </li>
          <li className="flex items-center cursor-pointer hover:text-[#f79800]">
            <span>
              <BsChevronRight className="text-[13px]" />
            </span>{" "}
            <span className="py-[10px] px-[15px]">Men</span>
          </li>
          <li className="flex items-center cursor-pointer hover:text-[#f79800]">
            <span>
              <BsChevronRight className="text-[13px]" />
            </span>{" "}
            <span className="py-[10px] px-[15px]">Kids</span>
          </li>
          <li className="flex items-center cursor-pointer hover:text-[#f79800]">
            <span>
              <BsChevronRight className="text-[13px]" />
            </span>{" "}
            <span className="py-[10px] px-[15px]">Party Wear</span>
          </li>
          <li className="flex items-center cursor-pointer hover:text-[#f79800]">
            <span>
              <BsChevronRight className="text-[13px]" />
            </span>{" "}
            <span className="py-[10px] px-[15px]">Sports Wear</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RelatedCategory;
