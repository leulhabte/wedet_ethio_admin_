import React from 'react';
import {Container, Grid, Box, Typography, InputBase, Paper, Button} from '@material-ui/core';
import {LibraryAdd} from '@material-ui/icons';
import useStyles from '../config/Styling';

const Editmenu = ()=>{
    const classes = useStyles();
    return(
        <Container>
            <Box paddingY={3}/>
            <Grid Container className={classes.commonGrid}>
                <Grid item xs={8}>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Restaurant Name</Typography></Box>
                            <Box p={1}/>
                            <Paper className={classes.editNameFieldHolder}>
                                <InputBase className={classes.editNameField}/>
                            </Paper>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Address</Typography></Box>
                            <Box p={1}/>
                            <Paper className={classes.editNameFieldHolder}>
                                <InputBase className={classes.editNameField} multiline rows={5}/>
                            </Paper>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Price</Typography></Box>
                            <Box p={1}/>
                            <Box display="flex" flexDirection="row" justifyContent="flex-start" className={classes.editMultiField}>
                                <Paper className={classes.editNameFieldHolders1}>
                                    <InputBase className={classes.editNameField}/>
                                </Paper>
                                <Box paddingX={1}/>
                                <Paper className={classes.editNameFieldHolders1}>
                                    <InputBase className={classes.editNameField}/>
                                </Paper>
                            </Box>
                        </Box>

                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography>Logo image</Typography></Box>
                            <Box p={1}/>
                            <Box  className={classes.editMultiField}>
                                <Box className={classes.editMenuLogoUpload}>
                                    <Button type="button"  className={classes.logoUploadIconHolder}>
                                        <LibraryAdd  className={classes.logoUploadIcon}/>
                                    </Button>
                                    <input type="file" className={classes.logoUploader}/>
                                </Box>
                            </Box>
                        </Box>


                        <Box paddingY={3}/>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.editMenuHolder}>
                            <Box display="flex" alignContent="center"><Typography></Typography></Box>
                            <Box p={1}/>
                            <Box  className={classes.editMultiField}>
                                <Box display="flex" flexDirection="row" className={classes.editMenuHolder}>
                                    <Button className={classes.editMenuSubmitButton}>Update</Button>
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

export default Editmenu;