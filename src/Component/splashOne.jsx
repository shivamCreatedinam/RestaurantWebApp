import React, { useState } from "react";
import photo from "../assets/pana.png"
function SplashOne() {
    const [selectedSkip, setSelectedSkip] = useState("SKIP");
    const handleTabClick = (skipName) => {
        setSelectedSkip(skipName);
      };
    return (
        <>
            <div>
                <div className=" flex justify-center items-center  bg-slate-50 h-screen  py-[230px] rounded-3xl">
                    <div>
                        <img src={photo} alt="photo " style={{ height: "210.45px", width: "353px" }} />
                </div>
                </div>

                <div className= "font-bold text-[18px] -mt-[62%] ml-[75px] ">
                   <h1>Find restaurant near you</h1> 
                </div>

              
                <div className = {`flex justify-center mt-[30%] text-orange-500 font-bold ${selectedSkip === "SKIP" && ""}`} >
                    <button  onClick={() => handleTabClick("SKIP")}>
                        SKIP
                    </button>
                </div>


              <div>
                <div className="ml-[41%] mt-2 flex ">
                    <div className="rounded-lg w-[32px] h-[6px] bg-slate-300 mx-1">

                    </div>

               
                <div className="rounded-lg w-[9px] h-[6px] bg-slate-300 mx-1">

                </div>
               

               <div className="rounded-lg w-[9px] h-[6px] bg-slate-300 mx-1">

               </div>
                </div>

              </div>




               <div className="flex justify-center">
                <div className="mt-[26px] py-4">
                    <div className="rounded-lg w-[102px] h-[6px] bg-[#c5c5c5]">
                        
                    </div>
                </div>
               </div>

            </div>
        </>
    );
}

export default SplashOne;