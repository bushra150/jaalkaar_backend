import React from 'react'
import LatestCollection from '../Components/LatestCollection'
// import Bestseller from '../Components/Bestseller'
// import OurPolicy from '../Components/OurPolicy'
// import NewsLetterBox from '../Components/NewsLetterBox'
import Hero2 from '../Components/Hero2'
import Description from '../Components/Description'
import Assistance from '../Components/Assistance'
import Apparel from '../Components/Apparel'

const Home = () => {
  return (
    <>
      <Hero2/>
      {/* <Bestseller/> */}
      <Apparel/>
      <Description/>
      <LatestCollection/>
      <Assistance/>
      {/* <OurPolicy/> */}
      {/* <NewsLetterBox/> */}
    </>
  )
}

export default Home