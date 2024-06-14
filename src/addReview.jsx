import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import image from "../src/assets/pizzapic.png"
import { IoStarSharp } from "react-icons/io5";
function AddReview() {
    return (
        <>
            <div className="bg-slate-50 rounded-lg w-full h-full">
                <div className="flex">
                    <div className="mt-4 ml-[12px]">
                        <IoMdArrowBack style={{ fontSize: '28px', color: 'orange' }} />
                    </div>

                    <div className="font-bold text-[20px] mt-4 ml-[90px]">
                        <h1>Add Review</h1>
                    </div>
                </div>

                    <div className="mt-[18px]">
                    <img src= {image} alt="photo" style={{ height: "230px", width: "400px" }} />
                </div>

                <div className="ml-[38%] mt-3">
                    <div>
                        How was
                    </div>
                    <div className="font-semibold text-[20px] -ml-[30px]">
                        ABC Pizzeria?
                    </div>
                </div>


                <div className="flex mt-[10px] ml-[80px]">
                            <div className="mx-[3px] ">
                                <IoStarSharp style={{ fontSize: '30px', color: '#D3D3D3' }} />
                            </div>
                            <div className="mx-[3px]">
                                <IoStarSharp style={{ fontSize: '30px', color: '#D3D3D3' }} />
                            </div>
                            <div className="mx-[3px]">
                                <IoStarSharp style={{ fontSize: '30px', color: '#D3D3D3' }} />
                            </div>
                            <div className="mx-[3px]">
                                <IoStarSharp style={{ fontSize: '30px', color: '#D3D3D3' }} />
                            </div>
                            <div className="mx-[3px]">
                                <IoStarSharp style={{ fontSize: '30px', color: '#D3D3D3' }} />
                            </div>
                        </div>

                     <div>
                        <div className="mt-[20px] ml-5">
                            <h1 className="text-[14px]">Your Review</h1>
                        </div>
                        <div className="border border-slate-300 shadow-md shadow-slate-300 rounded-lg p-[14px] pr-[1px] w-[330px] h-[130px] ml-5 mt-[5px] ">
                         <input type="text " placeholder="Give your best review" className="text-[14px] " />
                        </div>
                     </div>

                     
                <div className="w-[300px] pl-[95px] ml-5 mt-[100px] py-[4px] 
                 text-white rounded-xl font-semibold bg-orange-500 shadow shadow-orange-500">
                    <button>Upload Review</button>
                </div>
 

                    <div className="flex justify-center">
                    <div className="mt-[30px] py-3">
                        <div className="rounded-lg w-[102px] h-[6px] bg-slate-300">

                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default AddReview;