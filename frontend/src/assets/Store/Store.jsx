import React from 'react'
import './Store.css'
import { useGetProductApiByNameQuery } from '../../Redux/ProductApi'
const dataarry=[{},{},{}]
import { BsFillBasketFill } from "react-icons/bs";
const Store = () => {
  const { data, error, isLoading } = useGetProductApiByNameQuery()

  if (isLoading) {
    return(
<>
erooorrr
</>

    )
  }
if (data) {
  return (
    <div>


      

<h1 className='  text-[#b68834] text-3xl text-center md:my-8 '>فروشگاه قهوه</h1>

<div className=' flex  flex-wrap gap-8 '>   
{
data.map((item)=>{

return(
  
<div key={item.id} className='   w-80 shadow-2xl rounded-3xl '>

<h1 className=' text-center my-2 '>{item.productName}</h1>
<img src={item.imageLink}/>
<div className='Icon'>  
<h1  className='  h1 '>  {item.price} تومان </h1>
<strong className='strong'>+</strong>
    </div>




</div>

)


})

}
</div>
    </div>
  )
}
if (error) {
  return(

<>
erooor code
</>

  )
}
}

export default Store