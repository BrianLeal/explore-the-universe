import React from 'react';
import { useParams } from "react-router-dom";

export default function DetailedPage (){
 
    // useParams will return an object
    const params = useParams();
    // The object stored in params will look like {id: "123"}
    // If we wanted, we could destructure the object now.
    // console.log(params) 
  
    return (
      <div>
        <h1>Planetary Search Placeholder</h1>
        <h2>
          {/* 
          Destructure the key used in route, to render the value.
          In our example, we named the key 'id' 
          */}
          Search ID is, { params.id }
        </h2>
      </div>
    );
  
}