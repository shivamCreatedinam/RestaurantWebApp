import React from "react";
import group from "../assets/Group 59.png"

function Vedio() {
    return (
        <>
            <div className="bg-slate-50 rounded-lg h-screen">
                <div>
                    <div className="py-3">
                        <img src={group} alt="photo" style={{ height: "200px", width: "394px" }} />
                    </div>


                    <div className="ml-5">
                        <h1 className="font-bold text-[22px]">ABC pizzeria</h1>
                        <h1 className="text-[14px] mt-1">Reviewer A</h1>
                    </div>


                    <div className="mt-6">
                        <img src={group} alt="photo" style={{ height: "200px", width: "394px" }} />
                    </div>

                    <div className="ml-5">
                        <h1 className="font-bold text-[22px] mt-3">ABC pizzeria</h1>
                        <h1 className="text-[14px] mt-1">Reviewer B</h1>
                    </div>
                </div>

            
            </div>
        </>
    );
}


export default Vedio;