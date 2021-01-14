import React from 'react';
import useStyles from './Styling';
import { Edit, Delete } from '@material-ui/icons';
import Loading from '../Loading/Loading';
import { Container, Typography, Box, Grid, Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, withStyles, IconButton, Tooltip, CircularProgress } from '@material-ui/core';

const MainBody = ({user, lastBookOfElement, load}) => {
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
                            <TableContainer style={{ maxHeight: '20rem' }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead}>No</TableCell>
                                            <TableCell className={classes.tableHead}>Name</TableCell>
                                            <TableCell className={classes.tableHead}>Phone</TableCell>
                                            <TableCell className={classes.tableHead}>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            user.map((v, k) => {
                                                if (user.length === k + 1) {
                                                    return <StyledTableRow key={k} ref={lastBookOfElement}>
                                                        <TableCell >{v.date}</TableCell>
                                                        <TableCell >{v.label}</TableCell>
                                                        <TableCell >{v.caption}</TableCell>
                                                        <TableCell >{v.businessId}</TableCell>
                                                    </StyledTableRow>
                                                } else {
                                                    return <StyledTableRow key={k}>
                                                        <TableCell >{v.date}</TableCell>
                                                        <TableCell >{v.label}</TableCell>
                                                        <TableCell >{v.caption}</TableCell>
                                                        <TableCell >{v.businessId}</TableCell>
                                                    </StyledTableRow>
                                                }

                                            })
                                        }
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell/>
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

export default MainBody;