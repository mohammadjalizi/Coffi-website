import React from 'react'
import './Seaction.css'
import img1 from '../imag/b1.jpg'
import img2 from '../imag/b2.jpg'

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

<img src={img2}/>


<ul className="post-tags">
<li><a className=' hover:text-white ' href="#">سفر کردن</a></li>
	<li><a className=' hover:text-white ' href="#">سبک زندگی</a></li>
</ul>

<h4 className=' mb-6'>سلام به کافه خانه خوش اومدید 🙂</h4>
<p className='  w-full   md:w-[33rem] '>
ما قصد داریم تا کار شما رو برای رفتن به بازار راحت کنیم و نگذاریم بین صدها مدل قهوه سرگردون بشید و آخر سر با چیزی که سلیقه شما نیست به خونه برگردید.
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

<h4 className=' mb-6 '>سلام به کافه خانه خوش اومدید 🙂</h4>
<p className='  w-full   md:w-[33rem] '>
ما قصد داریم تا کار شما رو برای رفتن به بازار راحت کنیم و نگذاریم بین صدها مدل قهوه سرگردون بشید و آخر سر با چیزی که سلیقه شما نیست به خونه برگردید.
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