import React from 'react';
import { Container, Grid, Button, Box, Typography, Card, CardHeader, Avatar, List, ListItem, ListItemText, CardContent, CardActionArea, CardActions } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Styling';

const ReviewComm = ({ user }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.commonGrid} spacing={3}>
            {user.map((data) => (
                <Grid item xs={10} key={data.id}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <img src={data.user.photoUrl.thumbFilePath} />
                                </Avatar>
                            }
                            title={data.user.fullName}
                            subheader={data.date}
                        />
                        <CardContent style={{ height: '1rem', marginLeft: '1rem', marginRight: '1rem', position: 'relative' }}>
                            <Typography component="div" noWrap={true} paragraph style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
                                {data.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Accordion style={{boxShadow: 'none'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>View full comment</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    {data.text}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ReviewComm;