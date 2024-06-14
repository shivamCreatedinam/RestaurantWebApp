import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import pizza from '../assets/pizza.png';
import ok from '../assets/ok.png'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';


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

export const Account = () => {

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
  const [username, SetUserName] = useState("")
  const [phone, SetPhone] = useState("")
  const [email, SetEmail] = useState("")
  const [address, SetAddress] = useState("")

  const handleUserName = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetUserName(value)
  }

  const handlePhone = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPhone(value)
  }

  const handleEmail = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetEmail(value)
  }

  const handleAddress = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetAddress(value)
  }

  const validateForm = () => {
    if (!username.trim()) {
      toast.error("Username is required");
    } else if (!phone.trim()) {
      toast.error("Phone number is required");
    } else if (!email.trim()) {
      toast.error("Email is required");
    } else if (!address.trim()) {
      toast.error("Address is required");
    } else {
      registerEvent();
    }
  }

  const registerEvent = async () => {
    const data = {
      username: username,
      phone: phone,
      email: email,
      address: address,
      image: image
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
      <div className='p-3 mt-4'>
        <div>
          <h1 className='text-4xl font-bold'>Profile</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full bg-orange-500 w-24 h-24'>
            <img src={logo} alt="" className='w-20 h-20 object-cover rounded-full' />
          </div>
          <div className="name mt-2">
            <h3>John Doe</h3>
          </div>
          <div className="info flex flex-col justify-center items-center mt-2 leading-3">
            <p className='font-bold text-orange-400'>Normal User</p>
            <p>081234567890</p>
            <p>johndoe@mail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='p-3 flex flex-col gap-3'>
        <div className='flex gap-4 border border-gray-600 p-2 rounded-lg' onClick={() => toggleVisibility()}>
          <div className='flex justify-center items-center ml-2'><i className="fa-solid fa-xl fa-pencil text-orange-500 "></i></div>
          <div className='flex justify-center items-center pt-2' ><p className='font-bold text-xl'>Edit Profile</p></div>
        </div>
        <div className='flex gap-4 border border-gray-600 p-2 rounded-lg'>
          <div className='flex justify-center items-center ml-2'><i className="fa-solid fa-xl fa-video text-blue-400 "></i></div>
          <div className='flex justify-center items-center pt-2' ><p className='font-bold text-xl'>KulinerKu Influence</p></div>
        </div>
        <div className='flex gap-4 border border-gray-600 p-2 rounded-lg'>
          <div className='flex justify-center items-center ml-2'><i className="fa-solid fa-xl fa-arrow-right-from-bracket text-red-400 "></i></div>
          <div className='flex justify-center items-center pt-2' ><p className='font-bold text-xl'>Log Out</p></div>
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

        <div className='flex justify-center items-center mt-4 mb-4'>
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

        </div>
        <div className="w-full max-w-xs  ">
          <form className="bg-white rounded px-2 pt-6 pb-8 mb-4" id="profileForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Full Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" onChange={(e) => handleUserName(e)} />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Phone Number
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="password" placeholder="081234567890" onChange={(e) => handlePhone(e)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="info@abc.com" onChange={(e) => handleEmail(e)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg resize-none"
                id="address"
                placeholder="Jalan ABC no 1, Kelapa Gading, Jakarta"
                rows="4"
                onChange={(e) => handleAddress(e)}
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
