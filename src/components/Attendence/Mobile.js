import React from 'react'
import Calendar from './Calendar/Calendar'
import Header from './MobileComponents/Header'
import Attendence from './MobileComponents/Attendence'

const Mobile = () => {
  return (
    <div className="font-pop w-[100vw] h-[100vh] bg-[#fbfbfb] rounded-2xl">
      <Header title="Attendence"></Header>
      <Calendar></Calendar>
      <Attendence att={{abs: 12, prs: 15}}></Attendence>
      
    </div>
  )
}

export default Mobile
