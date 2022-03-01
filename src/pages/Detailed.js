import React from 'react';
import { useParams } from "react-router-dom";
import { SiteContext } from '../context/SiteData';
import ClickChip from '../comp/Chip';

//UI

import { 
  Box,
  Grid,
  Container,
  Button,
  LinearProgress,
  Card,
  Chip,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions
} from '@mui/material';


// CUSTOM COMPS
import Header from '../comp/Header';
import Footer from '../comp/Footer';



export default function DetailedPage (){

    // TO DESTRUCTURE: params.imgIndex 
    const params = useParams();
    const filterID = params.imgIndex;
    const dummyObj = {
      title: 'loading content',
      tags: ['loading', 'loading'], 
      imgWithRes: [['https://via.placeholder.com/900', 'test'],[]],
      info: false
    };

    const { filteredDataAPI } = React.useContext(SiteContext); 
    
    const id = filteredDataAPI.findIndex(i => i.id == filterID)
    const currentObj = filteredDataAPI[id] ? filteredDataAPI[id] : dummyObj; 

    console.log(filteredDataAPI);
    return (
      <div>
        <Header/>

      <Box data-testid="grid-detailed" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                   
                      
                    {/* {(filteredDataAPI.length > 0) ? <PostcardMap mapData={filteredDataAPI} /> : <Grid item xs={12}> <LinearProgress color="secondary" /></Grid>} */}
                
                    {currentObj.info ? <DetaliedCard currentObj={currentObj} /> : <Grid item xs={12}><LinearProgress color="secondary" /></Grid> }

                </Grid>
            </Box>



        <Footer/>
      </div>
    );
  
}

function DetaliedCard({currentObj}){
   
  return(
    <div style= {{margin: 50}}>
    
    <Card sx={{maxWidth: '10',}}>
    <CardContent sx={{backgroundColor: "#ddd"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Typography gutterBottom variant="h2" component="div" sx={{ mx: "auto", fontFamily: "monospace", textAlign: "center"}} >
              {currentObj.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt={currentObj.title}
              image={currentObj.imgWithRes[0][0]}
            />
          
            {currentObj.tags.map(item => <GenerateTags item={item} />)}
          
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary">
              {currentObj.info}
            </Typography>
          </Grid>
        </Grid>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="large"><a href="https://twitter.com/intent/tweet?text=Explore%20the%20Universe">
        Tweet Photo
      </a></Button>
    </CardActions>
  </Card>
  </div>
  );
}


function GenerateTags({ item }){
  const { tagsArray } = React.useContext(SiteContext);
  if (tagsArray.includes(item)){
    return <ClickChip item={item} />
  }
  else 
  {
    return <></>
  }
  
}
