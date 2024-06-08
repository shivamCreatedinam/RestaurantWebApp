import { useState } from 'react'
import './App.css'
import { Scanner } from './Scanner'

function App() {

  return (
    <>
    <h1 className='my-5 text-center display-2'>QR Code Reader Generator</h1>
     <Scanner/>
    </>
  )
}

export default App
