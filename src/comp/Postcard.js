import React from 'react';

import { 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

export default function Postcard ({title, imgUrl, releaseDate}) {

    return (
        <Card className="postcard" sx={{ 
            maxWidth: 400,
            minHeight: 450,
            backgroundColor: "#ddd"
         }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={imgUrl}
                    alt={title}
                />
                <CardContent >
                    <Typography  sx={{fontFamily: "monospace"}} data-testid="img-title" gutterBottom variant="h5" maxHeight="300" >
                        <h5>{title}</h5>
                    </Typography>
                    <Typography sx={{fontFamily: "monospace"}} variant="body2" color="text.secondary" >
                        {releaseDate}
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

