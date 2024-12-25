import React from 'react';
import Nav from './Nav'
import Footer from './Footer';
import Album from './Album';
import Policy from './Policy';
import HighestRatedProducts from './HighestRatedProducts';
function Home() {
  return (
    <div>
      <Nav></Nav>
      <div className='bg-light'>
        <Album></Album>
        <HighestRatedProducts></HighestRatedProducts>
        <Policy></Policy>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
