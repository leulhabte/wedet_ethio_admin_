import React from 'react';
import useStyles from './Styling';
import { Paper, Box, InputBase, Container, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const FormField = ({category, handleChange, setName, description, setDescription, price, setPrice}) => {
    const classes = useStyles();
    return (
        <Container>
            <Box display="flex" flexDirection="column" width="100%">
                {/* Item Name */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Item name</Typography>
                    <Paper className={classes.inputPaper}>
                        <InputBase className={classes.inputBase} onChange={(e)=>{setName(e.target.value)}}/>
                    </Paper>
                </Box>
                <Box height={40} />

                {/* Item Decription */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Description</Typography>
                    <Paper className={classes.inputPaper2}>
                        <InputBase className={classes.inputBase2} multiline  onChange={(e)=>{setDescription(e.target.value)}}/>
                    </Paper>
                </Box>
                <Box height={40} />

                {/* Price and Type */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row" width="50%">
                        <Box width="45%">
                            <Typography className={classes.titles}>Price</Typography>
                            <Paper className={classes.inputPaper}>
                                <InputBase className={classes.inputBase}  onChange={(e)=>{setPrice(e.target.value)}}/>
                            </Paper>
                        </Box>
                        <Box width="45%">
                            <Typography className={classes.titles}>Type</Typography>
                            <Paper className={classes.inputPaper}>
                                <FormControl className={classes.margin}>
                                    <Select
                                        style={{width: '100%'}}
                                        value={category}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"NORMAL"}>Normal</MenuItem>
                                        <MenuItem value={"NORMAL"}>Normal</MenuItem>
                                        <MenuItem value={"NORMAL"}>Normal</MenuItem>
                                    </Select>
                                </FormControl>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                {/* Submit Button */}
                <Box height={40} />
                <Button className={classes.btn} type="submit">Submit</Button>
                <Box height={40} />
            </Box>
        </Container>
    )
}

export default FormField;