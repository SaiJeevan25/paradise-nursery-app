import React from 'react'
import Header from './components/Header'
import CartItem from './components/CartItem'
export default function CartPage(props) {
  const {cartQuantity, cartItems, removeFromCart, singleItem } = props

  function totalPrice() {
    return cartItems.reduce((total, item) => total + item[3] * item[4], 0)
  } 

  return (
    <>
      <Header cartQuantity={cartQuantity}/>
      <div className='flex flex-col my-8 sm:flex-col md:flex-row lg:felx-row'>
        <div className='flex flex-col mx-auto'>
          <h1 className='text-xl sm:text-xl text-center md:text-2xl lg:text-3xl p-2 mb-5'>Cart Items: {cartQuantity}</h1>
          <div className='flex flex-col gap-4'>
            { cartItems ? cartItems.map((item) => {
              return (
                <CartItem key={item[0]} item={item} removeFromCart={removeFromCart} singleItem={singleItem} />
              )
            }) : () => {
              return <CartItem item={null}/>
            }}
          </div>
        </div>
        <div className=' flex flex-col gap-5 items-center mt-10  mx-auto px-10'>
          <p className='text-2xl'>Total Amount: ₹{totalPrice()}</p>
          <button className='border p-2 bg-blue-700 rounded-lg text-white'>Checkout</button>
          <button onClick={() => window.location.href='/product'} className='border p-2 bg-green-700 rounded-lg text-white'>Continue Shopping</button>
        </div>
      </div>
    </>
  )
}
