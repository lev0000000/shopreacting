import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
  const [cartOpen,setCartOpen] = useState(false)
  

  return(
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingBasket onClick={()=>setCartOpen(even=>!even)} className={`shop-cart-button ${cartOpen && "active"}` }/>
            
            {cartOpen && (
              <div className="shop-cart"> 

              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
