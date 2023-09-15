import React from 'react'
import { Link } from 'react-router-dom'
const logo = () => {
  return (
    <Link to='/Home'><div className='flex gap-3 font-font  font-semibold items-center cursor-pointer'>
        <span className='text-4xl text-redd'>
        <ion-icon name="fast-food-outline"></ion-icon>
        </span>
        <h1 className='text-2xl text-text_color '>FlavorNest</h1>
    </div>
    </Link>
  )
}

export default logo