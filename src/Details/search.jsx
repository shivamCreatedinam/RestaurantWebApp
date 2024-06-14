import React from "react";
import { IoSearch } from "react-icons/io5";
import img from "../assets/group 3.png"
import image from "../assets/Rectangle 1.png"
import group from "../assets/Group 1.png"
function Search() {
    return (
        <>
            <div className="bg-slate-50 rounded-lg w-full h-full">


                <div className=" mt-4 shadow-md shadow-slate-200 rounded-lg p-[14px] pl-[45px] py-2 w-[340px] h-[40px] ml-5  bg-slate-200">
                    <input type="text " placeholder="Search here" className="text-[14px] bg-slate-200 flex " />

                    <div className="-mt-5 -ml-8">
                        <IoSearch style={{ fontSize: '22px', color: '#989898' }} />
                    </div>
                </div>

                <div className="flex">
                    <div className="mt-5 ml-4">
                        <img src={img} alt="photo" style={{ height: "70px", width: "70px" }} />
                    </div>

                    <div className="mt-5 mx-3">
                        <h1 className="font-semibold text-[19px]">Pepperoni Pizza</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Made with pepperoni</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Rp 200.000</h1>
                    </div>
                </div>

                <div className=" bg-orange-500 w-[84px] text-[14px] px-[24px] py-[4px] rounded-lg shadow-sm
                     shadow-orange-500 text-white font-semibold ml-[280px] -mt-[42px]">
                    <button>Order</button>
                </div>

                <div className="h-[1px] w-[75%] mt-[9%] bg-gray-300 ml-[96px]"></div>



                <div className="flex">
                    <div className="mt-5 ml-4">
                        <img src= {image} alt="photo" style={{ height: "70px", width: "70px" }} />
                    </div>

                    <div className="mt-5 mx-3">
                        <h1 className="font-semibold text-[19px]">Pepperoni Pizza</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Made with pepperoni</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Rp 200.000</h1>
                    </div>
                </div>


                <div className=" bg-orange-500 w-[84px] text-[14px] px-[24px] py-[4px] rounded-lg shadow-sm
                     shadow-orange-500 text-white font-semibold ml-[280px] -mt-[42px]">
                    <button>Order</button>
                </div>

                <div className="h-[1px] w-[75%] mt-[9%] bg-gray-300 ml-[96px]"></div>


                <div className="flex">
                    <div className="mt-5 ml-4">
                        <img src= {group} alt="photo" style={{ height: "70px", width: "70px" }} />
                    </div>

                    <div className="mt-5 mx-3">
                        <h1 className="font-semibold text-[19px]">Pepperoni Pizza</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Made with pepperoni</h1>
                        <h1 className="text-[13px] text-slate-500 mt-1">Rp 200.000</h1>
                    </div>
                </div>


                <div className=" bg-orange-500 w-[84px] text-[14px] px-[24px] py-[4px] rounded-lg shadow-sm
                     shadow-orange-500 text-white font-semibold ml-[280px] -mt-[42px]">
                    <button>Order</button>
                </div>

                <div className="h-[1px] w-[75%] mt-[9%] bg-gray-300 ml-[96px]"></div>


               

            </div>
        </>
    );
}


export default Search;