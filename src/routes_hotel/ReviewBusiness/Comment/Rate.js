import React from 'react';
import {Container, Grid, Button, Box, Typography, Card, CardHeader, Avatar, List, ListItem, ListItemText, CardContent, CardActionArea, CardActions} from '@material-ui/core';
import {MonetizationOn, Stars, RoomService, HighQuality} from '@material-ui/icons';
import useStyles from './Styling';

const Rate =({data})=>{
    const classes = useStyles();
    const {priceRate, qualityServiceRate, overallRate, customerServiceRate} = data;
    return(
        <div>
            <Grid container spacing={7} style={{display: "flex", justifyContent: "center"}}>
                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><MonetizationOn className={classes.reviewIcons}/></Box>
                            <Typography>Price</Typography>
                            <Typography>{priceRate}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><HighQuality className={classes.reviewIcons}/></Box>
                            <Typography>Quality</Typography>
                            <Typography>{qualityServiceRate}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><RoomService className={classes.reviewIcons}/></Box>
                            <Typography>Customer service</Typography>
                            <Typography>{overallRate}</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><Stars className={classes.reviewIcons}/></Box>
                            <Typography>Overall rating</Typography>
                            <Typography>{customerServiceRate}</Typography>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )

}

export default Rate;