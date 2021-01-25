import React from 'react';
import useStyles from './Styling';
import { Box } from '@material-ui/core';

const MainBody = ({logo}) => {
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="center">
            <img src={logo} width="30%" height="30%"/>
        </Box>
    )
}

export default MainBody;