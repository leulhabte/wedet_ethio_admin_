import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Styling';

const SubContentA = ({data}) => {
    const classes = useStyles();
    return (
        <div>
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Name</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >Arizona Restaurant</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Description</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.description}</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Address</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.address}</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }} display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Phone number</Typography>
                </Box>
                {
                    data.phoneNumber.map((num) => (
                        <Box p={3} flexGrow={1}>
                            <Typography >{num}</Typography>
                        </Box>
                    ))
                }
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }}  display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Address</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.workingTime}</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
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
        </div>
    )
}

export default SubContentA;