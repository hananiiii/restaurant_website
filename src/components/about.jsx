import React from 'react'
import pic from '../assets/res5.jpg'
import Button from './button'
import { Link } from 'react-router-dom'
const about = () => {
  return (
    <section id="about" className='pt-24  font-font'>
         <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center '>About us</h1>
         <p className='text-title_color text-md font-medium flex text-center justify-center '>Know more about the history of FlavorNest</p>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <img src={pic} className='w-full h-full'/>
                </div>
                <div className="lg:w-1/2   ">
                    <div className='lg:mx-8 flex flex-col gap-10 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>FlavorNest</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>Welcome to [Your Restaurant Name], a culinary destination that celebrates the art of dining. Situated in the heart of [Your City or Location], our restaurant offers a gastronomic journey like no other. Our talented chefs craft every dish with passion and creativity, using locally sourced, seasonal ingredients to ensure a fresh and flavorful experience with every bite. Whether you're joining us for a casual lunch, an intimate dinner, or a special occasion, our warm and inviting ambiance, paired with exceptional service, promises a memorable dining experience</p>
                  <div className=' flex lg:justify-start lg:mx-0 justify-center mx-auto'><Link to='/about'><Button ButtonText="View more"/></Link></div>
                 </div>
                </div>

         </div>
    </section>
  )
}

export default about