import React, { createContext, useEffect, useState } from 'react';
import { ThemeConsumer } from 'styled-components';


export const SiteContext = createContext();


// NOTE: remember to pass children as prop
export default function SiteContextProvider({children}){
    // Within the provider function, INIT STATES
    let [planetaryData, setPlanetaryData] = useState([]);
    let [filteredDataAPI, setFilteredDataAPI] = useState([]);

    // ESTABLISH LOGIC TO MANAGE STATES
    useEffect(function(){
        // TODO:  fetch the data, and add to state here.
        fetch('https://hubblesite.azurewebsites.net/all/images')
        .then(response => response.json())
        .then((x) => setPlanetaryData(x))
        .catch((err) => console.error(err));
    },[]);

    useEffect(function(){
        let tempArray = [];
        if(planetaryData.length > 0){
          
          for(let i = 0; i < 12; i++){
              //make i a random number within the restraint of our limiter
              let rawDataAPI = JSON.parse(planetaryData[i]);
              tempArray.push(rawDataAPI);
          }
          setFilteredDataAPI(tempArray);
          console.log('tempArray', tempArray);
        }
    },[planetaryData]);


    // PREPARE THE FINAL CONTEXT OBJECT
    // REMEMBER: you can also pass functions as context
    const dataBall = {
        planetaryData,
        filteredDataAPI
    }

    // RETURN the Provider with the proper syntax
    // SiteContext matches line 4. Value is the data passed. Children is the argument from the start of the function.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}