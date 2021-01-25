import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import SubContentA from './SubContentA';
import SubContentB from './SubContentB';
import useStyles from './Styling';

const Content =({data})=>{
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item md={12} xs={12}>
                        {/* <SubContentA data={data}/> */}
                        <SubContentB data={data}/>
                    </Grid>
                    {/* <Grid item md={6} xs={12}>
                        
                    </Grid> */}
                </Grid>

            </Paper>
        </div>
    )
}

export default Content;