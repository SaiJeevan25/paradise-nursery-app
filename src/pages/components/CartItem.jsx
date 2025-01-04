import React from 'react'

export default function CartItem(props) {
    const {item, removeFromCart, singleItem} = props
    const productKey = item[0]
    return (
        <>
            <div className='flex flex-row border-[3px] border-solid '>
                <img src={item[1]} alt="Image" className='my-auto w-56 ' />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-lg sm:text-lg md:text-xl lg:text-2xl'>{item[2]}</h1>
                    <p className='text-lg '>₹ <span className='text-green-500'>{item[3]}</span></p>
                    <div className='w-32 flex flex-row gap-3 justify-center items-center'>
                        <button 
                        onClick={() => {singleItem(productKey,1)}}
                        className='border border-solid rounded-lg px-2 '>-</button>
                        <span >{item[4]}</span>
                        <button 
                        onClick={() => {singleItem(productKey,0)}}
                        className='border border-solid rounded-lg px-2'>+</button>
                    </div>
                <button 
                onClick={() => {removeFromCart(productKey)}}
                className='border border-solid px-2 py-1 rounded-md bg-red-800 text-white text-xs  '>Remove</button>
                </div>
            </div>
        </>
  )
}
