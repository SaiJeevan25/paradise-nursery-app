import React from 'react'
import CartLogo from './CartLogo'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const { cartQuantity } = props;
    return (
        <>
            <div className='bg-green-900 flex flex-row items-center p-3'>
                <div className='flex flex-row gap-3 cursor-pointer' onClick={() => window.location.href='/'}>
                    <img src="/images/logo.jpg" alt="logoImage" className='w-16 border rounded-xl'/>
                    <div className='px-2 flex flex-col'>
                        <p className='text-md sm:text-lg  md:text-xl lg:text-2xl font-bold text-white'>Paradise Nursery</p>
                        <h1 className='text-sm sm:text-md  md:text-lg lg:text-xl'>Grow with Paradise</h1>
                    </div>
                </div>
                <div className='ml-auto' onClick={() => window.location.href='/cart'}>
                    <CartLogo cartQuantity={cartQuantity}/>
                </div>
            </div>
        </>
    )
}
