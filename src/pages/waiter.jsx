import React from 'react'
import Header from '../components/header'
import Waiter from '../assets/waiter1.jpg'
import Waiter2 from '../assets/waiter2h.jpg'
import Waiter3 from '../assets/waiter3.jpg'
const waiter = () => {

    const wait=[
        {
            title:' AnWarm Welcome:',
            text:' Guests should be greeted with a genuine and friendly welcome. A warm smile and a courteous greeting set the tone for the entire dining experience.'
        },
        {
            title:'Attentiveness: ',
            text:'Staff members should be attentive to the needs of guests without being intrusive. This includes promptly refilling drinks, providing recommendations, and being available for questions.'
        },
        {
            title:'Knowledgeable Staff:',
            text:' Servers should have in-depth knowledge of the menu, including ingredients, preparation methods, and special features. This allows them to provide detailed explanations and make informed recommendations.'
        },
        {
            title:'Timely Service:',
            text:' Dishes should be served promptly and at the appropriate temperature. Delays can negatively impact the dining experience.'
        },
        {
            title:'Professionalism:',
            text:' Staff should conduct themselves in a professional manner, which includes being well-groomed, polite, and respectful at all times.'
        },
        {
            title:'Cleanliness: ',
            text:'The restaurant should be impeccably clean, from the dining area to restrooms. This reflects a commitment to hygiene and attention to detail.'
        },
    ]
  return (
    <section className='font-font '>
           <Header/>
           <h1 className='text-text_color text-4xl font-semibold flex text-center mb-3 justify-center pt-16 '>Our staff</h1>
         <p className='text-title_color text-md font-medium flex text-center justify-center '>Learn more our Professional waiters and staffs</p>
         <div className='grid lg:grid-cols-3 grid-cols-1 w-full px-8 gap-6 py-16'>
               <img src={Waiter}/>
               <img src={Waiter2}/>
               <img src={Waiter3}/>
         </div>
         <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full px-8 pt-8 mb-8 '>
            {wait.map((wa,index)=>(

           
                   <div key={index} className='rounded-lg border border-title_color w-full h-auto px-8 py-6'>
                         <h1 className='text-text_color text-2xl font-semibold flex text-center mb-3 justify-center'>{wa.title}</h1>
                         <p className='text-title_color text-md font-medium flex text-center justify-center'>{wa.text}</p>
                         
                   </div>
                    ))}
         </div>
    </section>
  )
}

export default waiter