import React from 'react'
import './Seaction.css'
import img1 from '../imag/b1.jpg'
import img3 from '../imag/b2.jpg'
const Seaction = () => {
  return (
    <div>

<div>         
            
            <h1  className=' head   text-3xl text-center '>
    
    
            چه نوع قهوه ای برای شما سرو می کنیم
    
            </h1>
            <p className=' text-center  my-5 '>   کسانی که به شدت عاشق سیستم سازگار با محیط زیست هستند.  </p>
            </div>

            {/* photo */}
<div className='  photo  flex justify-between flex-wrap'>



<div className=''>

<img src={img1}/>

<ul className="post-tags">
<li><a className=' hover:text-white ' href="#">سفر کردن</a></li>
	<li><a className=' hover:text-white ' href="#">سبک زندگی</a></li>
</ul>

<h4>Portable latest Fashion for young women</h4>
<p className='  w-full   md:w-96 '>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
</p>
<p className="post-date">
								31st January, 2018
							</p>
</div>

<div>

<img src={img1}/>

<ul className="post-tags">
<li><a className=' hover:text-white ' href="#">سفر کردن</a></li>
	<li><a className=' hover:text-white ' href="#">سبک زندگی</a></li>
</ul>

<h4>Portable latest Fashion for young women</h4>
<p className=' w-full   md:w-96'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
</p>
<p className="post-date">
								31st January, 2018
							</p>
</div>

</div>
{/* ende photo */}
    </div>
  )
}

export default Seaction