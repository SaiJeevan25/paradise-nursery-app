import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

function CartLogo(props) {
  const {cartQuantity} = props;
  return (
    <div className="cart-container">
      <div className="cart-icon" >
        <FaShoppingCart size={38} className='text-gray-300'/>
        {cartQuantity > 0 && (
          <span className="cart-count">{cartQuantity}</span>
        )}
      </div>
    </div>
  );
}

export default CartLogo;
