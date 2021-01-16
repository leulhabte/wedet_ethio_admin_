import React, {useState} from 'react';
import useStyles from './Styling';
import useSearch from './UseSearch';
import axios from 'axios';
import { Container, Grid, Box, Typography, Button, Paper, InputBase } from '@material-ui/core';

const Header = ({query, setQuery, fectData}) => {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.title}>Search Restaurant</Typography>
            <Box display="flex" flexDirection="row" alignItems="start" width="50%">
                <Box flexGrow={1}>
                    <Paper className={classes.newPaper}>
                        <InputBase className={classes.inputBase} onChange={(e)=>{setQuery(e.target.value)}}/>
                    </Paper>
                </Box>
                <Box width={20}/>
                <Box flexGrow={1}>
                    <Button className={classes.btn} onClick={()=>{fectData(query);}}>Search</Button>
                </Box>
            </Box>
        </Container>
    )

}

export default Header;