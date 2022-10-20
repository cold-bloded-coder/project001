import React from 'react'

export function ProgressBar(props) {
  return (
    <div className='flex flex-col w-full h-1/3'>
      <div className='my-2 mx-2'>
        <span>{props.title}</span>
      </div>
      <div className=''>
        <div className='w-52 mx-2 h-1.5 bg-blue-300 flex rounded' ><div className='w-36 rounded h-1.5 bg-blue-600 place-self-end'></div></div>
        <span className='mx-36 text-blue-600 font-bold'>68%</span>
      </div>
    </div>
  )
}
