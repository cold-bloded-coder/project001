import React from 'react'

function Profile() {
  return (
    <div className='group md:rounded-[10px] md:border flex md:px-[18px] md:py-[5px] justify-between items-center self-end md:scale-90 md:hover:bg-primary md:hover:text-white md:hover:scale-100 ease-in-out duration-300 hover:cursor-pointer drop-shadow-lg'>
        <div className='hidden md:block'>
            <h1 className='font-bold'>Manu</h1>
            <span className='text-textSecondary group-hover:text-gray-100'>364cs19013</span>
        </div>
      <img src="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png" alt="avatar" className='h-[35px] w-[35px] md:h-[45px] md:ml-[10px] md:w-[45px] object-contain border rounded-[10px]' />
    </div>
  )
}

export default Profile