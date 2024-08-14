import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Character from './Pages/Character/Character';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Character' element={<Character/>} />
    </Routes>
  )
}

export default AppRoutes;
