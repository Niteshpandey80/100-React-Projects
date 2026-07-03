import React from 'react'
import img from '/photo.png'

const Main = () => {
  return (
    <div className='flex w-full h-[80%]'>
      <div className='w-[50%] h-full'>
          <div className='mt-40 ml-25 flex flex-col gap-5'>
               <h3 className='text-2xl'>Hello, My Name is</h3>
               <h1 className='text-7xl font-semibold'>JURGEN HIDENI</h1>
               <p >Coding Hub is your professional brand dedicated to technology and engineering,  <br /> represented by a distinct visual identity. It features a modern logo </p>
               <button className='bg-[#B00000] w-30 py-3'>Contact ME </button>
          </div>
      </div>
      <div className='w-[50%] h-full'>
        <img className='w-170' src={img} alt="" />
      </div>
    </div>
  )
}

export default Main
