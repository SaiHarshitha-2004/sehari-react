import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "../App.css"
import { titleSize, subtitleSize } from "./Styles"
import { CgProfile } from "react-icons/cg";



const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isVerticalScrolled, setIsVerticalScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      if (scrollTop > 50) {
        setIsVerticalScrolled(true);
      } else {
        setIsVerticalScrolled(false);
      }
    };
  
    const handleResize = () => {
      const windowSize = window.innerWidth;
      if (windowSize > 1000) {
        setMenu(false);
      }
    };
  
    handleResize();
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  
  const openMenuButton = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="z-20">
        <div className={`z-10 w-full flex justify-between px-10 py-5 text-semibold text-4xl whitespace-nowrap max-md:flex-wrap ${isVerticalScrolled ? 'bg-red-50 fixed top-0  text-black ' : 'text-black'}`}>
          <div className="flex-auto my-auto">SEHARI</div>

          {/* desktop navbar */}
          <div className="hidden lg:flex px-10 flex-col">
            <div className="flex flex-col justify-center items-end px-5 py-7 w-full text-3xl font-lightwhitespace-nowrap  max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between">
                <a href="/" className={`grow cursor-pointer full-width-underline  subtitle ${subtitleSize}`}>Home</a>
                <a href="/services" className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}>Services</a>
                <a href="#"  className={`grow cursor-pointer full-width-underline subtitle ${subtitleSize}`}>Contact us</a>
                <a href="/login" className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}>Login</a>

              </div>
            </div>
          </div>

          {/* Mobile view  */}
          <div className="lg:hidden z-10">
            <div>
              <CiMenuBurger
                onClick={openMenuButton}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="z-10 lg:hidden fixed top-0 right-0 max-w-fit-content" onClick={openMenuButton}>
          <div className="bg-black bg-opacity-25 w-screen h-screen backdrop-blur-sm p-10">
            <div className="absolute max-w-fit-content top-0 right-0 flex flex-col w-1/2 h-screen px-5 py-5 bg-red-50">
              <IoCloseOutline
                onClick={openMenuButton}
                className="cursor-pointer flex"
              />
              <div className="flex h-1/2">
                <div className="flex flex-col  items-center justify-between h-full flex-grow">
                  <a href="/" className={`px-4 py-2 full-width-underline pb-2 substitle ${subtitleSize}`}>Home</a>
                  <a href="/services" className={`px-4 py-2 full-width-underline pb-2 substitle ${subtitleSize}`}>Services</a>
                  <a href="#" className={`px-4 py-2 full-width-underline pb-2 substitle ${subtitleSize}`}>Contact us</a>
                  <a href="/login" className={`px-4 py-2 full-width-underline pb-2 substitle ${subtitleSize}`}>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;
