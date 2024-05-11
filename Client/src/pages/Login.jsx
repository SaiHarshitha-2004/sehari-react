import React , {useState , useContext , useEffect} from "react";
import login from "../images/login.jpg";
import { IoLockClosedOutline } from "react-icons/io5";
import { TfiUser } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Context/Context";

import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login , isLoggedIn , showPopup , togglePopup} = useContext(AuthContext)


  const handleLogin = async () => {
    if(!email || !password){
      setError( "Email or password is required")
    }
    else{
    try {
      
      const response = await fetch("http://localhost:8000/database/login" , {
        method : "POST",
        credentials : "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email : email, 
          password : password 
        }),
       })
       if(response.ok){
        login()
        togglePopup()
        navigate("/")
      }
      else{
        setError("Email or password is incorrect")
      }
      

    } catch (error) {
      console.log("error in server side")
    }
  }
  }
  return (
    <>
      <div className="z-1 flex justify-center items-center bg-login px-16 py-20 max-md:px-5">
        <div className="flex gap-0 max-md:flex-col justify-center max-md:gap-0">
              <div className="flex flex-col  items-center pt-16 pb-16 max-w-full w-[500px] backdrop-blur-md shadow-2xl">
                <div className="flex gap-4 text-3xl font-semibold text-black whitespace-nowrap">
                  <div className="flex-auto">Welcome</div>
                  <div>back!</div>
                </div>
                {/* username */}
                <div className="flex z-1 flex-col justify-center  mt-5 mb-5 max-w-full w-[330px]">
                  <div className="relative w-full top-2 flex items-center rounded-md shadow-sm">
                      <TfiUser size="25" color="black" className="absolute pl-3 pointer-events-none"/> 
                      <input
                        type="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)}
                        className=" w-full rounded-md border-0 py-2 pl-8 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter email"
                        />                    
                    </div>
                  <div>{error && <p className="text-red-500 mt-3">{error}</p>}</div>
                </div>

                {/* password */}
                <div className="flex z-1 flex-col justify-center mt-5 mb-5 max-w-full w-[330px]">
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
                
                <div onClick={handleLogin}  className='w-1/2 text-center justify-center mt-7 p-3 text-xl title rounded-xl whitespace-nowrap 
                   bg-button-color transition ease-in-out delay-150 focus:bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-button-color duration-300 bg-opacity-60 max-md:px-5'>
                  <button type="submit" >login</button>
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
                <FaGoogle className="lg:w-1/5 md:w-full md:h-full  lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2" 
                  onClick=""/>
                  <CiFacebook  className="lg:w-1/4 md:w-full md:h-full  lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2"/>
                  <CiTwitter className="lg:w-1/4 md:w-full md:h-full  lg:h-full w-1/5 hover:rounded-md hover:border hover:border-black h-1/2" />
                </div>
                <div className="flex flex-wrap gap-5 mt-10 text-xl justify-center font-semibold whitespace-nowrap max-md:mt-10">
                  <div className="grow text-black">don’t have an account?</div>
                  <a href="/signup" className="text-teal-500 pb-2 full-width-underline">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Login;
