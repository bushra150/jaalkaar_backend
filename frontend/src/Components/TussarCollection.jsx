import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../Components/ProductItem'

const TussarCollection = () => {
  const { products } = useContext(ShopContext)
  const [tussarProducts, setTussarProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const [sortType, setSortType] = useState('relevant')

  // Filter products to include only those with subCategory 'Tussar Saree'
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.subCategory === 'Tussar Silk'
    )
    setTussarProducts(filteredProducts)
  }, [products])

  // Sort products based on selected sortType
  useEffect(() => {
    let sorted = [...tussarProducts]

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
  }, [tussarProducts, sortType])

  return (
    <div className='flex flex-col gap-2 border-t'>
      {/* Scrolling Background Section */}
      <div className='relative'>
        <div
          className='h-[75vh] w-full bg-fixed bg-cover bg-center flex items-center justify-center'
          style={{
            backgroundImage: `url(${assets.asset7})`, // Replace with your desired image for Tussar Sarees
          }}
        >
          {/* Dark overlay filter */}
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          {/* Text Content */}
          <div className='relative flex justify-start'>
            <div className='min-w-60 w-full sm:w-3/4 lg:w-1/2 p-16 flex flex-col'>
              <h1 className='text-3xl sm:text-4xl md:text-6xl prata-regular text-[#D4AF37] font-bold mb-4'>
                Tussar <br />Collection
              </h1>
              <p className='text-white text-sm sm:text-md md:text-lg'>
                Discover the elegance of Tussar Sarees – a timeless blend of
                tradition and craftsmanship. Each saree in this collection is
                meticulously woven, showcasing the rich heritage of Indian
                artistry. Perfect for every occasion, these sarees embody
                grace, style, and sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sort */}
      <div className="flex justify-end text-base sm:text-2xl my-2 mb-4 px-8">
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

export default TussarCollection
