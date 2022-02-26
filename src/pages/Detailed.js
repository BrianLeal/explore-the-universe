import React from 'react';
import { useParams } from "react-router-dom";

export default function DetailedPage (){
 
    // TO DESTRUCTURE: params.imgIndex 
    const params = useParams();
    

  
    return (
      <div>
        <h1>Planetary Search Placeholder</h1>
        <h2>

          Search ID is, { params.imgIndex }
        </h2>
      </div>
    );
  
}