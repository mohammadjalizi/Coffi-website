    import React from 'react'
    import img1 from '../imag/c1.svg'
    import {   PiShoppingCartSimpleLight } from 'react-icons/pi';
    import './Navbar.css'



    const Navbar = () => {
    return(
<div  className=' Navbar  '>
<div className='  flex justify-between  '>
<div className=' mt-3 '>
<img  className=' hidden md:block w-12  '  src={img1}/>


</div>
<div className=' mt-3 '>  



<a  className='   text-white  list-none mr-3 '  href='#'> صفحه ی اصلی </a>
<a  className='  text-white  list-none mr-3 '  href='#'>  قهوه  </a>
<a  className='   text-white list-none mr-3 '  href='#'>  سبد خرید  </a>
<a   className='  text-white  list-none mr-3 ' href='#'>  درباره ی ما  </a>


</div>
<div className='  mt-3 flex items-center  '>
<span className=' relative  cart__icon'>

<  PiShoppingCartSimpleLight className=' text-white text-2xl '/>
<span className="cart__badge">0</span>
</span>


</div>
</div>

<div className=' relative header '>
<div className=' absolute left-3  top-32'>    
<h1 className=' text-white   my-10  '> اکنون می توانید انرژی را احساس کنید  </h1>

<p className='  heading text-white  '> روز خود را با
یک قهوه شروع کنید </p>
<a href="#" className="  my-4 text-center my-5 primary-btn text-uppercase">
خرید قهوه
</a>

</div>
</div>
</div>


      
    )
    }

    export default Navbar