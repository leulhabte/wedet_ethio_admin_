import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Header from './Header';
import MainBody from './MainBody';
import SnackBar from '../../../partial/SnackBars';
import { Button, Box, Container, Backdrop, CircularProgress } from '@material-ui/core';
import useStyles from '../Styling';
import { withRouter } from 'react-router-dom';
import Dialog from '../../../partial/DialogContent';
import Cookies from 'js-cookie';

const RestaurantList = ({ history }) => {
    const classes = useStyles();
    // Define States
    const [page, setPage] = useState(1);
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
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    // 

    const [message, setMessage] = useState("");
    const [messageDialog, setMessageDialog] = useState("Delete this business");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [id, setID] = useState("");

    const handleCloseDialog = () => {
        setOpen2(false);
    };

    const handelClickDialog = () => {
        setOpen2(false);
        handleRemove(id);
    }

    // Remove Business
    const handleRemove = async (id) => {
        try {
            setOpenBackDrop(true);
            var settings = {
                "url": `admin/business/${id}`,
                "method": "DELETE",
                "timeout": 0,
                "headers": {
                  "Authorization": `Bearer ${Cookies.get('jwt')}`
                },
              };
            const res = await axios(settings);
            if (res.status === 200) {
                setMessage("Business Deleted")
                setMessageType('success')
                setOpenBackDrop(false);
                setOpen(true)
                history.push({ pathname: '/gRoute', state:{path: 'resList_garage', data: null}});
            }
        } catch (e) {
            setMessageType('error')
            setMessage(e.message)
            setOpenBackDrop(false);
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        fetchBusiness(page);
    }, [page])

    // Fetch Business 
    const fetchBusiness = async (page) => {
        try {
            setError(false)
            const res = await axios.get(`garage?sort=DESC&sort_by=_id&date&p=${page}&per_p=4`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            setUser(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.totalPages)
            setTotalData(res.data.results)
        } catch (e) {
            setError(true);
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
            url: `garage/search?text=${query}`,
            method: "GET",
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setUser([])
            setUser(res.data.data)
        }).catch(e => {
            if (axios.isCancel(e)) return;
        })
    }
    // 
    useEffect(() => {
        if (query === "") { setPage(1); fetchBusiness(page); }
    }, [query])
    return (
        <Container>
            <Backdrop open={openBackDrop} className={classes.backdrop}><CircularProgress/></Backdrop>
            <Box height={40} />
            <Header query={query} setQuery = {setQuery} fectData={fectData}/>
            <Box height={40} />
            <MainBody data={user} handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData} setID={setID} setOpen2={setOpen2}/>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
            <Dialog handleClick={handelClickDialog} handleClose={handleCloseDialog} open={open2} message={messageDialog}/>
            {error && <Box display="flex" justifyContent="center" alignItems="center" width="100%" py={30}><Button  className={classes.btn2} onClick={()=>{history.push({pathname: '/gRoute', state: {path: 'resList', data: null}})}}>Retry</Button></Box>}
        </Container>
    )
}

export default withRouter(RestaurantList);