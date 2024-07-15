import React, { useEffect, useState , useContext} from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "../../App.css";
import { subtitleSize } from "./Styles";
import { AuthContext } from "../Context/Context";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isLoggedIn , logout , toggleLogOutPopup} = useContext(AuthContext);
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

  const LogOut = () => {
    logout();
    toggleLogOutPopup()

  }

  return (
    <>
      <div className="z-20 border border-gray-300 border-3">
        <div
          className={`z-10 w-full flex justify-between px-10 py-3 text-semibold text-4xl border border-white shadow-lg whitespace-nowrap max-md:flex-wrap bg-red-50  text-black  ${
            isVerticalScrolled ? "fixed top-0" : ""
          }`}
        >
          <div className="relative flex-auto my-auto">
            {/* <a href="/" className="cursor-pointer">
              SEHARI
            </a> */}
            <Link to="/" className="cursor-pointer">
              <div>SEHARI</div>
            </Link>
          </div>

          {/* desktop navbar */}
          <div className="hidden lg:flex flex-col">
            <div className="flex flex-col justify-center items-end px-5 py-3 w-full text-3xl font-lightwhitespace-nowrap  max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between">
                {/* <a
                  href="/services"
                  className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}
                >
                  Services
                </a> */}
                <Link to="/services" className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}
                >
                 <div>Services</div>
                </Link>
                {isLoggedIn ? (
                    <div className="flex flex-row">
                      <p className={`flex-auto cursor-pointer full-width-underline subtitle mr-5 ${subtitleSize}`} onClick={LogOut}>logout</p>
                      <CgProfile className="cursor-pointer" />        
                    </div>
                ) : (
                  // <a
                  //   href="/login"
                  //   className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}
                  // >
                  //   Login
                  // </a>
                  <Link to="/login" className={`flex-auto cursor-pointer full-width-underline subtitle ${subtitleSize}`}>
                    <div>Login</div>
                  </Link>
                  
                )}
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
                <div onClick={openMenuButton} className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="cursor-pointer flex flex-col p-4 w-80 h-full bg-light-color text-base-content">
                    {/* Sidebar content here */}

                    <div className="">
                      <IoCloseOutline />
                    </div>
                    <div className="flex justify-between  h-1/4 w-full items-center flex-col">
                    <li>
                      {isLoggedIn ? (
                        <Link
                          to="/"
                          className={`flex-auto cursor-pointer subtitle ${subtitleSize}`}
                        >
                          <CgProfile />
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className={`flex-auto cursor-pointer full-width-underline text-2xl subtitle ${subtitleSize}`}
                        >
                          Login
                        </Link>
                      )}
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/services"
                          className={`flex-auto cursor-pointer pb-2  full-width-underline text-2xl title`}
                        >
                          Services
                        </Link>
                      </li>
                    <li>
                      {isLoggedIn ? (
                        <Link
                          to="/"
                          className={`flex-auto cursor-pointer pb-2 full-width-underline text-2xl title`}
                          onClick={LogOut}
                        >
                          logout
                        </Link>
                      ) : ""}
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
