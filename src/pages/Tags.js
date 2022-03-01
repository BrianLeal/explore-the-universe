import React from 'react';
import { useContext } from 'react';

// GRID
import Postcard from '../comp/Postcard';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { SiteContext } from '../context/SiteData';
import ClickChip from '../comp/Chip';

import { styled } from '@mui/material/styles';
import { 
    Box,
    Grid,
    LinearProgress,
    Chip,
    Typography
} from '@mui/material';

// STYLE
import './style/home.css';


  export default function TagsPage (){
 // EXAMPLE: const { siteTitle, luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext); luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext);
    const { filteredDataAPI, tagsArray } = useContext(SiteContext); 

    
    return(
      <div className="App">
        {/* // HEADER COMP */}
            <Header />

        {/* // FILTER COMP */}

        {/* // THE GRID COMP */}
        <hr></hr>
        <Typography sx={{color: 'white', fontFamily: "monospace"}}>
          <h2>TAGS</h2>
        </Typography>
            
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                {/* < TagsMap tagsArray={tagsArray}/> */}
                {tagsArray[3] ? < TagsMap tagsArray={tagsArray}/> : <Grid item xs={12}><LinearProgress color="secondary" /></Grid> }
                    {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
                </Grid>
            </Box>
        {/* //FOOTER COMP */}
        <hr></hr>
        <Footer />
      </div>


    );
  }

  function TagsMap ({ tagsArray }){
    return(
      

        tagsArray.map((item) => 
            <Grid item xs={2}>
              <ClickChip item={item} />
            </Grid>
        )
    );
  }
