import React, {useEffect, useState, useRef, useCallback} from 'react';
import axios from 'axios';
import Header from './Header';
import MainBody from './MainBody';
import {Container, Box} from '@material-ui/core';

const RestaurantList =()=>{
    const [page, setPage] = useState(1);

    // 
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    // 

    // 
    const observer = useRef();
    const lastBookOfElement = useCallback(node => {
        if (load) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(p=> (p+1))
            }
        })
        if (node) observer.current.observe(node)
    }, [load, hasMore])
    // 


    const fetchBusiness = async (page) => {
        setLoad(true)
        setError(false)
        try {
            const res = await axios.get(`restaurant?sort=DESC&sort_by=_id&p=${page}&per_p=4`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhpcmV0YWIzMzNAZ21haWwuY29tIiwiaWQiOiI1ZWU4MTUxMGJhNGQ5NTdkNWZhNTRkY2QiLCJleHAiOjE5MjU0Njk0MjAsImlhdCI6MTYxMDEwOTQyMH0.zZ7s3jKH-LiTdetiyoDl-JYY5TJjYSu16gPukBmLumsJ2rLthbXD9Hfsh4WVY5vIBy4gUIVe_o4CF3Azl41D2A'
                    }
                }
            )
            setUser((prev) => [...prev, ...res.data.data]);
            setHasMore(res.data.data.length > 0)
            setLoad(false)
        } catch (e) {
            setError(true)
            alert('something went wrong');
        }
    }

    useEffect(() => {
        fetchBusiness(page);
    }, [])

    useEffect(() => {
        fetchBusiness(page);
    }, [page])
    return(
        <div style={{background: '#ECF0F3', height: '100%'}}>
            <Box height={40}/>
            <Header/>
            <Box height={40}/>
            <MainBody user={user} lastBookOfElement={lastBookOfElement} load={load}/>
        </div>
    )
}

export default RestaurantList;