import React, { useRef, useCallback, useState, useEffect } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import { Box, Backdrop, CircularProgress, Button } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../../../../partial/SnackBars';
import useStyles from './Styling';
import {Redirect, withRouter} from 'react-router-dom';

const RestaurantPhoto = ({history}) => {
    const classes = useStyles();
    // Define States
    const [page, setPage] = useState(1);
    const [categroy, setCategory] = useState("NORMAL");

    // 
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    // 

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    // 
    const observer = useRef();
    const lastItemElement = useCallback(node => {
        if (load) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(p => (p + 1))
            }
        })
        if (node) observer.current.observe(node)
    }, [load, hasMore])
    // 

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    useEffect(() => {
        fetchBusiness(page, categroy);
    }, [page])

    useEffect(()=>{
        setPage(1); 
        setUser([]);
        fetchBusiness(page, categroy);
    },[categroy])


    const fetchBusiness = async (page, category) => {
        setLoad(true);
        setError(false);
        try {
            const res = await axios.get(`restaurant/${history.location.state.data}/?category=${category}&per_p=1&p=${page}&sort_by=price&sort=DESC`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhpcmV0YWIzMzNAZ21haWwuY29tIiwiaWQiOiI1ZWU4MTUxMGJhNGQ5NTdkNWZhNTRkY2QiLCJleHAiOjE5MjYzNjI5NDksImlhdCI6MTYxMTAwMjk0OX0.tTkfv1CL4wx-PkMKgE4eCGCu-BKNWrmiot06BeSZ5d23WTLwvrGAusw70lMqtOfoGhoKsB39BJB-yh82ivCoDQ'
                    }
                }
            )
            setUser((perv) => [...perv, ...res.data.data]);
            setHasMore(res.data.data.length > 0)
            setLoad(false);
        } catch (e) {
            setError(true);
            setLoad(false);
            setOpen2(false);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }

    }

    return (
        <div style={{ background: '#ECF0F3', height: '100%' }}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress/></Backdrop>
            <Box height={40} />
            <Header category={categroy} setCategory={setCategory}/>
            <Box height={40} />
            <MainBody data={user} lastItemElement={lastItemElement} load={load}/>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
            {error && <Box display="flex" justifyContent="center" alignItems="center" width="100%" py={30}><Button  className={classes.btn2} onClick={()=>{history.push({pathname: '/gRoute', state: {path: 'menus', data: history.location.state.data}})}}>Retry</Button></Box>}
        </div>
    )
}

export default withRouter(RestaurantPhoto);