import React from 'react'
import Header from '../components/header'
import Res1 from '../assets/res1.jpg'
import Res6 from '../assets/res6.jpg'
import Res2 from '../assets/res2.jpg'
import Res7 from '../assets/res7h.jpg'
import Res3 from '../assets/res3.jpg'
import Res8 from '../assets/res8.jpg'
import Res4 from '../assets/res4.jpg'
import Res9 from '../assets/res9.jpg'
import Res5 from '../assets/res5.jpg'
import Res10 from '../assets/res10.jpg'
const aboutmore = () => {
    const pic=[
        {
            img:Res3
        },
        {
            img:Res1
        },
       
        {
            img:Res7
        },
        {
            img:Res10
        },
        {
            img:Res5
        },
        {
            img:Res8
        },
        {
            img:Res4
        },
        {
            img:Res2
        },
        {
            img:Res9
        },
        {
            img:Res6
        },
       
       
    ]
  return (
    <section>
        <Header/>
    <div className='w-full  p-5 pt-16  pb-10 mx-auto mb-10 gap-5 lg:columns-3 sm:columns-2'>
        {pic.map((immg,index)=>(

       
    <img key={index} src={immg.img} className='pb-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer
                    '/>
                    ))}

    </div>
    </section>
  )
}

export default aboutmore