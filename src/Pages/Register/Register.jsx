import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div>
      <div className="md:flex   gap-3  justify-center mt-5 text-center">
        <div className="flex justify-center mt-3 ">
          <button className=" flex items-center w-[300px] md:w-[250px]   gap-3 font-semibold text-base  bg-[#37528D] py-1.5 px-4 rounded-md text-white">
            <GrFacebookOption className="border-r-2 border-gray-700 text-2xl " />{" "}
            Sign in with Facebook
          </button>
        </div>

        <div className="flex justify-center mt-3 ">
          <button className=" flex items-center w-[300px] md:w-[250px]  font-semibold text-base  bg-[#D04636] py-1.5 px-4 rounded-md text-white ">
            <FcGoogle className="mr-3 text-2xl  rounded-md bg-[white] " />
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="text-center">
          <p className="font-semibold text-[#3b3d42] text-xl">
            Registered Customers
          </p>
          <p className="mt-2 text-[#5d5d5d] font-semibold">
            If you have an email account, sign in with your email address
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[500px] p-7">
          <form>
            <div className="form-control w-full  mt-4">
              <label className="label mt-2">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input  w-full   outline-gray-300  py-1.5 border-[1.5px]  rounded-sm mt-2 px-3"
              />
            </div>

            <div className="form-control w-full  mt-4">
              <label className="label">
                {" "}
                <span className="label-text mt-2">Password </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input  w-full    outline-gray-300 py-1.5 border-[1.5px]  rounded-sm mt-2 px-3"
              />
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-lg accent-gray-700"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Show Password
              </label>
            </div>

            <div className="mt-5">
              <button className="w-full font-semibold text-white bg-[#f79800] hover:bg-[#0f99de] py-1.5 rounded-md block ">
                Sign In
              </button>

              <p className="mt-2 flex justify-end font-semibold cursor-pointer text-[#5d5d5d]">
                Forgot Your Password ?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
