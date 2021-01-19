import React from 'react';
import useStyles from './Styling';
import { withRouter } from 'react-router-dom';
import { Comment, Description, OpenInNew, Photo, Delete } from '@material-ui/icons';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip, CircularProgress } from '@material-ui/core';

const MainBody = ({ history, data, lastItemElement, load }) => {
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
                            <Typography className={classes.tableTitle}>Restaurnat Menu</Typography>
                        </Box>

                        <Box>
                            <TableContainer style={{ maxHeight: '25rem' }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Business Name</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Description</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Category</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Price</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((value, index) => {
                                            if (data.length === index + 1) {
                                                return <StyledTableRow ref={lastItemElement} key={value.id} hover={true}>
                                                    <TableCell>{value.name}</TableCell>
                                                    <TableCell>{value.description}</TableCell>
                                                    <TableCell>{value.category}</TableCell>
                                                    <TableCell>{value.price}</TableCell>
                                                    <TableCell align="center">
                                                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                                            <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/editMenu', state: { data: user_id } }) }}><Tooltip title="Edit Menu"><OpenInNew classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                            <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/editPhoto', state: { data: user_id } }) }}><Tooltip title="Edit Photo"><Photo classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                            <IconButton onClick={() => { const user_id = value.id;  }}><Tooltip title="Edit Photo"><Delete classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                        </Box>
                                                    </TableCell>
                                                </StyledTableRow>
                                            }
                                            return <StyledTableRow key={value.id} hover={true}>
                                                    <TableCell>{value.name}</TableCell>
                                                    <TableCell>{value.description}</TableCell>
                                                    <TableCell>{value.category}</TableCell>
                                                    <TableCell>{value.price}</TableCell>
                                                <TableCell align="center">
                                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                                                        <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/editMenu', state: { data: user_id } }) }}><Tooltip title="Edit Menu"><OpenInNew classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                        <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/editPhoto', state: { data: user_id } }) }}><Tooltip title="Edit Photo"><Photo classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                        <IconButton onClick={() => { const user_id = value.id;  }}><Tooltip title="Edit Photo"><Delete classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                                    </Box>
                                                </TableCell>
                                            </StyledTableRow>
                                        })}
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