import React from 'react'
import Signup from './components/Sigup'
import { Routes, Route,useParams } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import About from './components/About'
import Contact from './components/Contact'
import ProductView from './components/ProductView'
import Cart from './components/Cart'
import Gallery from './components/Gallery'
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'
const App = () => {
  
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Signin/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/productview/:pid' element={<ProductView/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='*' element={<Errorpage/>}/>
    
    </Routes>
      
    </>
  )
}

export default App
