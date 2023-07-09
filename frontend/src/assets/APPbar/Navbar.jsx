    import React from 'react'
    import img1 from '../imag/c1.svg'
    import {   PiShoppingCartSimpleLight } from 'react-icons/pi';
    import './Navbar.css'



    const Navbar = () => {
    return(
<div div className=' Navbar '>
<div className='  flex justify-between  '>
<div>
<img  className=' hidden md:block w-12  '  src={img1}/>


</div>
<div>  



<a  className=' list-none mr-3 '  href='#'> صفحه ی اصلی </a>
<a  className=' list-none mr-3 '  href='#'>  قهوه  </a>
<a  className=' list-none mr-3 '  href='#'>  سبد خرید  </a>
<a   className=' list-none mr-3 ' href='#'>  درباره ی ما  </a>


</div>
<div className=' flex items-center  '>
<span className=' relative  cart__icon'>

<  PiShoppingCartSimpleLight className=' text-white text-2xl '/>
<span className="cart__badge">0</span>
</span>


</div>
</div>
</div>


      
    )
    }

    export default Navbar