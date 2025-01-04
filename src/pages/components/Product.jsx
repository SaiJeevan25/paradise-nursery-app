import React from 'react'
import { useState } from 'react';

export default function Product(props) {
  const { key, name, price, image, description, addToCart } = props
  const [added, setAdded] = useState('Add To Cart');
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
        <div key={key} className='border-[5px] w-80 border-solid flex flex-1 gap-3 flex-col items-center py-3 relative'>
            <h1 className='text-4xl'>{name}</h1>
            <img className='max-w-64' src={image} alt={name}/>
            <p className='text-2xl '>₹ <span className='text-green-500'>{price}</span></p>
            <p className='text-center text-sm'>{description}</p>
            <button
              onClick={() => {
                addToCart(key);
                setAdded('Added to Cart');
                setIsDisabled(true);
              }}
              className={`border-[1px] border-gray-700 rounded-sm ${
                isDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:border-gray-900 hover:bg-green-600 hover:rounded-xl'
              } px-3 py-2 duration-150`}
              disabled={isDisabled}>
              {added}
            </button>            
            <span className='absolute text-xl top-0 right-0 border bg-red-600 p-1 text-white'>Sale</span>
        </div>
        
    </>
  )
}
