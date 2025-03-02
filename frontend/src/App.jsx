import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from './Pages/Collection'
import TussarCollection from './Components/TussarCollection'
import CottonCollection from './Components/CottonCollection'
import StoleCollection from './Components/StoleCollection'
import DupattaCollection from './Components/DupattaCollection'
import Verify from './Pages/Verify'

const App = () => {
  return (
    <div>
      <ToastContainer autoClose={2000} position='top-center'/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/collection' element = {<Collection/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/product/:productId' element = {<Product/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/place-order' element = {<PlaceOrder/>} />
        <Route path='/orders' element = {<Orders/>} />
        <Route path='/verify' element = {<Verify/>} />
        <Route path='/tussar-collection' element = {<TussarCollection/>} />
        <Route path='/cotton-collection' element = {<CottonCollection/>} />
        <Route path='/stoles-scarves' element = {<StoleCollection/>} />
        <Route path='/dupatta-collection' element = {<DupattaCollection/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App