import React from 'react'
import img1 from '../imag/logo.png'
import './Navbar.css'
import Shopingcart from './Shopingcart'
const Navbar = () => {
  return (
    <div className=' Navbar   text-white   '>

<div className='      py-2  hidden  md:flex   justify-between   '>

<div className='  '>  

<a  className=' m-4 '   href=''>  صفحه ی اصلی </a>
<a     href='#'>فروشگاه</a>
<a  className=' m-4 '   href=''>  درباره من </a>


</div>
<div className=' flex justify-center items-center '>



<img src={img1}/>

</div>

</div>

<div className='    h-72       '>
  <div className=' header    '>




<h1 className='   text-2xl  my-10 '> روز خود را با یک فنجان قهوه شروع کنید</h1>

<a href='       ' className='btn     text-2xl   '>   خرید   </a>

</div>


</div>

    </div>
  )
}

export default Navbar