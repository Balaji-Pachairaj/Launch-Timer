import Showcase from "./component/Showcase";
import Title from "./component/Title";
import WeWillLive from "./component/WeWillLive";
import { useMediaQuery } from "react-responsive";
import Counter from "./component/counterComponents/Counter";
function App() {
     /// useMediaQuery from react responsive will return boolean according to query condition
     const isBigScreen = useMediaQuery({ query: "(min-width: 760px)" });

     //5th aug 2023 9am
     const endTimeStampMs = 1691206200000;
     const endTime = new Date(endTimeStampMs);

     return (
          <div className="w-full min-h-screen flex flex-row justify-center md:items-center items-start md:p-0 pt-12 bg-slate-50">
               <div className=" flex flex-row">
                    <div className=" flex flex-col gap-6">
                         <Title />
                         {!isBigScreen && (
                              <div className=" w-full flex flex-row justify-center">
                                   <Showcase />
                              </div>
                         )}
                         <div className=" flex flex-col">
                              <WeWillLive />
                              {/* passing the end time stamp to counter component  */}
                              <Counter endTimeStampMs={endTimeStampMs} />
                         </div>
                    </div>
                    {isBigScreen && <Showcase />}
               </div>
          </div>
     );
}

export default App;
