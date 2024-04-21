import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "../App.css";
import { subtitleSize } from "./Styles";

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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenuButton = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="z-20 border border-gray-300 border-3">
        <div
          className={`z-10 w-full flex justify-between px-10 py-3 text-semibold text-4xl border border-white shadow-lg whitespace-nowrap max-md:flex-wrap bg-light-color  text-black  ${
            isVerticalScrolled ? "fixed top-0 " : ""
          }`}
        >
          <div className="flex-auto my-auto">SEHARI</div>

          {/* desktop navbar */}
          <div className="hidden lg:flex px-10 flex-col">
            <div className="flex flex-col justify-center items-end px-5 py-3 w-full text-3xl font-lightwhitespace-nowrap  max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between">
                <a
                  href="/"
                  className={`grow cursor-pointer full-width-underline  subtitle ${subtitleSize}`}
                >
                  Home
                </a>
                <a
                  href="/services"
                  className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}
                >
                  Services
                </a>
                <a
                  href="/login"
                  className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}
                >
                  Login
                </a>
              </div>
            </div>
          </div>

          {/* Mobile view  */}
          <div className="lg:hidden z-10">
            <div>
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button">
                    <CiMenuBurger
                      onClick={openMenuButton}
                      className="cursor-pointer"
                    />
                  </label>
                </div>
                <div onClick={openMenuButton}  className="drawer-side">
                  <label 
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul  className="cursor-pointer flex flex-col p-4 w-80 h-full bg-light-color text-base-content">
                    {/* Sidebar content here */}

                    <div className="">
                      <IoCloseOutline />
                    </div>
                    <div className="flex justify-between  h-1/3 w-full items-center flex-col">
                      <li>
                        {" "}
                        <a
                          href="/"
                          className={`grow cursor-pointer pb-3 full-width-underline  text-2xl title`}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="/services"
                          className={`flex-auto cursor-pointerpb-3  full-width-underline text-2xl title`}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login"
                          className={`flex-auto cursor-pointer pb-3 full-width-underline text-2xl title`}
                        >
                          Login
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
