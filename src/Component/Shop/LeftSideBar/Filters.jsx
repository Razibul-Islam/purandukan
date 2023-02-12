import React from "react";

const Filters = () => {
  return (
    <div className="border-b border-x border-[#ededed] mb-8">
      <h2 className="py-[10px] px-[15px] bg-[#3b3d42] text-base uppercase tracking-[0.1875rem] text-white border-t-[3px] border-[#f79800]">
        FILTERS
      </h2>
      <div className="p-[15px]">
        <div className="mb-4">
          <label
            class="form-check-label inline-block text-gray-800"
            for="TopRated"
          >
            Top Rated
          </label>
          <input
            class="h-4 w-4 mt-1 align-top  ml-[15px] cursor-pointer"
            type="checkbox"
            value=""
            id="TopRated"
          />
        </div>
        <div className="mb-4">
          <label
            class="form-check-label inline-block text-gray-800"
            for="SaleItems"
          >
            Sale Items
          </label>
          <input
            class="h-4 w-4 mt-1 align-top  ml-[15px] cursor-pointer"
            type="checkbox"
            value=""
            id="SaleItems"
          />
        </div>
        <div className="mb-[15px]">
          <label>Price</label>
          <input
            type="text"
            className="w-[75px] text-[#5d5d5d] border border-[#cacaca] focus:border-[#8a8a8a] focus:bg-[#fefefe] focus:outline-none focus:shadow-[#cacaca] transition duration-[0.25s] ease-in-out mr-[10px] ml-[10px]"
            style={{ boxShadow: "inset 0 1px 2px hsl(0deg 0% 4% / 10%)" }}
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="text"
            className="w-[75px] text-[#5d5d5d] border border-[#cacaca] focus:border-[#8a8a8a] focus:bg-[#fefefe] focus:outline-none focus:shadow-[#cacaca] transition duration-[0.25s] ease-in-out mr-[10px] ml-[10px]"
            style={{ boxShadow: "inset 0 1px 2px hsl(0deg 0% 4% / 10%)" }}
            placeholder="Max"
          />
        </div>
        <div>
          <input
            type="button"
            value="apply"
            className="uppercase bg-[#0f99de] text-[#fefefe] rounded-[3px] font-bold text-[1rem] py-[10px] px-[25px] hover:bg-[#f79800] transition duration-[0.25s] ease-out cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
