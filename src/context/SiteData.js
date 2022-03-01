import React, { createContext, useEffect, useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import { Chip } from '@mui/material';


export const SiteContext = createContext();


// NOTE: remember to pass children as prop
export default function SiteContextProvider({children}){
    const HandleTagChange = (item) => <Chip component="a" label={item} href={`/tags/${item}`} clickable />
    // Within the provider function, INIT STATES
    let [planetaryData, setPlanetaryData] = useState([]);
    let [filteredDataAPI, setFilteredDataAPI] = useState([]);
    let [ tagsArray, setTagsArray ] = useState([]);
    let [ shortArray, setShortArray ] = useState([]);


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
          
          for(let i = 0; i < 2000; i++){
              //make i a random number within the restraint of our limiter
              let rawDataAPI = JSON.parse(planetaryData[i]);
              rawDataAPI.id = i;
              tempArray.push(rawDataAPI);
          }
          const tagsArrayTemp = getTags(tempArray);
          setTagsArray(tagsArrayTemp);
          setFilteredDataAPI(tempArray);
        //   console.log('should be array with all tags:', tagsArray);
        //   console.log('tempArray', tempArray);
        }
        
    },[planetaryData]);

    
    React.useEffect(function(){
      let tempArray = [];
      const randInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)
      const arraySize = filteredDataAPI.length;
      const numberOfCards = 12;
      let output = new Array();
      let count = 0;
      for (let i = 0; i < numberOfCards; i += 1){
        let candidate = randInt(arraySize, 0);
        if(output.indexOf(candidate) === -1){
          console.log('pushing to output');
          count += 1;
          
          tempArray.push(filteredDataAPI[candidate]);
        }
      }
      console.log('filteredDataAPI ', filteredDataAPI)
      console.log('shortArray ', shortArray);
      setShortArray(tempArray);
    }, [filteredDataAPI]);
    

    function getTags(inputArray){
        // let out = [];
        let unfilteredTagsArray = [];
        for (let j = 0; j < inputArray.length; j += 1){
            //loop through every tag array
            for (const each of inputArray[j].tags){
                console.log(typeof each); //logs each tag seperatly
                let tempSplitArray = each.split('');
                if( tempSplitArray.includes('/')){
                    continue;
                } else {
                    unfilteredTagsArray.push(each);  
                }
                 
            }
            // inputArray[j] ===
            // out.push(inputArray[j].tags); //outputs 120 arrays with multiple indexes of tags
        }
        const finalTagsArray = [...new Set(unfilteredTagsArray)];
        // console.log(out);
        // setTagsArray(finalTagsArray);
        return finalTagsArray;
    }

    // setTagsArray(finalTagsArray);
    // export const HandleTagChange = (item) => <Chip component="a" label={item} href={`/tags/${item}`} clickable />


    // PREPARE THE FINAL CONTEXT OBJECT
    // REMEMBER: you can also pass functions as context
    const dataBall = {
        planetaryData,
        filteredDataAPI,
        shortArray,
        tagsArray
    }

    // RETURN the Provider with the proper syntax
    // SiteContext matches line 4. Value is the data passed. Children is the argument from the start of the function.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}