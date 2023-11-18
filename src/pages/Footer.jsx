import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-white bg-secondary mt-10 pt-8 pb-2 list-none text-center'>
      <div className='flex justify-center items-center'>
        <img src="./src/assets/icon.png" alt="" width={20} height={20}/>
        <h1 className='text-3xl'>bookMe</h1>
      </div>
      <div className='lg:flex justify-center items-center gap-8 my-3 text-gray-400'>
        <a href=""><li >Home</li></a>
        <a href="#search"><li>Discover</li></a>
        <a href="#recomendation"><li>Recomendation</li></a>
        <a href="3wishlist"><li>Wishlist</li></a>
      </div>
      <span className='text-gray-400 text-sm'>Created by <a href="https://github.com/hanifsyabani" className='text-white'>Muhammad Hanif Sya'bani</a></span>
      <p className='mt-10 text-sm'>All rights reserved. Copyright &copy; 2023</p>
    </footer>
  )
}

export default Footer