import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import AddProduct from './pages/product/AddProduct';


function App() {
  return (
    <Router>
      <Header />
      <div className='min-h-60'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/view/:id' element={<ProductPage />} />
        <Route path='/product/:id/update' element={<AddProduct />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
