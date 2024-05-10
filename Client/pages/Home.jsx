import React , {useContext , useEffect} from "react";
import gallery from "../images/gallery.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "../HomeComponents/Carousel";
import BestVenues from "../HomeComponents/BestVenues";
import SehariWorks from "../HomeComponents/SehariWorks";
import services from "../images/services.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../Data/Animations";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import { AuthContext } from "../Context/Context";
import { IoIosLogOut } from "react-icons/io";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


const Card = ( {name , title , img }) => {
  return (

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-89">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col text-center items-center justify-center px-7 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-2xl pb-2 mb-7 top-0 font-semibold text-white">
           <button className="p-3">{name}</button>
        </h1>
        <h1 className="font-dmserif text-xl pb-3 top-0 font-bold text-white">{title}</h1>
        <button className="backdrop-blur-md py-4 px-3 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
  )    
}

const Home = () => {
  const {showPopup , toggleDownPopup , showSignUpPopup ,  showLogOutPopup , toggleDownSignUpPopup ,  toggleDownLogOutPopup } = useContext(AuthContext)

  // logout popUp effect
  useEffect(() => {
    const showPopupAfterLogin = () => {
      setTimeout(() => {
        toggleDownPopup();
      }, 2000);
    };

    showPopupAfterLogin();
  }, []);

  useEffect( () => {
    const showPopupAfterLogOut = () => {
      setTimeout(() => {
        toggleDownLogOutPopup();
      }, 2000);
    };

    showPopupAfterLogOut();
  })
   
  useEffect( () => {
    const showPopupAfterSignUp = () => {
      setTimeout(() => {
        toggleDownSignUpPopup();
      }, 2000);
    };
    showPopupAfterSignUp();
  })
  return (
    <>
      {/* login popup */}
      {showPopup ? ( 
          <div className="absolute flex justify-center top-0 w-full">
              <div role="alert" className="border w-[450px] transition-all duration-75 ease-in-out items-center border-green-500 bg-white rounded-lg p-5 flex justify-center">
                <span className="border p-1 bg-green-100"><TaskAltOutlinedIcon  className="w-8 h-8 text-green-500" /></span>
                <span className="title text-xl text-green-600 ml-5">Login Successfull!</span>
              </div>
          </div> ): ""
      }

      {/* logout popup */}
      {showLogOutPopup ? ( 
          <div className="absolute flex justify-center top-0 w-full">
              <div role="alert" className="border w-[450px] transition-all duration-75 ease-in-out items-center border-red-500 bg-white rounded-lg p-5 flex justify-center">
                <span className="border p-1 bg-red-100"><IoIosLogOut  className="w-8 h-8 text-red-500" /></span>
                <span className="title text-xl text-red-600 ml-5">Logout Successfull!</span>
              </div>
          </div> ): ""
      }
      
      {/* SignUp PopUp */}
      {showSignUpPopup ? ( 
        <div className="absolute flex justify-center top-0 w-full">
        <div role="alert" className="border w-[450px] transition-all duration-75 ease-in-out items-center border-green-500 bg-white rounded-lg p-5 flex justify-center">
          <span className="border p-1 bg-green-100"><TaskAltOutlinedIcon  className="w-8 h-8 text-green-500" /></span>
          <span className="title text-xl text-green-600 ml-5">SignUp Successfull!</span>
        </div>
        </div> ): ""
          
      }


        {/* home page title */}
        <div className="mt-0 w-full justify-center items-center  bg-home border bg-cover md h-[700px] flex flex-row">
          <div className="w-full h-full flex justify-center">
          <div className="ml-5 mr-5 p-5 w-full">
            <div className="justify-between flex h-full w-full flex-col text-center items-center">
             <div className="flex flex-col justify-center items-center h-full pl-5 pr-5">
              <div className="flex flex-col  text-center">
                  <div className="h-full overflow-hidden">
                    <motion.h1
                      variants={fadeIn("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7}}
                    >
                      <div className="title text-6xl text-center text-white">SEHARI</div>
                    </motion.h1>
                  </div>
                  <div className="h-full overflow-hidden">
                    <motion.h1
                      variants={fadeIn("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7}}
                    >
                    <div className="title text-3xl max-w-fit-content text-white pt-5">
                      Add a touch of the timeless
                    </div>
                  </motion.h1>
                  </div>
                </div>

                <div className="flex flex-wrap text-l pb-5 title text-center mt-5 text-white">
                  An online platform to make your event shine and find the venue
                  that matches your vision.
                </div>
                <div className="flex items-center">
                  <button className="bg-button-color title p-3 rounded-xl">
                    Explore Now
                  </button>
                  <div className="rating ml-10 flex gap-1">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 border bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 border bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 border bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask  mask-star-2 border bg-orange-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 border bg-orange-500"
                    />
                  </div>
                </div>
              </div>

               {/* title footer */}
              <div className="w-full justify-between  flex flex-row  p-5">
                <div className="flex flex-col  text-gray-300 text-center">
                  <p>220,000+</p>
                  <p>Event Briefs</p>
                </div>
                <div className="flex flex-col text-gray-300  text-center">
                  <p>10,000+</p>
                  <p>Venues Available</p>
                </div>
                <div className="flex flex-col text-gray-300  text-center">
                  <p>40,000+</p>
                  <p>Clients Served</p>
                </div>
                <div className="flex flex-col text-gray-300  text-center">
                  <p>2+ years</p>
                  <p>Since Founded</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

     
      <div className="mt-16 flex justify-center flex-col items-center">
      <p className="text-center title text-2xl">We Offers</p>
        <div className="flex lg:w-1/2 md:w-full sm:w-full justify-between mt-10 flex-row  flex-wrap items-center">
          <div className="text-center">
            <img src={service1}  className="w-40 h-40" alt=""/>
            <p className="mt-6 title tracking-wide">Gift Vochers</p>
          </div>
          <div className="text-center">
            <img src={service2}  className="w-40 h-40" alt=""/>
            <p className="mt-6 title tracking-wide">Coupens</p>
          </div>
          <div className="text-center">
            <img src={service3}  className="w-40 h-40" alt=""/>
            <p className="mt-6 title tracking-wide">Best Event planning</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
          <div className="flex w-full flex-col text-center mt-10  bg-red-50 p-10 ">
           <h1 className="text-center text-2xl">Our Gallery</h1>
          <div className=" grid grid-cols-1 flex items-center mt-10 justify-center gap-6 md:grid-cols-1 lg:grid-cols-3">
             <Card name="Troxy" title="Tower Hamlets" img={gallery1} />
             <Card name="Greenwich Yacht Club" title="Greenwich" img={gallery2} />
             <Card name="Roundhouse" title="Camden" img={gallery3} />
          </div>
        </div>
      </div>

     

      {/* how EHARI WORKS  */}
      <SehariWorks />

      {/* bestVenues compnent */}
      <BestVenues />

      {/* sehari slider component */}
      <Carousel />

      <Footer />
    </>
  );
};

export default Home;
