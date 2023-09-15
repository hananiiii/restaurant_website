import React from 'react'
import Header from '../components/header'
import Pic from '../assets/chef1.jpg'
import pic from '../assets/chef2.jpg'
import pic2 from '../assets/shef3.jpg'
import pic3 from '../assets/shef4.jpg'
const chef = () => {
  return (
    <section >
      <Header/>
      <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center pt-16 '>Our chefs</h1>
         <p className='text-title_color text-md font-medium flex text-center justify-center '>Learn more about our famous and high rated chefs</p>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 lg:px-44 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <img src={pic} className='w-[75%] h-full  mx-auto flex lg:justify-start justify-center'/>
                </div>
                <div className="lg:w-1/2   ">
                    <div className='lg:mx-8 flex flex-col gap-6 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>Jamie Oliver</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>
                  Gordon Ramsay is a renowned British chef, known for his fiery demeanor and exceptional culinary skills. With multiple Michelin stars to his name, Ramsay has left an indelible mark on the culinary world</p>
                  <span className='flex flex-row gap-2 lg:text-start lg:justify-start justify-center text-center text-yellow-300 text-2xl'>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  </span>
                 </div>
                </div>

         </div>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-44 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
               <div className='lg:mx-8 flex flex-col gap-6 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>Anthony Bourdain</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>
                  His meticulous approach to cooking and commitment to perfection have earned him international acclaim. Beyond his kitchen prowess, Ramsay is also a popular television personality,
                  </p>
                  <span className='flex flex-row gap-2 lg:text-start lg:justify-start justify-center text-center text-yellow-300 text-2xl'>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  </span>
                 </div>
                
                </div>
                <div className="lg:w-1/2   ">
                <img src={Pic} className='w-[75%] h-full  mx-auto flex lg:justify-start justify-center'/>
                </div>

         </div>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 lg:px-44 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <img src={pic2} className='w-[75%] h-full mx-auto flex lg:justify-start justify-center'/>
                </div>
                <div className="lg:w-1/2   ">
                    <div className='lg:mx-8 flex flex-col gap-6 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>Julia Child</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>
                  With his cheerful demeanor and passion for cooking, Julia made gourmet cuisine accessible to home cooks. Her long-running television series, "The French Chef," became a beloved staple in households across the United States
                  </p>
                  <span className='flex flex-row gap-2 lg:text-start lg:justify-start justify-center text-center text-yellow-300 text-2xl'>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                 
                  </span>
                 </div>
                </div>

         </div>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-16 lg:px-44 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
               <div className='lg:mx-8 flex flex-col gap-6 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-semibold  '>Gordon Ramsay</h1>
                  <p className='text-text_color text-md font-medium  leading-8'>
                  Julia Child was an American chef, author, and television personality who revolutionized the way Americans approached French cuisine. Her groundbreaking cookbook, "Mastering the Art of French Cooking,
                  </p>
                  <span className='flex flex-row gap-2  lg:text-start lg:justify-start justify-center text-center text-yellow-300 text-2xl'>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                 
                  </span>
                 </div>
                
                </div>
                <div className="lg:w-1/2   ">
                <img src={pic3} className='w-[75%] mx-auto h-full flex lg:justify-start justify-center'/>
                </div>

         </div>
    </section>
  )
}

export default chef