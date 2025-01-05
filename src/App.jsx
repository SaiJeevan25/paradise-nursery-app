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
        return savedCartItems? JSON.parse(savedCartItems) : [];
	});  

	useEffect(() => {
		localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
	}, [cartQuantity]);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	
	const addToCart = (productKey) => {
		const item = plantsData[productKey]
		const index = cartItems.findIndex(item => item[0] === productKey)
		const updatedCartItems = [...cartItems]
		if (index === -1){
			const newItem = [productKey, item.imageUrl, item.name,  item.price, 1]
			updatedCartItems.push(newItem)
			console.log(updatedCartItems)
		} else {
			const updatedCartItems = [...cartItems];
			updatedCartItems[index][4]++;
		}
		setCartItems(updatedCartItems);
		setCartQuantity(cartQuantity + 1);
	};
	
	const removeFromCart = (productKey) => {
		const removeItem = cartItems.find(item => item[0] === productKey);
		const updatedCartItems = cartItems.filter(item => item[0]!== productKey);
		setCartItems(updatedCartItems);
		setCartQuantity(cartQuantity - removeItem[4]);
	};

	const singleItem = (productKey,action) => {
		const itemIndex = cartItems.findIndex(item => item[0] === productKey);
		if (action === 0) {
			cartItems[itemIndex][4]++;
			setCartQuantity(cartQuantity + 1);
		} else if (action === 1) {
			if (cartItems[itemIndex][4] === 1) {
                removeFromCart(productKey);
				setCartQuantity(cartQuantity- 1);
				return
            };
			cartItems[itemIndex][4]--;
			setCartQuantity(cartQuantity- 1);
            
		};
		setCartItems([...cartItems]);
	};

	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage  />}></Route>
				<Route path='/product' element={<ProductPage addToCart={addToCart} cartQuantity={cartQuantity}/>}></Route>
				<Route path='/cart' element={<CartPage setCartQuantity={setCartQuantity} setCartItems={setCartItems}  cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} cartItems={cartItems} removeFromCart={removeFromCart} singleItem={singleItem}/>}></Route>
			</Routes>
		</Router>
	)
}
