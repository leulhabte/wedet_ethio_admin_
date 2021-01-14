import React from 'react';
import {Container, Grid, Button, Typography, Box} from '@material-ui/core';
import {AddCircle, Edit} from '@material-ui/icons';
import useStyles from '../config/Styling';

const ManageMeun = (props)=>{
    const classes = useStyles();
    return (
        <Container>
            <Box paddingY={3}/>
            <Grid container spacing={7} style={{display: "flex", justifyContent: "center"}}>
                <Grid item lg={4} xs={9} md={6}>
                    <Button className={classes.menuButton}  onClick={()=>{props.history.push('/editmenu')}}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Typography>Edit Menu</Typography>
                            <Box><Edit className={classes.reviewIcons}/></Box>
                        </Box>
                    </Button>
                </Grid>
                <Grid item lg={4} xs={9} md={6}>
                    <Button className={classes.menuButton} onClick={()=>{props.history.push('/addmenu')}}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <Typography>Add to Menu</Typography>
                            <Box><AddCircle className={classes.reviewIcons}/></Box>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ManageMeun;