import React from 'react'
import Header from './Header'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Attendence from './Attendence'

function Main() {
  return (
    <div className='mt-[55px] h-[100vh] md:overflow-y-scroll md:h-[100vh] md:w-full md:mt-0'>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/attendence' element={<Attendence/>}/>
        </Routes>
    </div>
  )
}

export default Main