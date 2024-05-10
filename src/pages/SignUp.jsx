import React , { useState } from "react";
import login from "../images/login.jpg";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { TfiUser } from "react-icons/tfi";
import { IoLockClosedOutline } from "react-icons/io5";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {

      // Make a POST request to your server endpoint for signup
      const response = await fetch("http://localhost:8000/database/signup", {
        method : "POST",
        credentials : "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email : email, 
          password : password 
        }),     
      });
      
      if(response.ok){
        alert("evrything is ok , Account Verified")
        navigate("/login");
      }
      else{
        console.log("response is ",response)
        console.error("Error creating post");
      }
      
      const data = await response.json();

    } catch (error) {
      console.error("Error occurred during signup:", error);
    }
  }
  return (
    <>
    <div className=" bg-red-50">
      <NavBar />
    </div>
    <div className="z-2 flex justify-center items-center px-16 py-20 max-md:px-5">
      <div className="mt-10 w-full max-md:mt-10 ">
        <div className="flex gap-0 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src={login}
              className="grow w-full aspect-[0.7] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-0 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-16 pt-11 pb-20 w-full border border-indigo-300 rounded-r-3xl border-solid bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center max-w-full w-[336px]">
                <div className="flex gap-4 text-3xl font-semibold text-black whitespace-nowrap">
                  <div className="flex-auto">Welcome</div>
                  <div>back!</div>
                </div>
                <div className="mt-14 text-4xl font-semibold text-black max-md:mt-10">
                  Sign Up
                  <br />
                </div>

                {/* username */}
                <div className="flex flex-col justify-center  mt-5 mb-5 max-w-full w-[330px]">
                  <div className="relative w-full top-2 flex items-center rounded-md shadow-sm">
                      <TfiUser size="25" color="black" className="absolute pl-3 pointer-events-none"/> 
                      <input
                        type="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border-0 py-2 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter email"
                        />                    
                    </div>
                  <div>{error && <p className="text-red-500 mt-3">{error}</p>}</div>
                </div>

                {/* password */}
                <div className="flex z-2 flex-col justify-center mt-5 mb-5 max-w-full w-[330px]">
                  <div className="relative w-full top-2 flex items-center rounded-md shadow-sm">
                      <IoLockClosedOutline size="25" color="black" className="absolute pl-3 pointer-events-none"/> 
                      <input
                        type="password" value={password} required
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border-0 py-2 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter password"
                        />                    
                    </div>
                  <div>{error && <p className="text-red-500 mt-3">{error}</p>}</div>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-3 max-w-full border cursor-pointer hover:rounded-3xl text-xl font-medium text-black bg-indigo-300 w-[296px]">
                  <button type="submit" onClick={handleSignUp} className="text-center  items-start py-6  bg-indigo-300">
                    {" "} sign up
                  </button>
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
                  <CiInstagram  className="lg:w-1/4  md:w-full md:h-full lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2" />
                  <CiFacebook  className="lg:w-1/4 md:w-full md:h-full  lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2"/>
                  <CiTwitter className="lg:w-1/4 md:w-full md:h-full  lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2" />
                </div>
                <div className="flex gap-5 mt-10 text-xl font-semibold whitespace-nowrap max-md:mt-10">
                  <div className="grow text-black">Already have an account?</div>
                  <a href="/login" className="text-teal-500 pb-2 full-width-underline">
                     login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
