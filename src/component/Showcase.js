import React from "react";
import showcase from "../assets/rahul.png";
const Showcase = () => {
     return (
          <div className=" lg:w-[363px] lg:h-[444px] md:w-[260px] md:h-[300px] w-[250px] h-[280px]">
               <img src={showcase} alt="showcase" className=" w-full h-full" />
          </div>
     );
};

export default Showcase;
