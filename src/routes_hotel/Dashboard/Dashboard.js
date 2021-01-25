import React, { useEffect, useState } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../../res/logo.svg'
import {Container, Box} from '@material-ui/core';

const Dashboard =()=>{

    const [business, setBuesiness] = useState("");
    const [review, setReview] = useState("");
    const [menu, setMenu] = useState("");
    const [user, setUser] = useState("");

    const fectCountStatus = async()=>{
        var settings = {
            "url": "admin/countStatus/",
            "method": "GET",
            "timeout": 0,
            "headers": {
              "Authorization": `Bearer ${Cookies.get('jwt')}`
            },
        };

        const res = await axios(settings);

        if(res.status === 200){
            setBuesiness(res.data.business);
            setReview(res.data.review);
            setMenu(res.data.menu);
            setUser(res.data.user);
        }
    }
    useEffect(()=>{
        fectCountStatus()
    },[])
    
    return(
        <Container >
            <Box height={40}/>
            <Header business={business} review={review} menu={menu} user={user}/>
            <Box height={40}/>
            <MainBody logo={logo}/>
        </Container>
    )
}

export default Dashboard;