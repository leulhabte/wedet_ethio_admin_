import React from 'react';
import useStyles from './Styling';
import {withRouter} from 'react-router-dom';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

const Header = ({history}) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3} className={classes.mainGrid}>
                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.reviewButton} onClick={()=>{history.push('/resList')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Edit Restaurant</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.dashButtonC1} onClick={()=>{history.push('/resPhoto')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Restaurant Photo</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.dashButtonC2} onClick={()=>{history.push('/resEdit')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Edit Menu</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>

                <Grid item lg={5} xs={9} md={6}>
                    <Button className={classes.dashButtonC3}  onClick={()=>{history.push('/resMenu')}}>
                        <Box display="flex" flexDirection="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
                            <Typography className={classes.headTxt}>Add Menu</Typography>
                            <Box height={20}/>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )

}

export default withRouter(Header);