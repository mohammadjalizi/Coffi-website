import React from 'react'
import './Navbar.css'
import { HiOutlineShoppingBag } from 'react-icons/hi';
const Shopingcart = () => {
  return (
    <div>

<div className="top_icons shop_cart get_sidebar" data-class="open_cart_sidebar">
     <a className="head_cart_total" href="https://cafekhane.com/cart/" title="مشاهده سبد خرید">
        
         <span className="shop-badge header-cart-count">0 </span>
         
         <i className="fal fa-shopping-bag">
    
    < HiOutlineShoppingBag	/>	
    </i></a>			</div>

    </div>
  )
}

export default Shopingcart