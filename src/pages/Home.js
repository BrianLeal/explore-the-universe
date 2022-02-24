import React from 'react';
import data from '../db/test';
// GRID
import Postcard from '../comp/Postcard';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';

// STYLE
import './style/home.css';
// import '../App.css';


let rawData = JSON.parse(data[0]);
let testData = [];
testData.push(rawData);
console.log('testData', testData);

const mappedTest = testData.map((item) => <li>{ item.title.children }</li>)


 console.log('mapped test:' , mappedTest);




// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


  export default function Home (){
    return(
      <div className="App">
          {/* // HEADER COMP */}


        <header className='app-header'>
        {/* <h1>Explore The Universe</h1> */}
            <Grid container spacing={0}>
                <Grid item xs={12}>
                  
                    <h1>Explore The Universe</h1>
                   
                </Grid>
            <Grid item xs={12}>
               
                    <form>
                        <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30em' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField id="search-bar" label="Search" variant="standard" name="search"/>
                            <br></br>
                            <Button variant="contained">Search</Button>
                        </Box>
                    </form>
                
                </Grid>
            </Grid>
        </header>

        {/* // FILTER COMP */}

        {/* // THE GRID COMP */}
        <hr></hr>
        <Box data-testid="grid-container" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {/* PROPS USED FOR POST CARD: title, imgUrl, shortDescription */}
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>
                <Grid item xs={4}>
                    <Postcard />
                </Grid>


            </Grid>
        </Box>

      </div>


    );
  }