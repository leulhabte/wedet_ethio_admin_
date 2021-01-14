import React from 'react';
import {Container, Grid, Box, Typography, InputBase, Paper, Button} from '@material-ui/core';
import {LibraryAdd} from '@material-ui/icons';
import useStyles from '../config/Styling';

const Account = ()=>{
    const classes = useStyles();
    return(
        <Container>
            <Box paddingY={3}/>
            <Grid Container className={classes.commonGrid}>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Current Password</Typography></Box>
                            <Box p={1}/>
                            <Paper className={classes.editNameFieldHolder}>
                                <InputBase className={classes.editNameField}/>
                            </Paper>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>New password</Typography></Box>
                            <Box p={1}/>
                            <Paper className={classes.editNameFieldHolder}>
                                <InputBase className={classes.editNameField}/>
                            </Paper>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Confirm password</Typography></Box>
                            <Box p={1}/>
                            <Paper className={classes.editNameFieldHolder}>
                                <InputBase className={classes.editNameField}/>
                            </Paper>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography></Typography></Box>
                            <Box p={1}/>
                            <Box  className={classes.editMultiField}>
                                <Box display="flex" flexDirection="row" className={classes.editMenuHolder}>
                                    <Button className={classes.editMenuSubmitButton}>Update Profile</Button>
                                    <Box width={40}/>
                                    <Button className={classes.editMenuClearButton}>clear</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Account;