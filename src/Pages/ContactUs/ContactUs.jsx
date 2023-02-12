import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 basis-10 lg:mx-6">
            <h1 className="text-2xl font-normal text-[#333333] capitalize lg:text-2xl">
              OUR OFFICE
            </h1>

            <div className="mt-6 space-y-2 md:mt-8 text-[#6a6a6a] text-[13px]">
              <p className="flex items-center">
                <MdLocationOn className="text-base" />
                <span className="mx-2 text-gray-700 truncate w-72 ">
                  ADDRESSS: LOREM IPSUM DOLOR
                </span>
              </p>

              <p className="flex items-center">
                <IoCall className="text-base" />
                <span className="mx-2 text-gray-700 truncate w-72 ">
                  (800) 0123 4567 890
                </span>
              </p>

              <p className="flex items-center">
                <HiOutlineMail className="text-base" />
                <span className="mx-2 text-gray-700 truncate w-72 ">
                  SUPPORT@TOKITHEMES.COM
                </span>
              </p>

              <p className="flex items-center">
                <MdLocationOn className="text-base" />
                <span className="mx-2 text-gray-700 truncate w-72 ">
                  ADDRESS: LOREM IPSUM DOLOR
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform bg-[#2f2f2f] w-[35px] h-[35px] flex justify-center items-center text-sm rounded-full hover:bg-[#f25862]"
                  href="/"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform bg-[#2f2f2f] w-[35px] h-[35px] flex justify-center items-center text-sm rounded-full hover:bg-[#f25862]"
                  href="/"
                >
                  <FaTwitter />
                </a>

                <a
                  className="mx-1.5 text-white transition-colors duration-300 transform bg-[#2f2f2f] w-[35px] h-[35px] flex justify-center items-center text-sm rounded-full hover:bg-[#f25862]"
                  href="/"
                >
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-full lg:mx-6">
            <div className="w-full px-0 lg:px-8 py-10 mx-auto overflow-hidden ">
              <h1 className="text-2xl font-normal text-[#333333]">
                CONTACT US
              </h1>

              <form className="mt-4">
                <div className="flex gap-5 lg:gap-10">
                  <div className="flex-1  text-[#6a6a6a] text-[13px] font-normal">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="block w-full px-5 py-2 mt-2 bg-white border border-[#eaeaea]"
                    />
                  </div>
                  <div className="flex-1  text-[#6a6a6a] text-[13px] font-normal">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="block w-full px-5 py-2 mt-2 bg-white border border-[#eaeaea] "
                    />
                  </div>
                </div>

                <div className="flex gap-5 lg:gap-10 mt-4">
                  <div className="flex-1  text-[#6a6a6a] text-[13px] font-normal">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="block w-full px-5 py-2 mt-2 bg-white border border-[#eaeaea] "
                    />
                  </div>
                  <div className="flex-1  text-[#6a6a6a] text-[13px] font-normal">
                    <input
                      type="text"
                      placeholder="Website"
                      className="block w-full px-5 py-2 mt-2 bg-white border border-[#eaeaea] "
                    />
                  </div>
                </div>

                <div className="flex-1  text-[#6a6a6a] text-[13px] font-normal mt-4">
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="block w-full px-5 py-2 mt-2 bg-white border border-[#eaeaea] "
                  />
                </div>

                <div className="w-full mt-4  text-[#6a6a6a] text-[13px] font-normal">
                  <textarea
                    className="block w-full h-32 px-5 py-2 mt-2 bg-white border border-[#eaeaea] md:h-48 "
                    placeholder="Message*"
                  ></textarea>
                </div>

                <button className="px-9 py-3 mt-4 text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-[#f25862] float-right  hover:bg-[#999999] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  send email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
