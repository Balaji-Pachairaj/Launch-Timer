import React from "react";
import logo from "../assets/logo2final.png";



const Title = () => {
     return (
          <div className=" lg:w-[692px] lg:h-[188px] md:w-[400px] md:h-[120px] w-[350px] h-[100px] ">
               <img src={logo} alt="logo" className=" w-full h-full" />
          </div>
     );
};

export default Title;
