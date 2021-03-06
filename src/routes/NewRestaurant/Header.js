import React from 'react';
import useStyles from './Styling';
import {Box, Typography} from '@material-ui/core';

const Header =()=>{
    const classes = useStyles();
    return(
        <div>
            <Box width="100%" p={2}>
                <Typography className={classes.mainTitle} variant='h5'>New Restaurant</Typography>
            </Box>
        </div>
    )
}

export default Header;