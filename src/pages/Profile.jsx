import React from "react";
import { CiSearch } from "react-icons/ci";
import login from "../images/login.jpg";
const Profile = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-96 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src={login}
              className="grow w-full aspect-[0.7] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-16 pt-11 pb-20 w-full border border-indigo-300 rounded-2xl border-solid bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center max-w-full w-[336px]">
                <div className="flex gap-4 text-3xl font-semibold text-black whitespace-nowrap">
                  <div className="flex-auto">Welcome</div>
                  <div>back!</div>
                </div>
                <div className="mt-14 text-4xl font-semibold text-black max-md:mt-10">
                  Login
                  <br />
                </div>
                <div className="flex z-10 flex-col justify-center mt-16 mb-5 max-w-full text-black bg-white w-[330px] max-md:mt-10">
                  <div className="relative w-full top-5 border border-black  flex items-center mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">
                        <CiSearch />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="enter username"
                    />
                  </div>
                </div>
                <div className="flex z-10 flex-col justify-center mt-16 mb-5 max-w-full text-black bg-white w-[330px] max-md:mt-10">
                  <div className="relative w-full top-5 border border-black  flex items-center mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">
                        <CiSearch />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="enter password"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-3 max-w-full text-xl font-medium text-black bg-indigo-300 w-[296px]">
                  <div className="justify-center text-center items-start py-6 pr-16 pl-2.5 bg-indigo-300 max-md:pr-5">
                    {" "}
                    Continue
                  </div>
                </div>
                <div className="flex gap-5 justify-between items-center mt-11 text-xl text-black whitespace-nowrap max-md:mt-10">
                  <div className="shrink-0 self-stretch my-auto h-px bg-black border border-black border-solid w-[87px]" />
                  <div className="self-stretch">or</div>
                  <div className="shrink-0 self-stretch my-auto h-px bg-black border border-black border-solid w-[87px]" />
                </div>
                <div className="mt-12 text-xl font-semibold text-black whitespace-nowrap max-md:mt-10">
                  connect with
                </div>
                <div className="flex gap-5 justify-between mt-16 max-w-full w-[260px] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="flex-1 shrink-0 w-full aspect-[0.96]"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                </div>
                <div className="flex gap-5 self-stretch mt-32 text-xl font-semibold whitespace-nowrap max-md:mt-10">
                  <div className="grow text-black">don’t have an account?</div>
                  <a href="/signup" className="text-teal-500">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
