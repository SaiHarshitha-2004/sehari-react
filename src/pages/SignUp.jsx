import React from "react";
import login from "../images/login.jpg";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {

      // Make a POST request to your server endpoint for signup
      const response = await fetch("http://localhost:8000/api/sehariDatabase/users", {
       method : "POST",
       credentials : "include",
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ 
        email : email, 
        password : password 
      }),     
      });
      // Handle success response
      if(response.ok){
        console.log("success");
      }
      else{
        console.log("response is ",response)
        console.error("Error creating post");
      }
      
      const data = await response.json();

    } catch (error) {
      // Handle error response
      console.error("Error occurred during signup:", error);
    }
  }
  return (
    <div className="flex justify-center w-full h-full items-center px-1 py-1 bg-white max-md:px-2 mb-5">
      <div className="mt-16 w-1/2 h-64max-md:mt-10">
        <div className="flex gap-0 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <img
              src={login}
              className="grow w-full aspect-[0.7] max-md:max-w-full"
            />
          </div>
          <div className="flex border border-indigo-300 rounded-2xl  flex-col ml-0 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center py-10 pr-10 pl-9 w-full text-xl bg-white max-md:px-5 max-md:max-w-full">
              <div className="mt-2.5 text-3xl font-semibold text-black whitespace-nowrap">
                Create Account
              </div>
              <div className="flex z-10 flex-col justify-center mt-5 max-w-full text-black bg-white w-[330px] max-md:mt-10">
                <div className="relative w-full top-5 border border-black  flex items-center mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <CiSearch />
                    </span>
                  </div>
                  <input
                    type="email" value={email} required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="email address"
                  />
                </div>
              </div>
              <div className="flex z-10 flex-col justify-center mt-10 max-w-full text-black bg-white w-[330px] max-md:mt-10">
                <div className="relative w-full top-5 border border-black  flex items-center mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <CiSearch />
                    </span>
                  </div>
                  <input
                    type="password" value={password} required
                    onChange={(e) => setPassword(e.target.value)}

                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center mt-8 max-w-full font-medium text-black bg-indigo-300 w-[296px]">
                <button  type="submit"  onClick={handleSignUp} className="justify-center text-center items-start py-6 pr-16 pl-2.5 bg-indigo-300 max-md:pr-5">
                  {" "}
                  SIGN UP
                </button>
                {error && <p className="error">{error}</p>}

              </div>
              <div className="flex gap-5 justify-between items-center mt-12 text-black whitespace-nowrap max-md:mt-10">
                <div className="shrink-0 self-stretch my-auto h-px bg-black border border-black border-solid w-[87px]" />
                <div className="self-stretch">or</div>
                <div className="shrink-0 self-stretch my-auto h-px bg-black border border-black border-solid w-[87px]" />
              </div>
              <img
                src="" alt=""
              />
              <div className="flex gap-5 mt-24 text-lg whitespace-nowrap max-md:mt-10">
                <div className="grow text-black">Already have an account?</div>
                <a href="/profile" className="justify-center py-0.5 font-semibold text-indigo-300 bg-white">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
