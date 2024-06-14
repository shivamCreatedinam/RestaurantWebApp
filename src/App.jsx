import { useState } from 'react'
import './App.css'
import OpenPage from './Component/openPage'
import SplashOne from './Component/splashOne'
import SplashTwo from './Component/splashTwo'
import SplashThree from './Component/splashThree'
import SimpleSlider from './Component/simpleSlider'
import ReviewPage from './Details/reviewPage'
import AddReview from './addReview'
import ReviewDone from './reviewDone'
import Review from './Details/review'
import Description from './Details/description'
import Search from './Details/search'
import Vedio from './Details/vedio'
import Menu from './Details/menu'


function App() {

  return (
    <>
   {/* <OpenPage/> 
   <SplashOne/>
   <SplashTwo/>
   <SplashThree/> */}

   <SimpleSlider/>

   <Review/>
   <AddReview/>
   <ReviewDone/>
   {/* <ReviewPage/>
   <Description/>
   <Vedio/>
   <Menu/>
   <Search/> */}
    </>
  )
}

export default App
