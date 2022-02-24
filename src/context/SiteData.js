import React, { createContext, useEffect, useState } from 'react';
// import { db } from './db'

export const SiteContext = createContext();


// NOTE: remember to pass children as prop
export default function SiteContextProvider({children}){
    // Within the provider function, INIT STATES
    let [planetaryData, setPlanetaryData] = useState();

    // ESTABLISH LOGIC TO MANAGE STATES
    // useEffect(function(){
    //     // TODO:  fetch the data, and add to state here.

    //     setPlanetaryData(null);
    // },[]);



    // PREPARE THE FINAL CONTEXT OBJECT
    // REMEMBER: you can also pass functions as context
    const dataBall = {
        planetaryData
    }

    // RETURN the Provider with the proper syntax
    // SiteContext matches line 4. Value is the data passed. Children is the argument from the start of the function.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}