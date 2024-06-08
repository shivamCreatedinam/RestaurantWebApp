import React from 'react';
import logo from '../assets/logo.png'
import pizza from '../assets/pizza.png'

export const MainScreen = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mt-2">
        <div className='flex justify-center items-center rounded-2xl bg-orange-500 h-10 w-10'>
          <img src={logo} alt="" className='w-8' />
        </div>
        <span className="text-xl font-bold -ml-16">
          Hello! John Doe
        </span>
        <div className="text-2xl">🔔</div>
      </div>
      <div className="mt-4">
        <input type="text"  placeholder="🔍    Search here" className="w-full p-2 border rounded-lg bg-[#f1f1f1]" />
      </div>
      <div className='mt-3 font-bold'>
        <h2>What do you want to eat?</h2>
      </div>
      <div className="flex mt-4 space-x-2 overflow-x-scroll " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">Italian</button>
      <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">Western</button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">Japanese</button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">Indian</button>
        <button className="flex-shrink-0 px-4 py-2 rounded-3xl border-3 border-orange-300 hover:bg-orange-500 hover:text-white">Korean</button>

        {/* Add more buttons as needed */}
      </div>
      <div className="mt-4 border rounded-lg overflow-hidden" >
        <img src={pizza} alt="Pizza" className="w-full" />
        <div className='flex items-center justify-around'>
        <div className="p-2">
          <h3 className="text-xl font-bold">ABC Pizzeria</h3>
          <p className='-mt-1 text-xs'>Jalan ABC no 1, Kelapa Gading, Jakarta</p>
          <p className='-mt-3 text-xs'>081234567890</p>
        </div>
        <div className="text-orange-500 text-xl font-bold"> <i class="fa-solid fa-star"></i> 5.0</div>
        </div>
      </div>
      <div className="mt-4 border rounded-lg overflow-hidden" >
        <img src={pizza} alt="Pizza" className="w-full" />
        <div className='flex items-center'>
        <div className="p-2">
          <h3 className="text-xl font-bold">ABC Pizzeria</h3>
          <p className='-mt-1 text-xs'>Jalan ABC no 1, Kelapa Gading, Jakarta</p>
          <p className='-mt-3 text-xs'>081234567890</p>
        </div>
        <div className="text-orange-500 text-xl font-bold">⭐ 5.0</div>
        </div>
      </div>
    </div>
  );
};
