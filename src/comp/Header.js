import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';
// import { createShortArray } from '../pages/Home';


export default function ({ renderShuffleBtn }) {
    return (
        <header className='app-header'>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <a href='/' style={{color: 'black', textDecoration: "none"}}>
                        <h1>Explore The Universe</h1>
                        <h3>👩‍🚀🚀👾👨‍🚀</h3>
                    </a>

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
                          
                            {/* <Button sx={{color: '#13273d'}} variant="contained"   onClick={() => {
                                 window.location.reload(true);}}>
                                Shuffle Results 
                            </Button> */}
                            {renderShuffleBtn ? <RendShufBtn /> : <></> }
                            {/* // path = '/' ? renderShuffleBtn === true : renderShuffleBtn === false  */}
                            <br></br>
                            <Button sx={{color: '#13273d'}} variant="contained" href="/tags">Explore By Tag</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </header>
    );
}
function RendShufBtn(){
return (
    <Button sx={{color: '#13273d'}} variant="contained"   onClick={() => {
        window.location.reload(true);}}>
       Shuffle Results 
   </Button>
);
}