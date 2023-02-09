import React from "react";

const Error = () => {
  return (
    <div className="py-[65px]">
      <h1 className="lg:text-[90px] md:text-5xl text-3xl font-bold text-[#333333] text-center">
        NOT FOUND
      </h1>
      <p className="my-[30px] font-bold  md:text-lg text-[#6a6a6a] text-center">
        CAN'T FIND WHAT YOU NEED, TAKE A MOMENT AND DO A SEARCH BELOW
      </p>
      <div className="flex justify-center">
        <div className="mb-3 md:w-[650px]">
          <div className="relative flex  items-stretch w-full mb-4">
            <input
              type="search"
              className="flex-auto h-12 block px-3 py-1.5 text-base font-normal text-[#f25862] bg-[#91b2c33c] focus:outline-none placeholder:text-black/50"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="px-4 py-2.5 bg-[#f25862] text-white font-medium text-xs flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
