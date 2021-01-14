import React from 'react';
import useStyles from './Styling';
import { Paper, Box, InputBase, Container, Typography, Button } from '@material-ui/core';

const FormField = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box display="flex" flexDirection="column" width="100%">
                {/* Item Name */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Item name</Typography>
                    <Paper className={classes.inputPaper}>
                        <InputBase className={classes.inputBase} />
                    </Paper>
                </Box>
                <Box height={40} />

                {/* Item Decription */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Description</Typography>
                    <Paper className={classes.inputPaper2}>
                        <InputBase className={classes.inputBase2} multiline />
                    </Paper>
                </Box>
                <Box height={40} />

                {/* Price and Type */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row" width="50%">
                        <Box width="45%">
                        <Typography className={classes.titles}>Price</Typography>
                            <Paper className={classes.inputPaper}>
                                <InputBase className={classes.inputBase} />
                            </Paper>
                        </Box>
                        <Box width="45%">
                        <Typography className={classes.titles}>Type</Typography>
                            <Paper className={classes.inputPaper}>
                                <InputBase className={classes.inputBase} />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={40} />

                {/* Submit Button */}
                <Button className={classes.btn}>Submit</Button>

            </Box>
        </Container>
    )
}

export default FormField;