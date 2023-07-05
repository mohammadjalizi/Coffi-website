import React from 'react'
import './Gallery.css'
import bulkImages from './bulkImages'
import image1 from './photo gallery/g1.jpg'
import image2 from './photo gallery/g2.jpg'
import image3 from './photo gallery/g3.jpg'
import image4 from './photo gallery/g4.jpg'
import image5 from './photo gallery/g5.jpg'


const Gallery = () => {
  return (
    
    <div className='   md:my-20  '>
        
        <div>         
            
        <h1  className=' head  text-3xl text-center '>


        چه نوع قهوه ای برای شما سرو می کنیم

        </h1>
        <p className=' text-center  my-5 '>   کسانی که به شدت عاشق سیستم سازگار با محیط زیست هستند.  </p>
        </div>
        <div className="  photo ">

    
        <div className='row '>
            <div className='column'>  
    <img src={image1}/>
    <img src={image2}/>
   
    
      </div>
      
      <div className='column'>  
      <img src={image3}/>
      <div className=' flex flex-wrap '>
      <img src={image4}/>
      <img src={image5}/>
      </div>
    
   
    
      </div>
        </div>
        </div>
        

    </div>
    
  )
}

export default Gallery