import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products]);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collections'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Explore our latest collections, crafted to bring elegance and tradition into every piece.</p>
      </div>

      {/* Rendering Products */}
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-full sm:w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
          {latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))}
        </div>
      </div>


    </div>
  )
}

export default LatestCollection