import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Collections from './components/Collections';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Basket from './components/Basket';
import Products from './components/Products';
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/collections' element={<Collections></Collections>}></Route>
      <Route path="/products/:categoryName" element={<Products></Products>} />
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/basket' element={<Basket></Basket>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
