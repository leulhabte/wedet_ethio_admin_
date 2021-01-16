import React from 'react';
import useStyles from '../Styling';
import { Comment, Description, Edit, Delete } from '@material-ui/icons';
import Loading from '../../Loading/Loading';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const MainBody = ({ user, lastBookOfElement, load, history }) => {
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
                            <Typography className={classes.tableTitle}>Recent Edits</Typography>
                        </Box>

                        <Box>
                            <TableContainer style={{ maxHeight: '25rem' }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>Name</TableCell>
                                            <TableCell className={classes.tableHead}>Address</TableCell>
                                            <TableCell className={classes.tableHead}>Phone</TableCell>
                                            <TableCell className={classes.tableHead}>Working Hours</TableCell>
                                            <TableCell className={classes.tableHead} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            user.map((v, k) => {
                                                if (user.length === k + 1) {
                                                    return <StyledTableRow key={k} ref={lastBookOfElement}>
                                                        <TableCell >{v.name}</TableCell>
                                                        <TableCell >{v.address}</TableCell>
                                                        <TableCell >{v.division}</TableCell>
                                                        <TableCell >{v.workingTime}</TableCell>
                                                        <TableCell align="center">
                                                            <Box display='flex' flexDirection='row' justifyContent="center">
                                                                <IconButton onClick={() => { const user_id = v.id; history.push({ pathname: '/editRes', state: { data: user_id } }) }}><Tooltip title="Review"><Edit classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                                <IconButton onClick={() => { const user_id = v.id; history.push({ pathname: '/editRes', state: { data: user_id } }) }} ><Tooltip title="Description"><Delete classes={{ root: classes.remove }} /></Tooltip></IconButton>
                                                            </Box>
                                                        </TableCell>
                                                    </StyledTableRow>
                                                } else {
                                                    return <StyledTableRow key={k}>
                                                        <TableCell >{v.name}</TableCell>
                                                        <TableCell >{v.address}</TableCell>
                                                        <TableCell >{v.division}</TableCell>
                                                        <TableCell >{v.workingTime}</TableCell>
                                                        <TableCell align="center">
                                                            <Box display='flex' flexDirection='row' justifyContent="center">
                                                                <IconButton onClick={() => { const user_id = v.id; history.push({ pathname: '/editRes', state: { data: user_id } }) }}><Tooltip title="Review"><Edit classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                                <IconButton onClick={() => { const user_id = v.id; history.push({ pathname: '/editRes', state: { data: user_id } }) }} ><Tooltip title="Description"><Delete classes={{ root: classes.remove }} /></Tooltip></IconButton>
                                                            </Box>
                                                        </TableCell>
                                                    </StyledTableRow>
                                                }

                                            })
                                        }
                                        <TableRow>
                                            <TableCell />
                                            <TableCell />
                                            <TableCell align="center">{load && <CircularProgress color='orange' />}</TableCell>
                                        </TableRow>
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