import React from 'react';
import useStyles from './Styling';
import {withRouter} from 'react-router-dom';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

const Header = ({history}) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3} className={classes.mainGrid}>
                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.reviewButton} onClick={()=>{history.push('/resList_hotel')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Edit Hotel</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.dashButtonC1} onClick={()=>{history.push('/resPhoto_hotel')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Hotel Photo</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )

}

export default withRouter(Header);