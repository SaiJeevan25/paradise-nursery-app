import React from 'react'
import Header from './components/Header'
export default function CartPage(props) {
  const {cartQuantity} = props
  return (
    <>
      <Header cartQuantity={cartQuantity}/>
      <div className='relative'>
        <div className='absolute right-20 top-20 flex flex-col gap-5'>
          <p>Total Amount: $0</p>
          <button className='border p-2'>Checkout</button>
          <button className='border p-2'>Continue Shopping</button>
        </div>
        <div>
          <h1>Cart Items: </h1>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}
