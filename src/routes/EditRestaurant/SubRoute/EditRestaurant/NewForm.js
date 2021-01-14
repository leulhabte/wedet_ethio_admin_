import React, { useState } from 'react';
import useStyles from './Styling';
import Checkboxes from './CheckBox';
import Facualities from './Facialities';
import FormSection from './FormSection';
import MapContainer from './MapContainer';
import { Box, Paper, InputBase, FormControlLabel, Typography, Checkbox, Button, Grid, FormGroup } from '@material-ui/core';

const NewForm = () => {
    const classes = useStyles();

    return (
        <div>
            <Box display="flex" flexDirection="column" p={2} width="100%">

                {/* Name field */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Name</Typography>
                    <Paper className={classes.namePaper}>
                        <InputBase className={classes.inputBase} />
                    </Paper>
                </Box>

                {/* Categories */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Category</Typography>
                    <Paper className={classes.paperPad}>
                        <Checkboxes />
                    </Paper>
                </Box>

                {/* Facualities */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Facualities</Typography>
                    <Paper className={classes.paperPad}>
                        <Facualities />
                    </Paper>
                </Box>

                {/* Section 2 */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={10}>
                            <FormSection />
                        </Grid>
                        <Grid item md={6} xs={10}>
                            <Box display="flex" flexDirection="column">
                                <MapContainer />
                                <Box height={30}/>
                                <Button className={classes.btn}>Submit</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}

export default NewForm;