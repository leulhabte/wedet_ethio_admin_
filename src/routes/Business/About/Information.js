import React from 'react';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import useStyles from './Styling';


const Information = ({ data }) => {
    const classes = useStyles();
    return (
        <Container>
            <Box classes={{ root: classes.box }} p={3} display="flex" justifyContent='center' alignContent="center">
                <Typography style={{fontWeight: 'bold', fontSize: '27px'}}>Business Information</Typography>
            </Box>
            <Grid container>
                <Grid item sm={12}>
                    <Box classes={{ root: classes.box }} display="flex" flexDirection="column" >
                        <Box classes={{ root: classes.box }} style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Name</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.name}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Description</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.description}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Address</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.address}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Phone number</Typography>
                            </Box>
                            {
                                data.phoneNumber.map((num) => (
                                    <Box p={3} flexGrow={1}>
                                        <Typography style={{color: 'white'}}>{num}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Address</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.workingTime}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Working Hours</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.workingHours.mon}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.tue}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.wen}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.thu}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.fri}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.sat}</Typography>
                                <Box height={20} />
                                <Typography style={{color: 'white'}}>{data.workingHours.sun}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Price Range</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}>{data.priceRange}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Category</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                {
                                    data.category.map((cat, index) => (
                                        <div>
                                            <Typography key={index} style={{color: 'white'}}>{cat}</Typography>
                                            <Box height={20} />
                                        </div>
                                    ))
                                }
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Services</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                {
                                    data.services.map((ser, index) => (
                                        <div>
                                            <Typography key={index} style={{color: 'white'}}>{ser}</Typography>
                                            <Box height={20} />
                                        </div>
                                    ))
                                }
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }}  style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Type</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                {
                                    data.type.map((ser, index) => (
                                        <div>
                                            <Typography key={index} style={{color: 'white'}}>{ser}</Typography>
                                            <Box height={20} />
                                        </div>
                                    ))
                                }
                            </Box>
                        </Box>
                        <Box height={10} />
                        {/*  */}
                        <Box classes={{ root: classes.box }} style={{ backgroundColor: 'rgb(210, 117, 55)' }} display="flex" flexDirection="row">
                            <Box style={{ width: '25%' }} justifyContent="flex-start" alignContent="center" p={3}>
                                <Typography classes={{ root: classes.title }}>Is Open now</Typography>
                            </Box>
                            <Box p={3} flexGrow={1}>
                                <Typography style={{color: 'white'}}    >{data.isOpenNow? "Yes": "No"}</Typography>
                            </Box>
                        </Box>
                        <Box height={10} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Information;