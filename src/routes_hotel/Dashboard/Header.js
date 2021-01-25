import React from 'react';
import useStyles from './Styling';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

const Header = ({business, review, menu, user}) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3} className={classes.mainGrid}>
                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="start">
                            <Typography className={classes.headTxt}>Hospital</Typography>
                            <Box height={20}/>
                            <Typography className={classes.headTxt}>{business}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.dashButtonC1}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="start">
                            <Typography className={classes.headTxt}>Menus</Typography>
                            <Box height={20}/>
                            <Typography className={classes.headTxt}>{menu}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.dashButtonC2}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="start">
                            <Typography className={classes.headTxt}>Reviews</Typography>
                            <Box height={20}/>
                            <Typography className={classes.headTxt}>{review}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.dashButtonC3}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="start">
                            <Typography className={classes.headTxt}>Users</Typography>
                            <Box height={20}/>
                            <Typography className={classes.headTxt}>{user}</Typography>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Header;