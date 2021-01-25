import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Styling';

const SubContentB = ({ data }) => {
    const classes = useStyles();
    return (
        <div>
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Working Hours</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.workingHours.mon}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.tue}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.wen}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.thu}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.fri}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.sat}</Typography>
                    <Box height={20} />
                    <Typography >{data.workingHours.sun}</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Category</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    {
                        data.category.map((cat, index) => (
                            <div key={index}>
                                <Typography >{cat}</Typography>
                                <Box height={20} />
                            </div>
                        ))
                    }
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Is Open now</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.isOpenNow ? "Yes" : "No"}</Typography>
                </Box>
            </Box>
            <Box height={10} />
        </div>
    )
}

export default SubContentB;