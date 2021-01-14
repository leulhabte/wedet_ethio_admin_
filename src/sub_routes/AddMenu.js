import React from 'react';
import {Container, Grid, Box, List, ListItemText, ListItem, Typography} from '@material-ui/core';
import useStyles from '../config/Styling';

const AddMenu = ()=>{
    const classes = useStyles();
    return(
        <Container>
            <Box paddingY={3}/>
            <Grid container className={classes.commonGrid}>
                <Grid item md={4} xs={10}>
                    <List>
                        <ListItem><ListItemText>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h5" className={classes.addMenuHeaderText}>Special Meals</Typography>
                            </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special burger</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special shawurma</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special pizza</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special salad sandwich</Typography>
                        </Box>
                        </ListItemText></ListItem>
                    </List>
                </Grid>

                <Grid item md={4} xs={10}>
                    <List>
                        <ListItem><ListItemText>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h5" className={classes.addMenuHeaderText}>Normal Meals</Typography>
                            </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special burger</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special shawurma</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special pizza</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special salad sandwich</Typography>
                        </Box>
                        </ListItemText></ListItem>
                    </List>
                </Grid>

                <Grid item md={4} xs={10}>
                    <List>
                        <ListItem><ListItemText>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h5" className={classes.addMenuHeaderText}>Drinks</Typography>
                            </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special burger</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special shawurma</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Wow special pizza</Typography>
                        </Box>
                        </ListItemText></ListItem>
                        <ListItem><ListItemText>
                        <Box display="flex" justifyContent="center">
                            <Typography className={classes.addMenuText}>Special salad sandwich</Typography>
                        </Box>
                        </ListItemText></ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AddMenu;