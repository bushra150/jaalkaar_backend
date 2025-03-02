import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [dropdowns, setDropdowns] = useState([false, false, false]);

  const toggleDropdown = (index) => {
    setDropdowns((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const handleBuyNow = (id) => {
    addToCart(id); // Add the product to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col lg:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-4xl md:text-5xl lg:text-6xl mt-2'>{productData.name}</h1>
          <div className='grid grid-cols-3 mt-4 gap-2 items-center text-center'>
            <div className='flex flex-col items-center'>
              <img className='w-9 sm:w-10' src={assets.asset_material} alt="" />
              <p className='text-gray-700 text-sm'>Material</p>
              <p className='text-gray-500 text-xs'>{productData.material}</p>
            </div>
            <div className='flex flex-col items-center'>
              <img className='w-9 sm:w-10' src={assets.asset_handcraft} alt="" />
              <p className='text-gray-700 text-sm'>Process</p>
              <p className='text-gray-500 text-xs'>Handloom</p>
            </div>
            <div className='flex flex-col items-center'>
              <img className='w-9 sm:w-10' src={assets.asset_craft} alt="" />
              <p className='text-gray-700 text-sm'>Craft</p>
              <p className='text-gray-500 text-xs'>Extra Weft - Bawan Buti</p>
            </div>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 text-justify md:w-4/5'>{productData.description}</p>
          <br />
          {/* Display Note only for specific subCategories */}
          {['Tussar Saree', 'Cotton Saree'].includes(productData.subCategory) && (
            <p className='text-gray-500 text-justify md:w-4/5'>
              <span className='italic'>Note:</span> {productData.note}
            </p>
          )}
          <div className='flex justify-center flex-col items-center'>
            <button
              onClick={() => addToCart(productData._id)}
              className='mt-10 w-full md:w-5/6 bg-[#800020] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#800020] transition px-8 py-3 text-sm'
            >
              Add to cart
            </button>
            <button
              onClick={() => handleBuyNow(productData._id)}
              className='mt-4 w-full md:w-5/6 bg-[#800020] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#800020] transition px-8 py-3 text-sm'
            >
              Buy Now
            </button>
          </div>
          {/* Dropdown Section */}
          <div className='mt-20 text-justify'>
            {[
              {
                title: 'Fabric Details',
                content: productData.fabric ? (
                  <p>
                    {productData.fabric.split('. ').map((sentence, index) => (
                      <React.Fragment key={index}>
                        {sentence.trim()}
                        {sentence && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ) : (
                  <p>No fabric details available for this product.</p>
                ),
              },
              {
                title: 'Shipping & Returns',
                content: (
                  <>
                    <p>
                      We aim to deliver your order within 5-7 business days. For
                      express delivery, you can expect your product in 2-3
                      business days (additional charges apply).
                    </p>
                    <p>
                      Returns are accepted within 30 days of delivery, provided
                      the product is unworn, unwashed, and in its original
                      packaging with all tags intact. Refunds are processed
                      within 7-10 working days after receipt of the return.
                    </p>
                  </>
                ),
              },
              {
                title: 'Care Instructions',
                content: (
                  <>
                    <p>Dry clean only. Store the saree in the muslin saree bag provided with your purchase.</p>
                    <br />
                    <p>
                      For your convenience, we have included a detailed care instructions card with your saree. Please
                      refer to it for any additional tips and guidance to maintain the beauty and longevity of your saree.
                    </p>
                  </>
                ),
              },
              {
                title: 'Disclaimer',
                content: (
                  <>
                    <p>The actual color may vary slightly due to different screen calibration.</p>
                    <p>
                      Due to its handwoven nature, you may notice slight irregularities and variations in the weave,
                      pattern, or selvedge. These unique characteristics are what make this piece truly special—no one
                      else will ever own a handcrafted beauty quite like yours.
                    </p>
                  </>
                ),
              },
            ].map((dropdown, index) => (
              <div key={index} className='border-t border-b w-full md:w-5/6'>
                <div
                  className='flex m-2 justify-between items-center px-4 py-3 cursor-pointer'
                  onClick={() => toggleDropdown(index)}
                >
                  <p className='text-lg text-gray-700 font-medium'>{dropdown.title}</p>
                  <img
                    src={assets.dropdown_icon}
                    alt="Toggle Icon"
                    className={`h-3 transition-transform ${dropdowns[index] ? 'rotate-90' : ''}`}
                  />
                </div>
                {dropdowns[index] && (
                  <div className='px-4 pb-3 text-sm text-gray-500'>{dropdown.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Craft Information */}
      <div className='flex items-center flex-col-reverse lg:flex-row mt-16'>
        <p className='w-full lg:w-4/5 p-8 text-center text-gray-400'>
          Each Jaalkaar saree is a work of art, meticulously handcrafted by skilled artisans, blending tradition with
          contemporary design. Our collection embodies the rich heritage of Bihar's Bavan Buti sarees, offering you
          elegance and timeless beauty.
        </p>
        <video className='w-full lg:w-[30rem]' autoPlay loop muted src={assets.hand_01}></video>
      </div>
      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
