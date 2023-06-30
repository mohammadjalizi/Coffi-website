import React from 'react'
import img from '../imag/g6.jpg'
import img2 from '../imag/signature.png'
const Header = () => {
  return (
    <div className='  md:flex justify-between my-10  md:mx-80  ' >
<div className='  ml-12 w-[400px] '>
<h1 className='   text-[#b68834] text-3xl '> فواید نوشیدن قهوه در صبح </h1>
<p className=' my-4 '>نوشیدن قهوه در صبح می تواند به شما کمک کند سطح انرژی خود را افزایش دهید. کافئین موجود در این ماده شگفت انگیز مانند یک روانگردان عمل می‌کند. مطالعات بسیاری نشان می دهد که قهوه می تواند به بهبود عملکردهای مختلف مغز شامل خلق و خو، حافظه، سطح انرژی، هوشیاری، زمان واکنش و همچنین عملکرد شناختی عمومی کمک کند‌.

</p>
<img src={img2}/>
</div>
<div className=' h-[340px] shadow-2xl '>
<img className=' shadow-2xl rounded-lg     h-full ' src={img}/>

</div>


    </div>
  )
}

export default Header