import React from 'react'
import Navbar from './APPbar/Navbar'
import Header from './Header/Header'
import Store from './Store/Store'
import Gallery from './gallery/Gallery'
import Seaction from './Seaction/Seaction'
import { Footer } from './footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './Home/Home'

const Root = () => {
  return (
    <div>  
    
<Navbar/>



<Outlet/>

<Footer/>

</div>



  )
}

export default Root