import React from 'react'
import CartLogo from './components/CartLogo'
import Product from './components/Product'
import Header from './components/Header'
import plantsData from '../utlis/plantsData'

export default function ProductPage(props) {
  const {cartQuantity, addToCart} = props
  const uniqueCategories = [...new Set(plantsData.map(plant => plant.category))]
  return (
    <>
        <Header cartQuantity={cartQuantity}/>
        <div className='m-auto flex flex-col gap-10 p-4 items-center justify-center'>
          {uniqueCategories.map((catgory) => {
            return (
              <div key={catgory}>
                <h2 className=' text-center text-5xl p-2 mb-5 underline text-green-600'>{catgory}</h2>
                <div key={catgory} className='w-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                  {plantsData.filter(plant => plant.category === catgory).map((plant) => {
                    return (
                      <Product
                        key={plant.id}
                        productKey={plant.id}
                        name={plant.name}
                        price={plant.price}
                        image={plant.imageUrl}
                        description={plant.description}
                        addToCart={addToCart}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
          
          
          

        </div>
    </>
  )
}
