import React from 'react';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreateProduct/>}/>
          <Route path='/edit' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}