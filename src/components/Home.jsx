// Home.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainScreen } from './MainScreen';
import { Map } from './Map';
import { Scanner } from './Scanner';
import { Account } from './Account';
import { Nav } from './Nav';

const Home = () => {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/map" element={<Map />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <div className='fixed bottom-0 left-0 w-full bg-white p-6' >
        <Nav />
      </div>
    </div>
  );
};

export default Home;
