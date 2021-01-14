import React from 'react';
import { withStyles, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button, List, ListItem, ListItemText, IconButton, Tooltip } from '@material-ui/core';
import Comment from '@material-ui/icons/Comment';
import Description from '@material-ui/icons/Description';
import { withRouter } from 'react-router-dom';
import useStyles from './Styling';

const Business = ({ handleNext, handlePrev, data, page, totalPage, totalData, history }) => {
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

   
    return (
        <div>
            <TableContainer classes={{ root: classes.tableContainer }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.tableHead }}>Business Name</TableCell>
                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Address</TableCell>
                            <TableCell classes={{ root: classes.tableHead }} align="center">Business Type</TableCell>
                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Working Time</TableCell>
                            <TableCell classes={{ root: classes.tableHead }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value) => (
                            <StyledTableRow key={value.id} hover={true}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.address}</TableCell>
                                <TableCell>{value.division}</TableCell>
                                <TableCell>{value.workingTime}</TableCell>
                                <TableCell align="center">
                                    <Box display='flex' flexDirection='row' justifyContent="center">
                                        <IconButton onClick={()=>{const user_id = value.id; history.push({pathname: '/comm', state:{data: user_id}})}}><Tooltip title="Review"><Comment classes={{ root: classes.edit }} /></Tooltip></IconButton>
                                        <IconButton onClick={()=>{const user_id = value.id; history.push({pathname: '/about', state:{data: user_id}})}} ><Tooltip title="Description"><Description classes={{ root: classes.remove }} /></Tooltip></IconButton>
                                    </Box>
                                </TableCell>
                            </StyledTableRow>
                        ))}
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
        </div>
    )

}

export default withRouter(Business);