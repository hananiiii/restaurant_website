import React, { useState, useEffect } from 'react';
import food_one from '../assets/carissa-gan-KSXvrqKUxnc-unsplash.jpg';
import Anotherfood from '../assets/brina-blum-surQ2mkZNxw-unsplash.jpg';
import food_two from '../assets/alex-munsell-Yr4n8O_3UPc-unsplash.jpg';
import food_three from '../assets/brk2.jpg';
import food_five from '../assets/thomas-tucker-MNtag_eXMKw-unsplash.jpg';
import { Link } from 'react-router-dom';


const hero = () => {
  const slides = [
    {
      image: food_one,
      title: 'spaghetti Carbonara',
      content: 'Spaghetti Carbonara is a classic Roman pasta dish known for its simplicity and rich, creamy flavor. This iconic Italian dish features spaghetti noodles tossed with a delectable sauce made from eggs, Pecorino Romano cheese, pancetta or guanciale, and freshly ground black pepper. ',
    },
    {
      image: Anotherfood,
      title: 'Black Forest Cake',
      content: 'The Black Forest Cake, or "Schwarzwälder Kirschtorte" in German, is a renowned dessert hailing from the Black Forest region of Germany. This delectable cake is a masterpiece of layered indulgence, known for its distinctive flavors and stunning appearance.',
    },
    {
        image: food_two,
        title: 'Filet Mignon',
        content: 'Filet Mignon is a prime cut of beef renowned for its tenderness, succulence, and exquisite flavor. This premium steak is cut from the tenderloin, a section of the beef that experiences minimal use, resulting in exceptionally tender meat.',
      },
      {
        image: food_three,
        title: 'Buttermilk Pancakes',
        content: 'Buttermilk pancakes have a universal appeal and are a cherished part of breakfast culture in many countries. They offer a warm and inviting start to the day, making them a perennial favorite among both young and old alike.',
      },
     
      {
        image: food_five,
        title: 'Margherita Pizza',
        content: 'The Margherita pizza is a timeless classic that has earned its place as one of the most iconic and beloved pizzas worldwide. Named after Queen Margherita of Savoy, this pizza is celebrated for its simplicity and emphasis on high-quality ingredients.',
      },
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const { image, title, content } = slides[currentSlide];

  return (
    <div id="hero" className='h-[630px]   relative overflow-hidden group' >
      <img src={image} className='w-screen h-screen  object-container' alt={title} />
      <div className='cursor-pointer absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 text-center bg-black bg-opacity-50 '>
        <h1 className='font-bold text-4xl text-text_color mb-4'>{title}</h1>
        <p className='font-medium text-lg text-text_color max-w-xl'>{content}</p>
        
         <Link to='/Register'> <button className='gradient-button mt-8 bg-redd w-[200px] px-10 py-4 rounded-lg    shadow-redd text-text_color  font-medium hover:duration-300 hover:shadow-sm  hover:transform hover:-translate-y-1  transition-transform duration-300'>
          Register now
          </button>
          </Link>
         
      
      </div>
    </div>
  );
};

export default hero;