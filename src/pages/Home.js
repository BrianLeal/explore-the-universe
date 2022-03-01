import React from 'react';
import { useContext } from 'react';


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


// export async function createShortArray ( filteredDataAPI ){
//   // filteredDataAPI = filteredDataAPI > 0 ? filteredDataAPI : [{}];  
  
//     const randInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)
//     const arraySize = await filteredDataAPI.length;
//     const numberOfCards = 12;
//     let output = new Array();
  
//     while (output.length < numberOfCards){
//       let candidate = randInt(arraySize, 0);
//       if(output.indexOf(candidate) === -1){output.push(candidate)}
//     }
  
//     // ACERT: Object Array
//     return output;
// }

  export default function Home (){
 // EXAMPLE: const { siteTitle, luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext); luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext);
    const { shortArray } = useContext(SiteContext); 

    // // const api = filteredDataAPI ? filteredDataAPI : dummyObj;
    // const dummyObj = {
    //   title: 'loading content',
    //   tags: ['loading', 'loading'], 
    //   imgWithRes: [['https://via.placeholder.com/900', 'test'],[]],
    //   info: false
    // };

    // let shortArray = [];
    // React.useEffect(function(){
    //   const randInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)
    //   const arraySize = api.length;
    //   const numberOfCards = 12;
    //   let output = new Array();
    //   let count = 0;
    //   for (let i = 0; i < numberOfCards; i += 1){
    //     let candidate = randInt(arraySize, 0);
    //     if(output.indexOf(candidate) === -1){
    //       console.log('pushing to output');
    //       count += 1;
          
    //       shortArray.push(filteredDataAPI[candidate]);
    //     }
    //   }
    //   console.log('filteredDataAPI ', filteredDataAPI)
    //   console.log('shortArray ', shortArray);
    // }, [filteredDataAPI]);

    // const shortArray = createShortArray(filteredDataAPI);
  
    
    
    return(
      <div className="App">
        {/* // HEADER COMP */}
            <Header renderShuffleBtn='true' />

 

        {/* // THE GRID COMP */}
        <hr></hr>
        
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                    {/* PROPS USED FOR POST CARD: title, imgUrl, releaseDate */}
                      
                    {(shortArray[0] !== undefined) ? <PostcardMap mapData={shortArray} /> : <Grid item xs={12}> <LinearProgress color="secondary" /> </Grid>}
                

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