import React from "react";
import bg from "../../assets/title-bg.jpg";
import Breadcrumb from "../../Component/Shop/Breadcrumb";
import FeaturedJobs from "../../Component/Shop/LeftSideBar/FeaturedJobs";
import Filters from "../../Component/Shop/LeftSideBar/Filters";
import RelatedCategory from "../../Component/Shop/LeftSideBar/RelatedCategory";
import Trending from "../../Component/Shop/LeftSideBar/Trending";
import ProductCard from "../../Component/Shop/Products/ProductCard";
import ProductsTop from "../../Component/Shop/Products/ProductsTop";

const Shop = () => {
  return (
    <div>
      <div
        className=""
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "Cover",
        }}
      >
        <div className="bg-[#2b2d32] opacity-70 py-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="uppercase text-[2rem] text-white font-bold">Shop</h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="col-span-3">
            <RelatedCategory />
            <Filters />
            <Trending />
            <FeaturedJobs />
          </div>
          <div className="col-span-9">
            <ProductsTop />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
