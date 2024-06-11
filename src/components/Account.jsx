import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import pizza from '../assets/pizza.png';
// import Cropper from 'react-easy-crop';

// for image


export const Account = () => {

  const [editForm, setEditForm] = useState(false)



  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  // // upload image
  // const [selectedImage, setSelectedImage] = useState(logo);
  //   const [croppedImage, setCroppedImage] = useState(null);
  //   const [crop, setCrop] = useState({ x: 0, y: 0 });
  //   const [zoom, setZoom] = useState(1);
  //   const [croppedArea, setCroppedArea] = useState(null);
  //   const [isCropping, setIsCropping] = useState(false);

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setSelectedImage(reader.result);
  //         setIsCropping(true);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //   const onCropComplete = (croppedArea, croppedAreaPixels) => {
  //     setCroppedArea(croppedAreaPixels);
  //   };

  //   const showCroppedImage = async () => {
  //     try {
  //       const croppedImage = await getCroppedImg(selectedImage, croppedArea);
  //       setCroppedImage(croppedImage);
  //       setIsCropping(false);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   const getCroppedImg = (imageSrc, crop) => {
  //     const image = new Image();
  //     image.src = imageSrc;
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d');
  //     const scaleX = image.naturalWidth / image.width;
  //     const scaleY = image.naturalHeight / image.height;
  //     canvas.width = crop.width;
  //     canvas.height = crop.height;
  //     ctx.drawImage(
  //       image,
  //       crop.x * scaleX,
  //       crop.y * scaleY,
  //       crop.width * scaleX,
  //       crop.height * scaleY,
  //       0,
  //       0,
  //       crop.width,
  //       crop.height
  //     );
  //     return new Promise((resolve, reject) => {
  //       canvas.toBlob((blob) => {
  //         if (!blob) {
  //           reject(new Error('Canvas is empty'));
  //           return;
  //         }
  //         blob.name = 'croppedImage.png';
  //         const fileUrl = window.URL.createObjectURL(blob);
  //         resolve(fileUrl);
  //       }, 'image/png');
  //     });
  //   };

  //   // image ends here
  const inputRef = useRef(null);
  const [image, setImage] = useState("");


  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
        <div className='flex gap-4 border border-gray-600 p-2 rounded-lg'>
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





      <div className=''> {/*  Need to remove this div  */}
        <div className='p-3'>
          <div className="w-full flex justify-start items-center gap-20 ">
            <div className="text-orange-500 text-xl cursor-pointer" onClick={toggleVisibility}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="ml-4">
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
            <i onClick={() => handleImageClick(e)} className="fa-solid fa-camera text-white text-xl bg-blue-500 rounded-full p-2"></i>
          </label>
          <input
            id="file-input"
            type="file"
            // accept="image/*"
            onChange={handleImageChange}
            className='hidden'
            ref={inputRef}
          />

        </div>

      </div>
      <div class="w-full max-w-xs mb-40">
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Full Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" />
          </div>
          <div class="mb-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Phone Number
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="password" placeholder="081234567890" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="info@abc.com" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
              Address
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg resize-none"
              id="address"
              placeholder="Jalan ABC no 1, Kelapa Gading, Jakarta"
              rows="4"
            ></textarea>
          </div>

          <div class="bg-white shadow p-4 mb-40">
    <button
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded w-full"
      type="submit"
    >
      Update Data
    </button>
  </div>

        </form>

      </div>
   




    </>
  );
}
