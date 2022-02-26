import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';


export default function () {
    return (
        <header className='app-header'>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h1>Explore The Universe</h1>
                    <h3>👩‍🚀🚀👾👨‍🚀</h3>
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
                            <TextField sx={{color: '#13273d'}} id="search-bar" label="Search" variant="standard" name="search"/>
                            <br></br>
                            <Button sx={{color: '#13273d'}} variant="contained">Search</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </header>
    );
}