import React from 'react';
import { useContext } from 'react';
import data from '../db/test';

// GRID
import Postcard from '../comp/Postcard';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { SiteContext } from '../context/SiteData';

import { styled } from '@mui/material/styles';
import { 
    Box,
    Grid,
    LinearProgress
} from '@mui/material';

// STYLE
import './style/home.css';



let testData = [];
for(let i = 0; i < data.length; i++){
  let rawData = JSON.parse(data[i]);
  testData.push(rawData);
} 
// const mappedArray = testData.map((item) => console.log('date', item.date));


  export default function Home (){
 // EXAMPLE: const { siteTitle, luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext); luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext);
    const { filteredDataAPI } = useContext(SiteContext); 

    
    return(
      <div className="App">
        {/* // HEADER COMP */}
            <Header />

        {/* // FILTER COMP */}

        {/* // THE GRID COMP */}
        <hr></hr>
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                    {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
                        
                    {(filteredDataAPI.length > 0) ? <PostcardMap mapData={filteredDataAPI} /> : <PostcardMap mapData={testData} />}
                

                </Grid>
            </Box>
        {/* //FOOTER COMP */}
        <hr></hr>
        <Footer />
      </div>


    );
  }

  function PostcardMap ({ mapData }){
    return(
        mapData.map((item) => 
            <Grid item xs={4}>
                <Postcard title={item.title} imgUrl={item.imgWithRes[0][0]} releaseDate={item.date} />
            </Grid>
        )
    );
  }