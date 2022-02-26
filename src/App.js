// import React from 'react';
import { useEffect } from 'react';


// library imports
import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';


// CUSTOM IMPORTS
import {
  Home,
  Detailed,
  DetailedNull,
  Whoops
} from './pages/index';


export default function App() {

  
  return (
    
    // ROUTER
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Whoops />} />
        <Route path='/x' element ={<DetailedNull />} />
        <Route path='/x/:imgIndex' element={<Detailed />} />

      </Routes>
    </>
    

  );
}

// PROTOTYPE PAGE COMPONENTS







