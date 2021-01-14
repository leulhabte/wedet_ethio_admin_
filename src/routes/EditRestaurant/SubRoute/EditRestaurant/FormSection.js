import React from 'react';
import useStyles from './Styling';
import { Box, Paper, InputBase, Typography } from '@material-ui/core';

const FormSection = () => {
    const classes = useStyles();
    return (
        <Box width="100%" display="flex" flexDirection="column">

            {/* Map coordinate */}
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Map Coordinate</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* Phone */}
            <Box height={30}/>
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Phone Number</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* Address */}
            <Box height={30}/>
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Address</Typography>
                <Paper>
                    <InputBase className={classes.inputBase} />
                </Paper>
            </Box>

            {/* Working Houres */}
            <Box height={30}/>
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Working Hours</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} />
                        </Paper>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default FormSection;