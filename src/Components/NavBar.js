import React from 'react'

export default function NavBar({Logo,Link,Link2}) {
  return (
    <div className='bg-transparent flex justify-between h-1/6 align-middle'>

      <div className='text-center  w-1/3 flex justify-center ml-16' >
        <div className='mt-5'>{Logo ? Logo : null}</div>
      </div>

      <div className=' w-1/3 flex justify-evenly align-middle mr-24'>
        
        <div className='mt-7'>{Link ? Link : null}</div>
        <div className='mt-7'>{Link2 ? Link2 : null}</div>

      </div>
    </div>
  )
}
