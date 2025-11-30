import React, { useState } from 'react'
import './index.css'

import Topbar from '../../components/Topbar'
import Navbar from '../../components/Navbar'
import Advantages from '../../components/Advantages'
import Product from '../../components/Product'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  return (
    <div className='home-container'>
        <Topbar />
        <Navbar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Advantages />
        <Product 
          searchTerm={searchTerm} 
          selectedCategory={selectedCategory}
        />
    </div>
  )
}

export default Home
