import React from 'react'
import Pic from '../assets/res.jpg'
import Button from './button'
import { Link } from 'react-router-dom'
const reserve = () => {
  return (
    <section id="reservation" className='pt-24 font-font '>
        <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center '>Reservation</h1>
         <p className='text-title_color text-md font-medium flex text-center justify-center '>Check out our precious places</p>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
               <div className='lg:mx-8 flex flex-col gap-10 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>FlavorNest</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>
                  "Welcome to our exquisite restaurant, where every meal is a celebration of taste and togetherness. Whether you're planning a cozy family gathering, a lively get-together with friends, or a memorable birthday bash, our inviting ambiance and personalized service ensure that every occasion is truly special. Our spacious venue offers comfortable seating and a warm atmosphere, perfect for creating lasting memories with your loved ones. To guarantee your preferred date and time, we encourage you to make a reservation in advance. Let us be the backdrop for your cherished moments – reserve your spot today and prepare to experience exceptional dining paired with unforgettable moments."

                  </p>
                 <div className=' flex lg:justify-start lg:mx-0 justify-center mx-auto'><Link to='/Reservation'><Button ButtonText="Reserve now"/></Link></div>
                 </div>
                
                </div>
                <div className="lg:w-1/2   ">
                <img src={Pic} className='w-full h-full'/>
                </div>

         </div>
    </section >

  )
}

export default reserve