import React, { useEffect, useState } from "react";
import { getRemainingTimeStampMs } from "./CounterLogic";

const defaultTime = {
     days: "00",
     hours: "00",
     minutes: "00",
     seconds: "00",
};

///counterlogic is in another file called counter logic

const Counter = ({ endTimeStampMs }) => {
     const [remainingTime, setRemainingTime] = useState(defaultTime);

     useEffect(() => {
          const timer = setInterval(() => {
               updateRemainingTime(endTimeStampMs);
          }, 1000);

          return () => clearInterval(timer);
     }, [endTimeStampMs]);

     const updateRemainingTime = (countdown) => {
          // the passing the end time stamap
          //setting the return value to remaining time
          setRemainingTime(getRemainingTimeStampMs(countdown));
     };

     return (
          <div className=" w-full h-max lg:text-[80px] md:text-[45px] text-[45px] font-lora font-bold text-center">
               <p className="text-[#020202]">
                    {remainingTime.days}:{remainingTime.hours}:{remainingTime.minutes}:
                    {remainingTime.seconds}{" "}
                   
               </p>
          </div>
     );
};

export default Counter;
