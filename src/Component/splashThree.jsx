import React, { useState } from "react";
import desktop from "../assets/Group 4.png"
function SplashThree() {

    const [selectedTab, setSelectedTab] = useState("Let's Start!");
    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
      };
    return (
        <>
            <div>
                <div className=" flex justify-center items-center bg-slate-50 h-screen py-[230px] rounded-3xl">
                    <div>
                        <img src={desktop} alt="image " style={{ height: "215.81px", width: "353px" }} />
                    </div>
                </div>

                <div className="font-bold text-[15px] -mt-[68%] ml-[130px] ">
                    <h1>Be an influencer!</h1>
                </div>

                <div className= {`flex justify-center mt-[20%] ml-[130px] text-white font-semibold bg-orange-500 rounded-md w-[100px] text-[14px] px-[10px] shadow-sm shadow-orange-500 ${selectedTab === "Let's Start!" && "border-b-[4px]  border-orange-600 "} `} >
                    <button    onClick={() => handleTabClick("Let's Start!")}>
                        Let's Start!
                    </button>
                </div>


                <div>
                <div className="ml-[41%] mt-[20%] flex ">
                    <div className="rounded-lg w-[9px] h-[6px] bg-slate-300 mx-1">

                    </div>

               
                <div className="rounded-lg w-[9px] h-[6px] bg-slate-300 mx-1">

                </div>
               

               <div className="rounded-lg w-[32px] h-[6px] bg-slate-300 mx-1">

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

export default SplashThree;