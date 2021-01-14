import React from 'react';
import {Container, Grid, Button, Box, Typography, Card, CardHeader, Avatar, List, ListItem, ListItemText, CardContent, CardActionArea, CardActions} from '@material-ui/core';
import {MonetizationOn, Stars, RoomService, HighQuality} from '@material-ui/icons';
import useStyles from '../config/Styling';
import imgs from '../images';
import com from '../texttemp';

const ReviewComm = ()=>{
    const classes = useStyles();
    const img = imgs();
    const comment = com();
    return(
        <Container maxWidth="xl">
            <Box paddingY={3}/>
            <Grid container spacing={7} style={{display: "flex", justifyContent: "center"}}>
                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><MonetizationOn className={classes.reviewIcons}/></Box>
                            <Typography>Price</Typography>
                            <Typography>4.6</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><HighQuality className={classes.reviewIcons}/></Box>
                            <Typography>Quality</Typography>
                            <Typography>4.6</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><RoomService className={classes.reviewIcons}/></Box>
                            <Typography>Customer service</Typography>
                            <Typography>4.6</Typography>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Button className={classes.reviewButton}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Box><Stars className={classes.reviewIcons}/></Box>
                            <Typography>Overall rating</Typography>
                            <Typography>4.6</Typography>
                        </Box>
                    </Button>
                </Grid>

            </Grid>
            
            <Box paddingY={2}/>
            <Grid container className={classes.commonGrid} spacing={3}>
                <Grid item xs={10}>
                    <Card>
                        <CardHeader
                            avatar ={
                                <Avatar>
                                    <img src={img[3].image}/>
                                </Avatar>
                            }
                            title = "Leul Habte"
                            subheader= "September 14, 2016"
                            action={
                                <List>
                                    <ListItem button>
                                        <ListItemText>Reply</ListItemText>
                                    </ListItem>
                                </List>
                            }
                        />
                        <CardContent style={{height: '1rem', marginLeft: '1rem', marginRight: '1rem', position: 'relative'}}>
                            <Typography component="div" noWrap={true} textOverflow="ellipsis" paragraph style={{position:'absolute',top:0, left:0 ,height: '100%', width: '100%'}}>
                                {comment}
                            </Typography>
                        </CardContent>
                            <CardActions>
                                <Button
                                    color="primary"
                                >
                                    View full comment
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10}>
                    <Card>
                        <CardHeader
                            avatar ={
                                <Avatar>
                                    <img src={img[3].image}/>
                                </Avatar>
                            }
                            title = "Leul Habte"
                            subheader= "September 14, 2016"
                            action={
                                <List>
                                    <ListItem button>
                                        <ListItemText>Reply</ListItemText>
                                    </ListItem>
                                </List>
                            }
                        />
                        <CardContent style={{height: '1rem', marginLeft: '1rem', marginRight: '1rem', position: 'relative'}}>
                            <Typography component="div" noWrap={true} textOverflow="ellipsis" paragraph style={{position:'absolute',top:0, left:0 ,height: '100%', width: '100%'}}>
                                {comment}
                            </Typography>
                        </CardContent>
                            <CardActions>
                                <Button
                                    color="primary"
                                >
                                    View full comment
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={10}>
                    <Card>
                        <CardHeader
                            avatar ={
                                <Avatar>
                                    <img src={img[3].image}/>
                                </Avatar>
                            }
                            title = "Leul Habte"
                            subheader= "September 14, 2016"
                            action={
                                <List>
                                    <ListItem button>
                                        <ListItemText>Reply</ListItemText>
                                    </ListItem>
                                </List>
                            }
                        />
                        <CardContent style={{height: '1rem', marginLeft: '1rem', marginRight: '1rem', position: 'relative'}}>
                            <Typography component="div" noWrap={true} textOverflow="ellipsis" paragraph style={{position:'absolute',top:0, left:0 ,height: '100%', width: '100%'}}>
                                {comment}
                            </Typography>
                        </CardContent>
                            <CardActions>
                                <Button
                                    color="primary"
                                >
                                    View full comment
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    );
}

export default ReviewComm;