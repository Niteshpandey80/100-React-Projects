import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-6 bg-black w-full h-17'>
         <div className='text-xl'>
             <h1 className='text-red-500 font-bold'>The Coding <span className='text-white'>Hub</span></h1>
         </div>
        <div className='flex text-white gap-10  '>
          <h3>HOME</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT US</h3>  
          <h3>HELP</h3>
        </div>
    </div>
  )
}

export default Navbar
