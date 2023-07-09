import React from 'react'
import Navbar from './APPbar/Navbar'
import Header from './Header/Header'
import Store from './Store/Store'
import Gallery from './gallery/Gallery'
import Seaction from './Seaction/Seaction'
import { Footer } from './footer/Footer'

const Root = () => {
  return (
    <div className=' Rot '>
    

<Navbar/>
<Header/>
<Store/>
<Gallery/>
<Seaction/>
<Footer/>
</div>
  )
}

export default Root