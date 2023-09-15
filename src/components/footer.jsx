import React from 'react'
import Logo from './logo'
const footer = () => {
  return (
    <section className='mt-24 flex justify-between text-center items-center px-8 py-4 w-full bg-title_color h-auto '>
       <Logo/>
       <p className='font-costum lg:block hidden text-lg text-center text-body_color'>Made with love</p>
       <span className='flex gap-3 text-2xl text-body_color '>
            <a><ion-icon name="logo-instagram"></ion-icon></a>
         <a><ion-icon name="logo-facebook"></ion-icon></a>
         <a><ion-icon name="logo-github"></ion-icon></a>
         </span>
    </section>
  )
}

export default footer