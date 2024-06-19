import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ElementCard({type,title,img,ListElements}) {
  let width = type=="project"?700:400;
    return (
      
        <Card sx={{ maxWidth: width }}>
      <CardMedia
        sx={{ height: 140, }}
        
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica and  Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica and  Antarctica
        </Typography>
      </CardContent>
      {type=="project"?<CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Demo</Button>
      </CardActions>:null}
    </Card>
    );
}