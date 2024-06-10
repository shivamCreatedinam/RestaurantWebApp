import React, { useState } from 'react';
import logo from '../assets/logo.png';
import pizza from '../assets/pizza.png';

export const MainScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mt-2">
        <div className="flex justify-center items-center rounded-full bg-orange-500 h-10 w-10">
          <img src={logo} alt="" className="w-8" />
        </div>
        <span className="text-xl font-bold -ml-16">Hello! John Doe</span>
        <div className="text-2xl text-orange-500 cursor-pointer" onClick={toggleVisibility}>
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="🔍    Search here"
          className="w-full p-2 border rounded-lg bg-[#f1f1f1]"
        />
      </div>
      <div className="mt-3 font-bold">
        <h2>What do you want to eat?</h2>
      </div>
      <div className="flex mt-4 space-x-2 overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">
          Italian
        </button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">
          Western
        </button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">
          Japanese
        </button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">
          Indian
        </button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">
          Korean
        </button>
        {/* Add more buttons as needed */}
      </div>
      <div className="mb-2">
        <div className="mt-4 mb-4 border rounded-lg overflow-hidden">
          <img src={pizza} alt="Pizza" className="w-full" />
          <div className="flex items-center justify-around">
            <div className="p-2">
              <h3 className="text-xl font-bold">ABC Pizzeria</h3>
              <p className="-mt-1 text-xs">Jalan ABC no 1, Kelapa Gading, Jakarta</p>
              <p className="-mt-3 text-xs">081234567890</p>
            </div>
            <div className="text-orange-500 text-xl font-bold">
              <i className="fa-solid fa-star"></i> 5.0
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 border rounded-lg overflow-hidden">
          <img src={pizza} alt="Pizza" className="w-full" />
          <div className="flex items-center justify-around">
            <div className="p-2">
              <h3 className="text-xl font-bold">ABC Pizzeria</h3>
              <p className="-mt-1 text-xs">Jalan ABC no 1, Kelapa Gading, Jakarta</p>
              <p className="-mt-3 text-xs">081234567890</p>
            </div>
            <div className="text-orange-500 text-xl font-bold">
              <i className="fa-solid fa-star"></i> 5.0
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 border rounded-lg overflow-hidden">
          <img src={pizza} alt="Pizza" className="w-full" />
          <div className="flex items-center justify-around">
            <div className="p-2">
              <h3 className="text-xl font-bold">ABC Pizzeria</h3>
              <p className="-mt-1 text-xs">Jalan ABC no 1, Kelapa Gading, Jakarta</p>
              <p className="-mt-3 text-xs">081234567890</p>
            </div>
            <div className="text-orange-500 text-xl font-bold">
              <i className="fa-solid fa-star"></i> 5.0
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center p-4 z-50 transform transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full flex justify-start items-center border-b-2 border-orange-500 mb-3">
          <div className="text-orange-500 text-xl cursor-pointer" onClick={toggleVisibility}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">Notifications</h2>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 text-gray-500">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-orange-500 h-9 w-9">
                <img src={logo} alt="" className="w-8" />
              </div>
              <div className="text-md">You got 10 new review reply</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
