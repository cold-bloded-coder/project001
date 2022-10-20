import React from 'react'
import Profile from './Profile'

function Header() {
  return (
    <div className='hidden px-[50px] pt-[35px] md:flex md:flex-col'>
        <Profile/>
    </div>
  )
}

export default Header