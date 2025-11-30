import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Manage from './pages/Manage'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import DeleteProduct from './pages/DeleteProduct'

function App() {

  return (
    <div className='master-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
