import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Styling';

const SubContentB = ({data}) => {
    const classes = useStyles();
    return (
        <div>
            <Box classes={{ root: classes.box2 }} display="flex" flexDirection="row">
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
                    <Typography classes={{ root: classes.title }}>Price Range</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.priceRange}</Typography>
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }}  display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Category</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    {
                        data.category.map((cat, index) => (
                            <div>
                                <Typography key={index} >{cat}</Typography>
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
                    <Typography classes={{ root: classes.title }}>Services</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    {
                        data.services.map((ser, index) => (
                            <div>
                                <Typography key={index} >{ser}</Typography>
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
                    <Typography classes={{ root: classes.title }}>Type</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    {
                        data.type.map((ser, index) => (
                            <div>
                                <Typography key={index} >{ser}</Typography>
                                <Box height={20} />
                            </div>
                        ))
                    }
                </Box>
            </Box>
            <Box height={10} />
            {/*  */}
            <Box classes={{ root: classes.box }}  display="flex" flexDirection="row">
                <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                    <Typography classes={{ root: classes.title }}>Is Open now</Typography>
                </Box>
                <Box p={3} flexGrow={1}>
                    <Typography >{data.isOpenNow? "Yes": "No"}</Typography>
                </Box>
            </Box>
            <Box height={10} />
        </div>
    )
}

export default SubContentB;