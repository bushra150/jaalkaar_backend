import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
    
    const{products} = useContext(ShopContext);
    const[bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Top'}text2={'Selling'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our bestsellers, beloved pieces that bring timeless elegance and unmatched quality to your collection.</p>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-full sm:w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
                {bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        </div>
    </div>  
  )
}

export default Bestseller