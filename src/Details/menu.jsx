import React from "react";
import menu from "../assets/image 8.png"
import { MdCloudDownload } from "react-icons/md";
function Menu() {
    return (
        <>
            <div className="bg-slate-50 rounded-lg h-screen">
                <div className="py-8 ml-5">
                    <img src={menu} alt="" style={{ height: "300px", width: "199.95px" }} />
                </div>

                <div className="w-[300px] pl-[95px] ml-5 mt-[120px] py-[5px]  text-white rounded-xl font-semibold bg-[#FF5E5E] shadow shadow-[#FF5E5E]">
                    <button className="flex">Download Pdf
                        <div className="-ml-[140px] mt-0.5 ">
                            <MdCloudDownload style={{ fontSize: '22px', color: 'white' }} />
                        </div>
                    </button>
                </div>

              

            </div>
        </>
    );
}


export default Menu;