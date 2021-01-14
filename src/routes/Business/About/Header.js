import React from 'react';
import {Box, Container} from '@material-ui/core';
import useStyles from './Styling';

const Header =({img})=>{
    const classes = useStyles();
    return(
        <Container classes={{root: classes.parent}} maxWidth="xl"> 
            <Box classes={{root: classes.child}} style={{backgroundImage: `url("C:\\Users\\Public\\1.jpg")`}}>
                <img src="C:/Users/Public/1.jpg" style={{position: 'absolute', top: 0, left: 0, height:"100%", width:"100%"}}/>
            </Box>
        </Container>
    )

}

export default Header;