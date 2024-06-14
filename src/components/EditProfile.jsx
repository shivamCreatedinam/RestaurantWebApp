import React, { useState, useRef } from 'react'
import banner from '../assets/banner.png'
import vector from '../assets/fork.png'
import upload from '../assets/upload.png'
import video from '../assets/video.mp4'
export const EditProfile = () => {



    //  images  here
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");


    const handleImageClick1 = () => {
        inputRef1.current.click();
    }
    const handleImageChange1 = (e) => {
        const file = e.target.files[0];
        setImage1(file);
    }

    const handleImageClick2 = () => {
        inputRef2.current.click();
    }
    const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        setImage2(file);
    }

    return (
        <div>
            {/* screen - 1 */}
            <div className='p-2 pt-4'>
                <div className="text-orange-500 text-xl cursor-pointer" onClick={() => toggleVisibility()}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className='mt-24 ml-2'>
                    <h2 className='font-bold text-[22px]'>Join Mac Food Influencer today!</h2>
                </div>
                <div className='mt-4'>
                    <img src={banner} alt="" />
                </div>
                <div className='mt-8 flex flex-col gap-2'>
                    <div className='flex gap-4 '>
                        <div className='flex justify-center items-center ml-2'><i className="fa-solid fa-xl fa-video text-blue-400 "></i></div>
                        <div className='flex justify-center items-center pt-2' ><p className='text-md font-semibold'>Upload Videos for review</p></div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='flex justify-center items-center ml-2'><i className="fa-solid fa-certificate text-orange-400 relative text-3xl"><i className="fa-solid fa-check  absolute bottom-[5px] right-[7px] text-white text-[17px]"></i></i></div>
                        <div className='flex justify-center items-center pt-2' ><p className='text-md font-semibold'>Get a verified badge on your profile</p></div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='flex justify-center items-center ml-2'><img src={vector} className='w-7' /></div>
                        <div className='flex justify-center items-center pt-2' ><p className='text-md font-semibold'>Get acknowledged by restaurants</p></div>
                    </div>
                </div>
                <div className='absolute  w-full pr-10'>  {/* bottom-10 */}
                    <button className='w-full h-8 bg-orange-500 rounded-lg text-white font-semibold '>Join Now!</button>
                </div>
            </div>




            {/* screen - 2 */}
            <div className='mt-40 p-2'>
                <div className='flex gap-20 -mb-1'>
                    <div className="text-orange-500 text-xl cursor-pointer" onClick={() => toggleVisibility()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>KTP Verification</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className='p-2'>

                <div className='w-full h-40 border-2 border-orange-400 rounded-xl mb-4 flex flex-col justify-center items-center m-auto'  >
                    <label htmlFor="file-input1" className='flex flex-col justify-center items-center'>
                        <img src={image1 ? URL.createObjectURL(image1) : upload} alt="" className='w-20 mb-2 ' onClick={() => handleImageClick1} />
                        <p>Please upload your KTP here</p>
                    </label>

                    <input
                        id="file-input1"
                        type="file"
                        onChange={(e) => handleImageChange1(e)}
                        className='hidden'
                        ref={inputRef1}
                    />
                </div>
                <div className='w-full h-40 border-2 border-orange-400 rounded-xl mb-4 flex flex-col justify-center items-center m-auto'  >
                    <label htmlFor="file-input2" className='flex flex-col justify-center items-center'>
                        <img src={image2 ? URL.createObjectURL(image2) : upload} alt="" className='w-20 mb-2 ' onClick={() => handleImageClick2} />
                        <p>Please upload your selfie with KTP here</p>
                    </label>

                    <input
                        id="file-input2"
                        type="file"
                        onChange={(e) => handleImageChange2(e)}
                        className='hidden'
                        ref={inputRef2}
                    />
                </div>
                <div className='absolute  w-full pr-10'>  {/* bottom-10 */}
                    <button className='w-full h-8 bg-orange-500 rounded-lg text-white font-semibold'>Update Data</button>
                </div>
            </div>

            {/* screen - 3 */}


            <div className='mt-40 p-2'>
                <div className='flex gap-20 -mb-1'>
                    <div className="text-orange-500 text-xl cursor-pointer" onClick={() => toggleVisibility()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Mac Food Influencer</h2>
                    </div>
                </div>
            </div>
            <hr />


















        </div>
    )
}
