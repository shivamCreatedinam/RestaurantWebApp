import React from "react";

import { IoStarSharp } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";


function ReviewPage() {

  


    return (
        <>
            <div className="bg-slate-50 rounded-lg h-full w-full">
               

                <div className="flex">

                    <div className="text-orange-500 mt-[50px] ml-[15px] text-5xl font-semibold">
                        <h1>5.0</h1>
                    </div>

                    <div className=" text-[14px] mt-[115px]">
                        <h1 className="-ml-[65px] " style={{ whiteSpace: 'nowrap' }}>2 Reviews</h1>
                    </div>


                    <div className="ml-[20px]">

                        <div className="flex mt-6 ">
                            <h1 className="ml-[10px] -mt-1 ">5.0</h1>
                            <div className="h-[10px] w-[200px] ml-[12px] mt-1 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
                                <div className="h-[10px] bg-primary rounded-lg" style={{ width: "100%" }}></div>
                            </div>
                        </div>


                        <div className="flex mt-2 ">
                            <h1 className="ml-[10px] -mt-1 ">4.0</h1>
                            <div className="h-[10px] w-[200px] ml-[12px] mt-1 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
                                <div className="h-[10px] bg-blue-200 rounded-lg" style={{ width: "100%" }}></div>
                            </div>
                        </div>


                        <div className="flex mt-2 ">
                            <h1 className="ml-[10px] -mt-1 ">3.0</h1>
                            <div className="h-[10px] w-[200px] ml-[12px] mt-1 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
                                <div className="h-[10px] bg-blue-200 rounded-lg" style={{ width: "100%" }}></div>
                            </div>
                        </div>


                        <div className="flex mt-2 ">
                            <h1 className="ml-[10px] -mt-1 ">5.0</h1>
                            <div className="h-[10px] w-[200px] ml-[12px] mt-1 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
                                <div className="h-[10px] bg-blue-200 rounded-lg" style={{ width: "100%" }}></div>
                            </div>
                        </div>


                        <div className="flex mt-2 ">
                            <h1 className="ml-[10px] -mt-1 ">1.0</h1>
                            <div className="h-[10px] w-[200px] ml-[12px] mt-1 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
                                <div className="h-[10px] bg-blue-200 rounded-lg" style={{ width: "100%" }}></div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-[300px] pl-[95px] ml-5 mt-5 py-[4px] text-white rounded-xl font-semibold bg-orange-500 shadow shadow-orange-500">
                    <button>Add your review</button>
                </div>


                <div className=" flex mt-5 ml-[2%] border-1 border-slate-300 shadow-sm shadow-slate-300 rounded-lg p-[14px] pr-[1px] w-[345px]">
                    <div className="bg-[#F97316] rounded-full w-[43px] h-[43px] py-2 px-[8px]">
                        <MdPersonOutline style={{ fontSize: '28px', color: 'white' }} />
                    </div>

                    <div className="ml-4 mt-1">

                        <div className="font-bold text-xl">
                            <h1>Wayan Sandra</h1>
                        </div>

                        <div className="text-[14px]">
                            <h1>10 mar 2023</h1>
                        </div>

                        <div className="text-[16px]">
                            <h1>Tempatnya bagus! Banyak objek yang bisa dijadikan tempat untuk foto!</h1>
                        </div>

                        <div className="flex mt-[14px]">
                            <div className="mx-[1px]">
                                <IoStarSharp style={{ fontSize: '18px', color: '#F97316' }} />
                            </div>
                            <div className="mx-[1px]">
                                <IoStarSharp style={{ fontSize: '19px', color: '#F97316' }} />
                            </div>
                            <div className="mx-[1px]">
                                <IoStarSharp style={{ fontSize: '19px', color: '#F97316' }} />
                            </div>
                            <div className="mx-[1px]">
                                <IoStarSharp style={{ fontSize: '19px', color: '#F97316' }} />
                            </div>
                            <div className="mx-[1px]">
                                <IoStarSharp style={{ fontSize: '19px', color: '#F97316' }} />
                            </div>
                        </div>
                    </div>
                </div>

              

            </div>

        </>
    );
}


export default ReviewPage;