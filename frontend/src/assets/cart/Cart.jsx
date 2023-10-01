import React from 'react'
import Navbar from '../APPbar/Navbar'
import { Footer } from '../footer/Footer'
import { useSelector } from 'react-redux'
import './Cart.css'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { addToCart } from '../Redux/ProductSlice'

const Cart = () => {
  // @ts-ignore
  const {selectedProducts} = useSelector((state) => state.carttt)
  return (
 
    
    <div className='  '>
 {selectedProducts.map((item)=>{

 

return (

<div>

<div key={item.id} className=' p-[30px]  shadow-2xl Card  w-80  hover:shadow-none    '>


<img src={item.imageLink}/>
<div className='  '>
<h1 className=' text-center my-2 text-xs '>{item.productName}</h1>
<div className='  flex justify-between items-center my-2  '>  
<h1  className='  h1 text-xl '>  {item.price} تومان </h1>
<strong  onClick={()=>{


}} className='  cursor-pointer bg-orange-600  text-sm  '>  <  PiShoppingCartSimpleLight onClick={()=>{

  dispatch(addToCart())

}} className='  text-2xl '/>   </strong>
    </div>
  </div>





</div>


  </div>

)

 })}
  
    </div>
    
  
  )
}

export default Cart