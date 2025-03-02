import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../Components/ProductItem'

const CottonCollection = () => {
  const { products } = useContext(ShopContext)
  const [cottonProducts, setCottonProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const [sortType, setSortType] = useState('relevant')

  // Filter products to include only those with subCategory 'Cotton Saree'
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.subCategory === 'Cotton Saree'
    )
    setCottonProducts(filteredProducts)
  }, [products])

  // Sort products based on selected sortType
  useEffect(() => {
    let sorted = [...cottonProducts]

    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    setSortedProducts(sorted)
  }, [cottonProducts, sortType])

  return (
    <div className='flex flex-col gap-2 border-t'>
      {/* Scrolling Background Section */}
      <div className='relative'>
        <div
          className='h-[75vh] w-full bg-fixed bg-cover bg-[80%_20%] flex items-center justify-center'
          style={{
            backgroundImage: `url(${assets.asset9})`, // Replace with your desired image
          }}
        >
          {/* Dark overlay filter */}
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          {/* Text Content */}
          <div className='relative flex justify-start'>
            <div className='min-w-60 w-full sm:w-3/4 lg:w-1/2 p-16 flex flex-col'>
              <h1 className='text-3xl sm:text-4xl md:text-6xl prata-regular text-[#D4AF37] font-bold mb-4'>
                Cotton <br />Collection
              </h1>
              <p className='text-white text-sm sm:text-md md:text-lg'>
                Celebrate the charm of Cotton Sarees – a perfect blend of
                comfort and elegance. These sarees are crafted to suit every
                occasion, from casual outings to festive celebrations, ensuring
                you look effortlessly graceful and stylish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sort */}
      <div className="flex justify-end h-10 text-base sm:text-2xl my-2 mb-4 px-8">
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border-2 border-[#800020] text-xs sm:text-sm h-8 sm:h-10 text-sm px-2 text-[#800020]"
        >
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low - High</option>
          <option value="high-low">Sort by: High - Low</option>
        </select>
      </div>

      {/* Products Section */}
      <div className='flex-1 flex justify-center px-10 my-6'>
        <div className='grid grid-cols-2 sm:grid-cols-2 w-full sm:w-5/6 lg:grid-cols-4 gap-4 gap-y-6'>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item, index) => (
              <div key={index}>
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))
          ) : (
            <p className="text-white">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CottonCollection
