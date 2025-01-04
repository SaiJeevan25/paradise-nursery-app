import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import plantsData from './utlis/plantsData'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
export default function App() {
	const [cartQuantity, setCartQuantity] = useState(() => {
		const savedCartQuantity = localStorage.getItem('cartQuantity');
		return savedCartQuantity ? JSON.parse(savedCartQuantity) : 0;  
	  });
	
	  const [cartItems, setCartItems] = useState(() => {
		const savedCartItems = localStorage.getItem('cartItems');
		return savedCartItems ? JSON.parse(savedCartItems) : [];  
	  });

	  useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	  })	  

	  useEffect(() => {
		localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
	  }, [cartQuantity]);

	
	  const addToCart = (key) => {
		setCartQuantity(cartQuantity + 1);
		const item = plantsData[key]
		const newItem = [item.key, item.name, item.price, 1]
		if (!cartItems.includes(item)){
			setCartItems([...cartItems, newItem]);
		} 
		
	  };
	
	  const removeFromCart = () => {
		if (cartQuantity > 0) {
		  setCartQuantity(cartQuantity - 1);
		}
	  };

	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage  />}></Route>
				<Route path='/product' element={<ProductPage addToCart={addToCart} cartQuantity={cartQuantity}/>}></Route>
				<Route path='/cart' element={<CartPage cartQuantity={cartQuantity} />}></Route>
			</Routes>
		</Router>
	)
}
