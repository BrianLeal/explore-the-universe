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
  Tags,
  FilteredTags,
  Whoops
} from './pages/index';


export default function App() {

  
  return (
    
    // ROUTER
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Whoops />} />
        <Route path='/index' element ={<DetailedNull />} />
        <Route path='/index/:imgIndex' element={<Detailed />} />

        <Route path='/tags' element ={<Tags />} />
        <Route path='/tags/:filteredTag' element={<FilteredTags />} />

      </Routes>
    </>
    

  );
}

// PROTOTYPE PAGE COMPONENTS







