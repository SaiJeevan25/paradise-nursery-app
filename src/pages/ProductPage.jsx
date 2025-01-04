import React from 'react'
import CartLogo from './components/CartLogo'
import Product from './components/Product'
import Header from './components/Header'
import plantsData from '../utlis/plantsData'

export default function ProductPage(props) {
  const {cartQuantity, addToCart} = props
  return (
    <>
        <Header cartQuantity={cartQuantity}/>
        <div className='m-auto w-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 items-center justify-center'>
          {plantsData.map((plant) => {
            return (
              <Product
                key={plant.id}
                name={plant.name}
                price={plant.price}
                image={plant.imageUrl}
                description={plant.description}
                addToCart={addToCart}
              />
            )
          })}
        </div>
    </>
  )
}
