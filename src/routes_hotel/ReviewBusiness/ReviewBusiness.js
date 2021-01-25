import React, {useEffect, useState} from 'react';
import Header from './Header';
import MainBody from './MainBody';
import axios from 'axios';
import { Box, Container, Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import useStyles from './Styling';
import SnackBar from '../../partial/SnackBars';
import Cookies from 'js-cookie';

const ReviewBusiness = ({history}) => {
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
    }, [page])

    // Fetch Business 
    const fetchBusiness = async (page) => {
        try {
            setError(false)
            const res = await axios.get(`hotel?sort=DESC&sort_by=_id&date&p=${page}&per_p=4`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            console.log(res.data.data)          
            setUser(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.totalPages)
            setTotalData(res.data.results)
        }catch(e){
            setError(true);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }
    }

    // 
    const [query, setQuery] = useState("");
    const fectData = (query)=>{
        let cancel;
        axios({
            url: `hotel/search?text=${query}`,
            method: "GET",
        }).then(res => {
            setUser([])
            setUser(res.data.data)
        }).catch(e=>{
            if (axios.isCancel(e)) return;
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        })
    }
    // 
    useEffect(()=>{
        if(query === "") {setPage(1); fetchBusiness(page);}
    },[query])

    return (
        <Container>
            <Box height={40} />
            <Header query={query} setQuery = {setQuery} fectData={fectData}/>
            <Box height={40} />
            <MainBody data={user} handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData}/>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
            {error && <Box display="flex" justifyContent="center" alignItems="center" width="100%" py={30}><Button  className={classes.btn2} onClick={()=>{history.push({pathname: '/gRoute', state: {path: 'resList', data: null}})}}>Retry</Button></Box>}
        </Container>
    )
}

export default withRouter(ReviewBusiness);