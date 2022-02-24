import React from 'react';

import { 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

export default function Postcard ({title, imgUrl, shortDescription}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shortDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

Postcard.defaultProps = {
    title: 'Space is hard',
    shortDescription: 'We are having issues loading this content. Please try again later.',
    imgUrl: 'https://media.gettyimages.com/photos/image-of-an-astronaut-and-a-space-shuttle-in-space-low-angle-view-picture-id79337786'
}