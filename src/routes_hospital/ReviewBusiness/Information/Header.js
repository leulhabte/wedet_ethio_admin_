import React, {Suspense} from 'react';
import { Container, Box } from '@material-ui/core';
import useStyles from './Styling';
// import fp from 'C:/Users/Leul Hbt/Desktop/fat jar/files';
import s from 'C:/Users/Public/1.jpg';

const Header = ({ photo, ip }) => {
    const classes = useStyles();
    console.log(photo);
    return (
        <Container className={classes.parent}>
            <Box>
                <img src={`http://${ip}/${photo}`} className={classes.img} />
            </Box>
        </Container>
    )
}

export default Header;