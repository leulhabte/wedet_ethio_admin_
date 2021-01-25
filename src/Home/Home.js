import React, { useEffect } from 'react';
import {Container, Grid, Paper, Box, Typography, Button} from '@material-ui/core';
import useStyles from '../config/Styling';
import {EmojiTransportation, Restaurant, LocalHospital, LocationCity} from '@material-ui/icons';

const MenuScreen = (props)=>{
    const classes = useStyles();
    useEffect(()=>{
        props.setRole("")
    },[])
    console.log(props)
    return(
        <Container>
            <Box display="flex" justifyContent="center" className={classes.menuMainTitle}>
                <Typography variant="h4" className={classes.menuTitleColor}>Choose Business</Typography>
            </Box>
            <Grid container className={classes.menuGrid} spacing={6}>
                <Grid item md={3} sm={7} xs={8}>
                    <Button  className={classes.mainMenu}  onClick={()=>{props.setRole("restaurant"); props.history.push('/dash')}}>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.menuTitle}>Restaurant</Typography>
                            <Restaurant className={classes.menuIcon}/>
                        </Box>
                    </Button>
                </Grid>
                <Grid item md={3} sm={7} xs={8}>
                    <Button  className={classes.mainMenu}  onClick={()=>{props.setRole("hospital"); props.history.push('/dash')}}>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.menuTitle}>Hospital</Typography>
                            <LocalHospital className={classes.menuIcon}/>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
            <Box height={40}/>
            <Grid container className={classes.menuGrid} spacing={6}>
                <Grid item md={3} sm={7} xs={8}>
                    <Button  className={classes.mainMenu}  onClick={()=>{props.setRole("hotel"); props.history.push('/dash')}}>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.menuTitle}>Hotel</Typography>
                            <LocationCity className={classes.menuIcon}/>
                        </Box>
                    </Button>
                </Grid>
                <Grid item md={3} sm={7} xs={8}>
                    <Button  className={classes.mainMenu}  onClick={()=>{props.setRole("garage"); props.history.push('/dash')}}>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.menuTitle}>Garage</Typography>
                            <EmojiTransportation className={classes.menuIcon}/>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MenuScreen;