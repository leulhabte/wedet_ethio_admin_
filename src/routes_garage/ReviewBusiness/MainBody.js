import React from 'react';
import useStyles from './Styling';
import { withRouter } from 'react-router-dom';
import { Comment, Description } from '@material-ui/icons';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip, CircularProgress, List, ListItem, Button, ListItemText } from '@material-ui/core';

const MainBody = ({ history, data, load, handleNext, handlePrev, page, totalPage, totalData }) => {
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
                            <Typography className={classes.tableTitle}>Restaurnats</Typography>
                        </Box>

                        <Box>
                            <TableContainer style={{ maxHeight: '25rem' }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Business Name</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Address</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Business Type</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }}>Description</TableCell>
                                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((value, index) => {
                                            return <StyledTableRow key={value.id} hover={true}>
                                                <TableCell>{value.name}</TableCell>
                                                <TableCell>{value.address}</TableCell>
                                                <TableCell>{value.division}</TableCell>
                                                <TableCell>{value.description}</TableCell>
                                                <TableCell align="center">
                                                    <Box display='flex' flexDirection='row' justifyContent="center">
                                                        <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/comm_garage', state: { data: user_id } }) }}><Tooltip title="Review"><Comment classes={{ root: classes.edit }}   style={{color: 'orange'}}/></Tooltip></IconButton>
                                                        <IconButton onClick={() => { const user_id = value.id; history.push({ pathname: '/info_garage', state: { data: user_id } }) }} ><Tooltip title="Description"><Description classes={{ root: classes.remove }}   style={{color: 'green'}}/></Tooltip></IconButton>
                                                    </Box>
                                                </TableCell>
                                            </StyledTableRow>
                                        })}
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