import React from 'react'
import './menu.css'
import Food_1 from '../assets/food1.jpg'
import Food_2 from '../assets/food2.jpg'

import Food_3 from '../assets/food3h.jpg'

import Food_4 from '../assets/food4.jpg'

import Food_5 from '../assets/food5.jpg'

import Food_6 from '../assets/food6.jpg'

import Food_7 from '../assets/food7.jpg'
const menu = () => {

    const men=[
        {
            img:Food_1,
            title:'steak',
            price:'60',
            text:'Indulge in a symphony of taste and texture with every bite',
        },
        {
            img:Food_2,
            title:'steak',
            price:'49',
            text:'Fresh, seasonal ingredients are the heart of our culinary creations',
        },
        {
            img:Food_3,
            title:'steak',
            price:'80',
            text:'Savor the rich, aromatic flavors of our signature dishes',
            
        },
        {
            img:Food_4,
            title:'steak',
            price:'100',
            text:'Explore a world of culinary delights, crafted with passion and expertise.',
        },
        {
            img:Food_5,
            title:'steak',
            price:'55',
            text:'Each plate is a canvas painted with vibrant colors, flavors.',
        },
        {
            img:Food_6,
            title:'steak',
            price:'75',
            text:'Dive into a sea of exquisite flavors, where every dish tells a story',
        },
        
    ]
  return (
    <section id="menu" className='pt-24 font-font'>
            <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center '>Our menu</h1>
         <p className='text-title_color text-md font-medium flex text-center justify-center mx-auto max-w-lg '>Discover Our Tasty Menu Selections</p>
          <div className='grid lg:grid-cols-2  grid-cols-1   gap-12 lg:px-12 sm:px-12 px-8  py-24'>
              {men.map((meny,index)=>(


                <div key={index} className='flex   text-start cursor-pointer '>
                   
                    <img className='w-24 h-24 rounded-full object-cover' src={meny.img}/>
                    <div className='flex flex-col lg:max-w-lg sm:max-w-lg max-w-xs'>
                    <div className='flex flex-row justify-between mb-3 mt-2 pl-12'>
                    <h2 className='text-text_color font-bold text-3xl flex  text-ceter items-start'>{meny.title}</h2>
                    <h2 className='text-text_color text-2xl text-medium text-end flex   items-start'>{meny.price}$</h2>
                    </div>
                    <p className='  font-meduim text-lg text-title_color flex items-start ml-12'>{meny.text}</p>
                   </div>
                   </div>
                   ))}
                </div>
               
                
                

           
           


    </section>
  )
}

export default menu