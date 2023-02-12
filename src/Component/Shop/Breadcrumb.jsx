import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="rounded-md w-full mt-[15px] mb-10">
      <ol className="list-reset flex text-[0.65rem]">
        <li>
          <a href="/" className="text-blue-600 hover:text-blue-700">
            Home
          </a>
        </li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li>
          <a href="/" className="text-blue-600 hover:text-blue-700">
            FEATURES
          </a>
        </li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li className="text-[#cacaca] cursor-not-allowed">GENE SPLICING</li>
        <li>
          <span className="text-gray-500 mx-2">/</span>
        </li>
        <li className="text-[#0a0a0a]">CLONING</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
