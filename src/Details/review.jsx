import React, { useState }  from "react";
import { IoMdArrowBack } from "react-icons/io";
import picture from "../assets/pizzapic.png"
import Menu from "./menu";
import Vedio from "./vedio";
import ReviewPage from "./reviewPage";
import Description from "./description";
import Search from "./search";

function Review() {

    const [activeButton, setActiveButton] = useState("description");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    const rendersections = () => {
        switch (activeButton) {
            case "Description":
            return <Description/> ;
            case "Review":
                return <ReviewPage/> ;
                case "Vedio":
                    return <Vedio/> ;
                    case "Menu":
                        return <Menu/>  ;
                    case "Search":
                        return <Search/>


        }
    };


    return (
        <>
            <div className="bg-slate-50 rounded-lg h-full w-full">
                <div className="relative ">
                    <div className="absolute z-10 mt-8 ml-4">
                        <IoMdArrowBack style={{ fontSize: '28px', color: 'white' }} />

                    </div>
                </div>

                <div>
                    <img src= {picture} alt="photo" style={{ height: "230px", width: "400px" }} />
                </div>


                <div>
                    <div className="font-bold text-white text-[17px] -mt-[80px] ml-[14px]">
                        <h1>ABC Pizzeria</h1>
                    </div>
                    <div className="text-white text-[11px] ml-[14px] mt-1">
                        <h1>Jalan ABC no 1, Kelapa Gading, Jakarta</h1>
                    </div>

                    <div className="flex text-white ml-[14px] mt-1">
                        <h1 className="text-[11px]">081234567890</h1>

                        <div className=" bg-orange-500 w-[75px] text-[12px] px-[14px] py-[2px] rounded-lg shadow-sm
                     shadow-orange-500 text-white font-semibold ml-[172px] -mt-[12px]">
                            <button>Direction</button>
                        </div>
                    </div>
                </div>

                <div className="mt-[34px] flex ml-2" >
                    <div className={`border-1 border-orange-500 w-[115px] px-[18px] rounded-xl mx-1 ${activeButton === 'Description' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}>
                        <button onClick={() => handleButtonClick('Description')}>
                            Description
                        </button>
                    </div>
                    <div className={`border-1 border-orange-500 w-[80px] px-[15px] rounded-xl mx-1 ${activeButton === 'Review' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}>
                        <button onClick={() => handleButtonClick('Review')}>
                            Review
                        </button>
                    </div>
                    <div className={`border-1 border-orange-500 w-[78px] px-[15px] rounded-xl mx-1 ${activeButton === 'Vedio' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}>
                        <button onClick={() => handleButtonClick('Vedio')}>
                            Vedio
                        </button>
                    </div>
                    <div className={`border-1 border-orange-500 w-[78px] px-[15px] rounded-xl mx-1 ${activeButton === 'Menu' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}>
                        <button onClick={() => handleButtonClick('Menu')}>
                            Menu
                        </button>
                    </div>

                    <div className={`border-1 border-orange-500 w-[78px] px-[15px] rounded-xl mx-1 ${activeButton === 'Search' ? 'bg-orange-500 text-white' : 'text-orange-500'}`}>
                        <button onClick={() => handleButtonClick('Search')}>
                            Search
                        </button>
                    </div>
                </div>


                     <div className="Sections">  {rendersections()} </div>

                     <div className="flex justify-center">
                    <div className="mt-[50px] py-3">
                        <div className="rounded-lg w-[102px] h-[6px] bg-slate-400">

                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Review;