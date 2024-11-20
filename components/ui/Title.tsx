import React from 'react'

const Title = ({ title, style}:{ title: string, style: string}) => {
  return (
    <div className='title w-full mb-10 space-y-2'>
    <h2 className=' text-base sm:text-lg md:text-xl font-semibold'>
      {title}
    </h2>
    <div className={`line relative after:h-full after:sm:w-20 after:w-[20%] after:bg-primary after:absolute bg-gray-700 h-1 rounded-full overflow-hidden`}/>
  </div>
  )
}

export default Title