import React from 'react';

export default function DetailedNullPage (){
 

    return (
      <div>
        <h1>Planetary Search Placeholder</h1>
        <h2>
          {/* 
          Destructure the key used in route, to render the value.
          In our example, we named the key 'id' 
          */}
          Planetary image ID is missing.
        </h2>
      </div>
    );
  
  }