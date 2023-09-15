import React from 'react'
import Logo from './logo'
import Nav from './nav'
import Button from "./button";

const header = () => {
  return (
    <section className='bg-body_color flex-wrap p-8 sticky top-0 z-[20] mx-auto flex   w-full  items-center  justify-between  '>
        <Logo/>
        <Nav/>
        {/* <div className ='lg:block hidden'> */}
        {/* <Button ButtonText="join us" /> */}
        {/* </div> */}
      
    </section>
  )
}

export default header