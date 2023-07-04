import React from 'react'
import { useGetProductApiByNameQuery } from '../../Redux/ProductApi'
const dataarry=[{},{},{}]
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

<div className=' flex  flex-wrap '>   
{
data.map((item)=>{

return(
  
<div key={item.id} className='  '>

<h1>{item.productName}</h1>
<img src={item.imageLink}/>



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