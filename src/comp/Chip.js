import React from 'react';
import { Chip } from '@mui/material';

export default function ClickChip ({ item }){
    return <Chip component="a" label={item} href={`/tags/${item}`} sx={{backgroundColor: '#ddd'}} clickable />;
}
