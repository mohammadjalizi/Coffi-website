import React from 'react'
import img1 from '../imag/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=' Navbar   text-white   '>

<div className='  flex   justify-between  py-5 '>
<div className=' gap-6  '>  
<a href=''>  صفحه ی اصلی </a>
<a href=''>  در باره</a>
<a href='#'>قهوه</a>
</div>
<div className=' flex justify-center items-center '>



<img src={img1}/>
</div>

</div>

<div className='    h-72       '>
  <div className=' header    '>




<h1 className='   text-2xl  my-10 '> روز خود را باقهوه شروع کنید  </h1>

<a href='       ' className='btn     text-2xl   '>   خرید   </a>
</div>


</div>

    </div>
  )
}

export default Navbar