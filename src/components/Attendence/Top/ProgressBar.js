import React from 'react'

export function ProgressBar(props) {
  return (
    <div className='flex flex-col w-full h-1/2 my-auto'>
      <div className='mx-2 my-auto'>
        <span>{props.title}</span>
      </div>
      <div className='my-auto'>
        <div className='w-52 mx-2 h-1.5 bg-[#B1BDE9] flex rounded' ><div className='w-36 rounded h-1.5 bg-[#647ACF] place-self-end'></div></div>
        <span className='mx-36 text-[#647ACF] font-bold'>68%</span>
      </div>
    </div>
  )
}
