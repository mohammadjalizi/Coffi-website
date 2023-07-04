import React from 'react'
import { useGetProductApiByNameQuery } from '../../Redux/ProductApi'

const Store = () => {
  const { data, error, isLoading } = useGetProductApiByNameQuery('')
  return (
    <div>
         {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}

<h1 className='  text-[#b68834] text-3xl text-center md:my-8 '>فروشگاه قهوه</h1>

    </div>
  )
}

export default Store