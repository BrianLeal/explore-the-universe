import React from 'react';
import { useParams } from "react-router-dom";
import { SiteContext } from '../context/SiteData';

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
    const index = params.imgIndex;
    const dummyObj = {
      title: 'loading content',
      tags: ['loading', 'loading'], 
      imgWithRes: [['https://via.placeholder.com/900', 'test'],[]],
      info: false
    };

    const { filteredDataAPI } = React.useContext(SiteContext); 
    
    const currentObj = filteredDataAPI[index] ? filteredDataAPI[index] : dummyObj; 
    console.log(currentObj);
    return (
      <div>
        <Header/>


      {currentObj.info ? <DetaliedCard currentObj={currentObj} /> : <div><LinearProgress color="success" /></div> }

      




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
            {currentObj.tags.map( item => <Chip label={item} onClick={console.log('you have clicked the chip')} />)}
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