import { List, ListItem, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';


export default function ElementPage({title,ListElements}) {
    return (
        <Paper elevation={3} sx={{p:5}}>
            <Typography variant="h4">{title}</Typography>
            <List>
            {ListElements.map((e) => <ListItem key={e.name}>{e.name}</ListItem>)}
            </List>
        </Paper>
    );
}