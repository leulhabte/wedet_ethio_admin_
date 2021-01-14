import React from 'react';
import useStyles from '../../Styling';
import {withRouter} from 'react-router-dom';
import { OpenInNew } from '@material-ui/icons';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip } from '@material-ui/core';

const MainBody = ({history}) => {
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    return (
        <Container>
            <Grid container spacing={2} className={classes.mainGrid}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box width="100%" display="flex" p={3}>
                            <Typography className={classes.tableTitle}>New Registred Restaurnats</Typography>
                        </Box>

                        <Box>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>No</TableCell>
                                            <TableCell className={classes.tableHead}>Name</TableCell>
                                            <TableCell className={classes.tableHead}>Phone</TableCell>
                                            <TableCell className={classes.tableHead}>Date</TableCell>
                                            <TableCell className={classes.tableHead} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Arizona Restaurant</TableCell>
                                            <TableCell>+251985473456</TableCell>
                                            <TableCell>1/13/2021</TableCell>
                                            <TableCell>
                                                <Box display='flex' flexDirection='row' justifyContent="center">
                                                    <IconButton onClick={()=>{history.push('/photos')}}><Tooltip title="Open"><OpenInNew classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                </Box>
                                            </TableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(MainBody);