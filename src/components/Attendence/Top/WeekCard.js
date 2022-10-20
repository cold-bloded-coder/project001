import React from 'react'

export function WeekCard(props) {
  return (
    <div className='flex flex-col items-center '>
      <div>
        <span className='text-sm text-center'>{props.title}</span>
      </div>
      <div className='w-20 h-10 bg-gray-200 flex'>
        <span className='text-2xl font-pop my-auto mx-auto leading-none'>{props.value}</span>
      </div>
    </div>
  )
}
