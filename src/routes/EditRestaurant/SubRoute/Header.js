import React from 'react';
import useStyles from '../Styling';
import { Container, Grid, Box, Typography, Button, Paper, InputBase } from '@material-ui/core';

const Header = () => {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.title}>Search Restaurant</Typography>
            <Box display="flex" flexDirection="row" alignItems="start" width="50%">
                <Box flexGrow={1}>
                    <Paper className={classes.newPaper}>
                        <InputBase className={classes.inputBase}/>
                    </Paper>
                </Box>
                <Box width={20}/>
                <Box flexGrow={1}>
                    <Button className={classes.btn}>Search</Button>
                </Box>
            </Box>
        </Container>
    )

}

export default Header;