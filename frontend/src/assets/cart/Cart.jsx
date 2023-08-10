import React from 'react'
import Navbar from '../APPbar/Navbar'
import { Footer } from '../footer/Footer'
import { useSelector } from 'react-redux'
import './Cart.css'
const Cart = () => {
  const {selectedProducts} = useSelector((state) => state.carttt)
  return (
 
    
    <div className='  '>
 {selectedProducts.map((item)=>{

return (

<div>

<>
 
</>


  </div>

)

 })}
  
    </div>
  
  )
}

export default Cart