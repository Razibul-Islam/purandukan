import React from "react";
import { AiFillStar, AiOutlineRetweet } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import product1 from "../../../assets/product1-1.jpg";
import product2 from "../../../assets/product1-2.jpg";

const ProductHorizontalCard = () => {
  return (
    <>
      <div className="rounded-lg lg:flex md:flex card mb-[35px]">
        <img
          className="object-cover w-full md:w-1/2 lg:w-1/3 image1"
          src={product1}
          alt="ProductPhoto"
        />
        <img
          className="object-cover w-full md:w-1/2 lg:w-1/3 image2"
          src={product2}
          alt="ProductPhoto"
        />
        <div className="px-6 py-4">
          <h4 className="py-[10px] text-xl uppercase font-bold tracking-tight border-b border-b-[#ededed] text-[#3b3d42] hover:text-[#f79800] cursor-pointer">
            Sale SMALL SHIRT DRESS WITH SMALL LACES
          </h4>
          <div className="flex justify-start items-center py-[10px] text-[#5d5d5d] text-xs">
            <p>
              <span className="text-[#f79800] text-[1.2rem] font-bold">
                $234
              </span>{" "}
              <span> / Piece</span>
            </p>
            <p className="ml-5 line-through text-sm">$333</p>
          </div>
          <div className="flex justify-between items-center text-sm mb-[15px]">
            <p className="flex">
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#f79800]" />
              <AiFillStar className="text-[#ccc]" />
            </p>
            <p className="text-[#5d5d5d]">
              By:{" "}
              <span className="hover:text-[#f79800] cursor-pointer">
                Fajar Accessories
              </span>
            </p>
          </div>
          <p className="mb-[15px] text-sm leading-normal text-justify text-sky-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <div className="flex items-center flex-wrap">
            <button className="px-4 py-2 text-[0.9rem] rounded-[3px] font-bold bg-[#f79800] text-[#fefefe] hover:bg-[#0f99de] hover:text-[#fefefe] uppercase duration-300 ease-out">
              Add To Card
            </button>
            <ol className="flex text-[#5d5d5d] duration-150 text-base md:mt-5 lg:mt-0">
              <li className="px-4">
                <BsFillHeartFill className="hover:text-[#f79800] cursor-pointer" />
              </li>
              <li className="px-4">
                <AiOutlineRetweet className="hover:text-[#f79800] cursor-pointer" />
              </li>
              <li className="px-4">
                <FaSearchPlus className="hover:text-[#f79800] cursor-pointer" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHorizontalCard;
