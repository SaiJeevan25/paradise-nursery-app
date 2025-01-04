import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
export default function App() {
	const [cartQuantity, setCartQuantity] = useState(() => {
		const savedCartItems = localStorage.getItem('cartQuantity');
		return savedCartItems ? JSON.parse(savedCartItems) : 0;  
	  });
	
	  

	  useEffect(() => {
		localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
	  }, [cartQuantity]);

	
	  const addToCart = (key) => {
		setCartQuantity(cartQuantity + 1);
		
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
