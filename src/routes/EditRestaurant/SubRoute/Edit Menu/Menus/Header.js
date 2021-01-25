import React from 'react';
import useStyles from '../../../Styling';
import { Container, Grid, Box, Typography, Button, Paper, InputBase, Select, MenuItem, FormControl } from '@material-ui/core';

const Header = ({ category, setCategory, query, setQuery, fectData }) => {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.title}>Search Menu</Typography>
            <Box display="flex" flexDirection="row" alignItems="start" width="50%">
                <Box flexGrow={1}>
                    <Paper className={classes.newPaper}>
                        <InputBase className={classes.inputBase} onChange={(e) => { setQuery(e.target.value) }} />
                    </Paper>
                </Box>
                <Box width={20} />
                <Box flexGrow={1}>
                    <Button className={classes.btn} onClick={() => { fectData(query); }}>Search</Button>
                </Box>
                <Box flexGrow={1}>
                    <FormControl>
                        <Select
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                        >
                            <MenuItem value="SPECIAL">SPECIAL</MenuItem>
                            <MenuItem value="NORMAL">NORMAL</MenuItem>
                            <MenuItem value="DRINK">DRINK</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Container>
    )

}

export default Header;