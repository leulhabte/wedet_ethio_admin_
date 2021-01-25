import React from 'react';
import useStyles from '../Styling';
import { Comment, Description, Edit, Delete } from '@material-ui/icons';
import Loading from '../../Loading/Loading';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip, CircularProgress, List, ListItem, Button, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const MainBody = ({ data, load, history, handleNext, handlePrev, page, totalPage, totalData, setID, setOpen2 }) => {
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
                            <Typography className={classes.tableTitle}>Hospitals</Typography>
                        </Box>

                        <Box>
                            <TableContainer style={{ maxHeight: '25rem' }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>Name</TableCell>
                                            <TableCell className={classes.tableHead}>Address</TableCell>
                                            <TableCell className={classes.tableHead}>Division</TableCell>
                                            <TableCell className={classes.tableHead}>Description</TableCell>
                                            <TableCell className={classes.tableHead} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.map((v, k) => {
                                                return <StyledTableRow key={k}>
                                                        <TableCell >{v.name}</TableCell>
                                                        <TableCell >{v.address}</TableCell>
                                                        <TableCell >{v.division}</TableCell>
                                                        <TableCell >{v.description}</TableCell>
                                                        <TableCell align="center">
                                                            <Box display='flex' flexDirection='row' justifyContent="center">
                                                                <IconButton onClick={() => { const user_id = v.id; history.push({ pathname: '/editRes_hospital', state: { data: user_id } }) }}><Tooltip title="Edit"><Edit classes={{ root: classes.edit }} style={{color: 'blue'}} /></Tooltip></IconButton>
                                                                <IconButton onClick={() => { const user_id = v.id; setID(user_id); setOpen2(true) }} ><Tooltip title="Remove"><Delete classes={{ root: classes.remove }}  style={{color: 'red'}}/></Tooltip></IconButton>
                                                            </Box>
                                                        </TableCell>
                                                    </StyledTableRow>
                                            })
                                        }
                                        <TableRow>
                                            <TableCell />
                                            <TableCell />
                                            <TableCell align="center">{load && <CircularProgress color='inherit' />}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box height={10} />
                            <Box display="flex" flexDirection="row-reverse">
                                <Button onClick={handleNext} classes={{ root: classes.pageButton }}>Next</Button>
                                <Button onClick={handlePrev} classes={{ root: classes.pageButton }}>Prev</Button>
                                <List>
                                    <ListItem>
                                        <ListItemText>Page {page} of {totalPage} totall Data {totalData}</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(MainBody);