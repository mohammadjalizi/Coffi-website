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
    <div className=' menu '>


      

<h1 className='  text-[#b68834] text-3xl text-center md:my-8 '>فروشگاه قهوه</h1>

<div className=' flex  flex-wrap gap-8 '>   
{
data.map((item)=>{

return(
  
<div key={item.id} className=' p-[30px] cursor-pointer shadow-2xl Card  w-80  hover:shadow-none    '>


<img src={item.imageLink}/>
<div className='  '>
<h1 className=' text-center my-2 '>{item.productName}</h1>
<div className=' flex justify-between items-center my-2  '>  
<h1  className='  h1 text-xl '>  {item.price} تومان </h1>
<strong  onClick={()=>{

console.log('okkk')


}} className='  text-sm  '> افزودن به سبد خرید  </strong>
    </div>
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