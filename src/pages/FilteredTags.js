import React from 'react';
import { useContext } from 'react';
import { useParams } from "react-router-dom";
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
    Typography,
    LinearProgress
} from '@mui/material';

// STYLE
import './style/home.css';

  export default function FilteredTagsPage (){
    // TO DESTRUCTURE: params.<whatever is on app> 
    const params = useParams();
    const filterID = params.filteredTag;

    // EXAMPLE: const { siteTitle, luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext); luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext);
    const { filteredDataAPI } = useContext(SiteContext); 

    const taggedArray = filteredDataAPI.filter(obj => obj.tags.includes(filterID));

    console.log(filteredDataAPI);
    return(
      <div className="App">
        {/* // HEADER COMP */}
            <Header />

        {/* // FILTER COMP */}

        {/* // THE GRID COMP */}
        <hr></hr>
        <Typography sx={{color: 'white', fontFamily: "monospace"}}>
          <h2>TAGS Filtered</h2>
          <p>{filterID}</p>
        </Typography>

            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                    {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
                      
                    {(taggedArray.length > 0) ? <PostcardMap mapData={taggedArray} /> : <Grid item xs={12}> <LinearProgress color="secondary" /></Grid>}
                

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
              <a  href={`/index/${item.id}`}>
                <Postcard id={item.id} title={item.title} imgUrl={item.imgWithRes[0][0]} releaseDate={item.date} />
              </a>
            </Grid>
        )
    );
  }