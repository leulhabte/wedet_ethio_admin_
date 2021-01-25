import React, { useRef, useCallback, useState, useEffect } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import { Box, Button, Container } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../../../partial/SnackBars';
import useStyles from './Styling';
import { withRouter } from 'react-router-dom';

const RestaurantPhoto = ({ history }) => {
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
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    // 

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        fetchBusiness(page);
    }, [])

    useEffect(() => {
        fetchBusiness(page);
    }, [page])


    const fetchBusiness = async (page) => {
        setLoad(true);
        setError(false);
        try {
            const res = await axios.get(`restaurant?sort=DESC&sort_by=_id&p=${page}&per_p=4`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhpcmV0YWIzMzNAZ21haWwuY29tIiwiaWQiOiI1ZWU4MTUxMGJhNGQ5NTdkNWZhNTRkY2QiLCJleHAiOjE5MjU0Njk0MjAsImlhdCI6MTYxMDEwOTQyMH0.zZ7s3jKH-LiTdetiyoDl-JYY5TJjYSu16gPukBmLumsJ2rLthbXD9Hfsh4WVY5vIBy4gUIVe_o4CF3Azl41D2A'
                    }
                }
            )
            setUser(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.totalPages)
            setTotalData(res.data.results)
            setLoad(false);
        } catch (e) {
            setError(true);
            setLoad(false);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }

    }

    // 
    const [query, setQuery] = useState("");
    const fectData = (query) => {
        axios({
            url: `restaurant/search?text=${query}`,
            method: "GET",
        }).then(res => {
            setUser([])
            setUser(res.data.data)
        }).catch(e => {
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
            <Box height={40} />
            <Header query={query} setQuery={setQuery} fectData={fectData} />
            <Box height={40} />
            <MainBody data={user} handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData} load={load} />
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
            {error && <Box display="flex" justifyContent="center" alignItems="center" width="100%" py={30}><Button className={classes.btn2} onClick={() => { history.push({ pathname: '/gRoute', state: { path: 'resMenu', data: null } }) }}>Retry</Button></Box>}
        </Container>
    )
}

export default withRouter(RestaurantPhoto);