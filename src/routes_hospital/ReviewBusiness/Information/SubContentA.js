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
                    data.phoneNumber.map((num, index) => (
                        <Box p={3} flexGrow={1} key={index}>
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
                    <Typography classes={{ root: classes.title }}>Price Range</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.priceRange}</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default SubContentA;