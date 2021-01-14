import React from 'react';
import {Container} from '@material-ui/core';
import useStyles from './Styling';

const Header =()=>{
    const classes = useStyles();
    return(
        <Container className={classes.parent}>
            <Container className={classes.child}>
            </Container>
        </Container>
    )
}

export default Header;