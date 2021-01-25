import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';


const Loading2 = () => {
    return (
        <Container>
            <Grid container spacing={3}  style={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={10}>
                    <Skeleton variant="rect" width="100%" height="10rem"/>
                </Grid>
                <Grid item xs={10}>
                    <Skeleton variant="rect" width="100%" height="10rem"/>
                </Grid>
                <Grid item xs={10}>
                    <Skeleton variant="rect" width="100%" height="10rem"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loading2;