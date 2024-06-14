import React from "react";
import check from "../src/assets/checkpic.png"

function ReviewDone() {
    return (
        <>
                <div className="flex items-center justify-center bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
                        <img src= {check} alt="Success" className="w-36 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Success!</h2>
                        <p className='-mb-0.5'>Your Data has been saved</p>
                        <p className='text-xs mt-1'>(Your data is being reviewed)</p>

                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 mt-4 px-6 rounded-2xl" >
                            OK
                        </button>
                    </div>
                </div>
            
        </>
    );
}

export default ReviewDone;