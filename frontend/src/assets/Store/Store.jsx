import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Store.css'
import { useGetProductApiByNameQuery } from '../../Redux/ProductApi'
const dataarry=[{},{},{}]
import { BsFillBasketFill } from "react-icons/bs";
import {   PiShoppingCartSimpleLight } from 'react-icons/pi';
import { useState } from 'react';
import { Addtocart } from '../../Redux/ProductSlice'

const Store = () => {
  const [Count,SetCount]=useState(1)
  const { data, error, isLoading } = useGetProductApiByNameQuery()
  const dispatch = useDispatch()

  if (isLoading) {
    return(
<>
erooorrr
</>

    )
  }
if (data) {
  return (
    <div className=' menu '>


      

<h1 className='  text-[#b68834] text-3xl text-center md:my-8 '>فروشگاه قهوه</h1>

<div className=' flex  flex-wrap gap-8 '>   
{
data.map((item)=>{

return(
  
<div key={item.id} className=' p-[30px]  shadow-2xl Card  w-80  hover:shadow-none    '>


<img src={item.imageLink}/>
<div className='  '>
<h1 className=' text-center my-2 text-xs '>{item.productName}</h1>
<div className='  flex justify-between items-center my-2  '>  
<h1  className='  h1 text-xl '>  {item.price} تومان </h1>
<strong  onClick={()=>{


}} className='  cursor-pointer bg-orange-600  text-sm  '>  <  PiShoppingCartSimpleLight onClick={()=>{

dispatch(Addtocart())


}} className='  text-2xl '/>   </strong>
    </div>
  </div>





</div>

)


})

}
</div>
    </div>
  )
}
if (error) {
  return(

<>
erooor code
</>

  )
}
}

export default Store