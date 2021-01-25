import React, { useRef, useCallback, useState, useEffect } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import { Box, Backdrop, CircularProgress, Button, Container } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../../../../partial/SnackBars';
import useStyles from './Styling';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import Dialog from '../../../../../partial/DialogContent'

const RestaurantPhoto = ({ history }) => {
    const classes = useStyles();
    // Define States
    const [page, setPage] = useState(1);
    const [categroy, setCategory] = useState("NORMAL");
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);

    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    // 
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    // 

    const [message, setMessage] = useState("");
    const [messageDialog, setMessageDialog] = useState("Delete this Menu");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [id, setID] = useState("");

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handelClickDialog = () => {
        setOpenDialog(false);
        handleRemove(id);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleRemove = async(id) => {
        try {
            setOpen2(true);
            var settings = {
                "url": `admin/menu/${id}`,
                "method": "DELETE",
                "timeout": 0,
                "headers": {
                    "Authorization": `Bearer ${Cookies.get('jwt')}`
                },
            };

            const res = await axios(settings);
            if (res.status === 200) {
                setMessageType('success')
                setMessage('Menu Removed')
                setOpen2(false);
                setOpen(true)
                history.push({pathname: '/gRoute', state: {data: history.location.state.data, path: 'menus'}})
            }
        } catch (e) {
            setOpen2(false)
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }
    }

    // useEffect(() => {
    //     fetchBusiness(page, categroy);
    // }, [page])

    useEffect(() => {
        setPage(1);
        setUser([]);
        fetchBusiness(page, categroy);
    }, [categroy])

    const fetchBusiness = async (page, category) => {
        setLoad(true);
        setError(false);

        try {
            console.log(category)
            if (category !== undefined) {
                const config = {
                    method: 'GET',
                    url: `restaurant/${history.location.state.data}/?category=${category}&per_p=3&p=${page}&sort_by=price&sort=DESC`,
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    },
                }
                const res = await axios(config);
                setUser(res.data.data);
                setPage(res.data.page)
                setTotalPage(res.data.totalPages)
                setTotalData(res.data.results)
                setLoad(false);
            }

        } catch (e) {
            if (axios.isCancel(e)) return;
            setError(true);
            setLoad(false);
            setOpen2(false);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }
    }

    // 
    const [query, setQuery] = useState("");
    const fectData = (query) => {
        let cancel;
        axios({
            url: `restaurant/search?text=${query}`,
            method: "GET",
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setUser([])
            setUser(res.data.data)
        }).catch(e => {
            setError(true);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        })
    }
    // 
    useEffect(() => {
        if (query === "") { setPage(1); fetchBusiness(page); }
    }, [query])

    return (
        <Container style={{ background: '#ECF0F3', height: '100%' }}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress /></Backdrop>
            <Box height={40} />
            <Header category={categroy} setCategory={setCategory} query={query} setQuery={setQuery} fectData={fectData} />
            <Box height={40} />
            <MainBody data={user} load={load} handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData} setID={setID} setOpenDialog={setOpenDialog} />
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
            <Dialog handleClick={handelClickDialog} handleClose={handleCloseDialog} open={openDialog} message={messageDialog} />
            {error && <Box display="flex" justifyContent="center" alignItems="center" width="100%" py={30}><Button className={classes.btn2} onClick={() => { history.push({ pathname: '/gRoute', state: { path: 'menus', data: history.location.state.data } }) }}>Retry</Button></Box>}
        </Container>
    )
}

export default withRouter(RestaurantPhoto);