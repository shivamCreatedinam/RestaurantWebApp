import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import ok from '../assets/ok.png'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import logo2 from '../assets/accountLogo.png'
import video from '../assets/video.mp4'



const SuccessPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <img src={ok} alt="Success" className="w-36 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Success!</h2>
            <p className='-mb-0.5'>Your Data has been saved</p>
            <p className='text-xs'>(Your data is being reviewed)</p>
            <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-2xl"
            >
                OK
            </button>
        </div>
    </div>
);

export const EditProfileFinal = () => {

    // for success popup 
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();

    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        navigate('/account');
    };



    // for edit profile
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    //  image  here
    const inputRef = useRef(null);
    const [image, setImage] = useState("");


    const handleImageClick = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }



    // Form validation
    const [title, SetTitle] = useState("")
    const [restaurant, SetRestaurant] = useState("")
    const [description, SetDescription] = useState("")

    const handleVideoTitle = (e) => {
        const value = e?.target.value;
        if (value !== null);
        SetTitle(value)
    }

    const handleRestaurant = (e) => {
        const value = e?.target.value;
        if (value !== null);
        SetRestaurant(value)
    }

    const handleVideoDescription = (e) => {
        const value = e?.target.value;
        if (value !== null);
        SetDescription(value)
    }

    const validateForm = () => {
        if (!title.trim()) {
            toast.error("Video title is required!");
        } else if (!restaurant.trim()) {
            toast.error("Please choose a Restaurant!");
        } else if (!description.trim()) {
            toast.error("Need a Description!");
        } else {
            registerEvent();
        }
    }

    const registerEvent = async () => {
        const data = {
            title: title,
            restaurant: restaurant,
            description:description,
            // video: video
        }
        await axios.post("https://example.com", data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setIsPopupVisible(true);
    }



    return (
        <>
            <div className='mt-4 p-2'>
                <div className='flex gap-20 -mb-1'>
                    <div className="text-orange-500 text-xl cursor-pointer" onClick={() => toggleVisibility1()}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Mac Food Influencer</h2>
                    </div>
                </div>


            </div>
            <hr />
            <div className="mt-4 p-2 mb-3">
                <input
                    type="text"
                    placeholder="🔍    Search here"
                    className="w-full p-2 border rounded-lg bg-[#f1f1f1]"
                />
            </div>
            <div className='w-full p-2 mb-3 flex justify-center items-center'>
                <button className='w-full h-8 bg-orange-500 rounded-lg text-white font-semibold' onClick={() => toggleVisibility()}>Upload new video</button>
            </div>
            <div className='mt-3 p-2'>
                <div className='mb-3'>
                    <h2 className='text-[22px] font-semibold '>Your Videos</h2>
                </div>
                <div className="video-container">
                    <video controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-details mt-2 flex gap-2">
                        <div>
                            <img src={logo2} alt="" className='w-10' />
                        </div>
                        <div className='leading-0'>
                            <div className="video-title">
                                <h6 className=''>The Italian Food Vibe is  Crazy!</h6>
                            </div>
                            <div className="video-description text-sm">
                                Reviewer A
                            </div>
                        </div>
                        <div className='ml-12'>
                            <button>::</button>
                        </div>
                    </div>
                </div>

            </div>




            <div
                className={`fixed inset-0 bg-white bg-opacity-90  p-4 z-50 transform transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >

                <div className=''> {/*  Need to remove this div  */}
                    <div className='p-2'>
                        <div className="w-full flex justify-start items-center gap-24 ">
                            <div className="text-orange-500 text-xl cursor-pointer" onClick={() => toggleVisibility()}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold">Edit Profile</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>


                {/* upload videos */}
                {/* <div className='flex justify-center items-center mt-4 mb-4'>
          <div className='relative'>
            <div className='flex justify-center items-center rounded-full bg-orange-500 w-24 h-24'>


              {image ?
                <img src={URL.createObjectURL(image)} alt="Profile" className='w-20 h-20 object-cover rounded-full' />
                : <img src={logo} alt="Profile" className='w-20 h-20 object-cover rounded-full' />
              }

            </div>
            <label htmlFor="file-input" className='absolute bottom-0 right-0 cursor-pointer'>
              <i onClick={() => handleImageClick} className="fa-solid fa-camera text-white text-xl bg-blue-500 rounded-full p-2"></i>
            </label>
            <input
              id="file-input"
              type="file"
              // accept="image/*"
              onChange={(e) => handleImageChange(e)}
              className='hidden'
              ref={inputRef}
            />

          </div>

        </div> */}

                {/* temprory video */}
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div className="w-full max-w-xs  ">
                    <form className="bg-white rounded px-2 pt-6 pb-8 mb-4" id="profileForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Video Title
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add your video title" onChange={(e) => handleVideoTitle(e)} />
                        </div>
                        <div className="mb-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Restaurant
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="password" placeholder="Choose the restaurant you are reviewing" onChange={(e) => handleRestaurant(e)} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Add your video description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg resize-none"
                                id="address"
                                placeholder="Jalan ABC no 1, Kelapa Gading, Jakarta"
                                rows="4"
                                onChange={(e) => handleVideoDescription(e)}
                            ></textarea>
                        </div>

                        <div className="bg-white shadow p-4 mb-40">
                            <button
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded w-full"
                                type="submit"
                            >
                                Update Data
                            </button>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                                gutter={8}
                                containerClassName=""
                                containerStyle={{}}
                                toastOptions={{
                                    // Define default options
                                    className: "",
                                    duration: 5000,
                                    style: {
                                        background: "#363636",
                                        color: "#fff",
                                    },

                                    // Default options for specific types
                                    success: {
                                        duration: 3000,
                                        theme: {
                                            primary: "green",
                                            secondary: "black",
                                        },
                                    },
                                }}
                            />
                        </div>
                    </form>
                </div>
                {isPopupVisible && <SuccessPopup onClose={() => handleClosePopup()} />}
            </div>

        </>
    );
}
