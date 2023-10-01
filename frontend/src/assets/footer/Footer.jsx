import React from 'react'
import './Footer.css'
import { VscGithub } from "react-icons/vsc";
export const Footer = () => {
  return (
    <div className='    footer absolute w-full '>
       <div className="text-center relative  mt-[20%] ">
  <a
    href="#"
    className="   flex items-center justify-center mb-5 text-2xl font-semibold text-white    dark:text-white"
  >
    <img
      src="https://www.svgrepo.com/show/499962/music.svg"
      className="h-12 mr-3 sm:h-9"
      alt="Landwind Logo"
    />
  محمدجلیزی
  </a>
  <span className="block  text-center   text-white   text-xl  dark:text-gray-400">
  <h5>تمامی حقوق نرم افزاری این وبسایت متعلق به نام سایت می باشد </h5>
  

  </span>
<div className='  text-white   flex justify-center   '  >
<VscGithub/>


</div>
</div>

        
        </div>
  )
}
