import React from 'react'
import Profile from './Profile'

function Header() {
  return (
    <div className='hidden px-[50px] pt-[35px] md:flex md:flex-col sticky z-10'>
        <Profile/>
    </div>
  )
}

export default Header