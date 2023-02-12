import React from "react";
import "./ProductCard.css";
import product1 from "../../../assets/product1-1.jpg";
import product2 from "../../../assets/product1-2.jpg";
import {
  AiFillStar,
  AiOutlineRetweet,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-[15px] duration-75 card">
        <div className="overflow-hidden relative cursor-pointer">
          <img src={product1} className="image1" alt="" />
          <img src={product2} className="image2" alt="" />
          <div className="absolute w-full px-[6px] py-3 bottom-0 opacity-90 bg-[#f7f7f7] card-sort">
            <ol className="flex w-full justify-around text-[#0f99de] text-base">
              <li>
                <BsFillHeartFill className="hover:text-[#f79800] cursor-pointer" />
              </li>
              <li>
                <AiOutlineRetweet className="hover:text-[#f79800] cursor-pointer" />
              </li>
              <li>
                <FaSearchPlus className="hover:text-[#f79800] cursor-pointer" />
              </li>
              <li>
                <AiOutlineShoppingCart className="hover:text-[#f79800] cursor-pointer" />
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h4 className="py-[10px] border-b border-b-[#ededed] font-bold capitalize text-center h-[42px] text-[#3b3d42] text-sm hover:text-[#f79800] cursor-pointer">
            Small Shirt Dress With Small Laces
          </h4>
          <div className="flex justify-center items-center py-[10px] text-[#5d5d5d] text-xs">
            <p>
              <span className="text-[#f79800] text-[1.2rem] font-bold">
                $234
              </span>{" "}
              <span> / Piece</span>
            </p>
            <p className="ml-5 line-through text-sm">$333</p>
          </div>
          <div className="flex justify-between items-center text-sm">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
