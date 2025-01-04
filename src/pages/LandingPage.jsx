import React from 'react'

export default function LandingPage() {
  return (
    <>
        <div className='landing-page'>
            
            <div className='min-h-screen flex flex-col  justify-center items-center flex-nowrap gap-10 mx-5 relative z-10'>
                <div className='flex flex-col gap-5 px-10 py-10 border-b-4'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Welcome to, </h1>
                    <span className='text-green-400 font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text '>Paradise <span className='text-green-700'>Nursery</span></span>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'> your ultimate destination for all things green and blooming</h1>
                    <p className=' text-sm sm:text-sm md:text-md lg:text-lg text-white '>
                        We specialize in offering a wide range of vibrant plants, premium gardening tools, and eco-friendly products to help you create your dream garden. Whether you're a seasoned gardener or a budding enthusiast, our nursery provides expert tips and personalized care advice for every plant you take home. Explore our collection of ornamental, indoor, outdoor, and exotic plants that add beauty and tranquility to your space. At <span className='text-green-00 underline-title'>Paradise Nursery</span> , we believe in fostering a greener planet, one plant at a time. Visit us to discover the joy of gardening and bring nature closer to your heart.
                    </p>
                </div>
                <button
                onClick={() => {
                    window.location.href='/product'
                }}
                className='px-6 mx-auto py-3 mb-8 rounded-lg  bg-green-600 hover:bg-green-800 hover:rounded-md  duration-200 text-white'
                    >Get Started</button>
            </div> 
        </div>   
    </>
  )
}
