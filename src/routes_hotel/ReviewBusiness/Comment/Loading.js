import React from 'react';
import {Container, Grid, Box} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const Loading =()=>{
    return(
        <Container maxWidth="xl">

            {/*  */}
            <Grid container spacing={7} style={{display: "flex", justifyContent: "center"}}>
                <Grid item lg={3} xs={9} md={6}>
                    <Skeleton variant="rect" width="80%" height="6rem"/>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Skeleton variant="rect" width="80%" height="6rem"/>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Skeleton variant="rect" width="80%" height="6rem"/>
                </Grid>

                <Grid item lg={3} xs={9} md={6}>
                    <Skeleton variant="rect" width="80%" height="6rem"/>
                </Grid>
            </Grid>


            {/*  */}

        </Container>
    )

}

export default Loading;