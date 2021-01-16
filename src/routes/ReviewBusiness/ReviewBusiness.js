import React, {useEffect, useState, useRef, useCallback} from 'react';
import Header from './Header';
import MainBody from './MainBody';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Box, Container } from '@material-ui/core';

const ReviewBusiness = () => {
    // Define States
    const [page, setPage] = useState(1);

    // 
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    // 

    // 
    const observer = useRef();
    const lastItemElement = useCallback(node => {
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

    useEffect(() => {
        fetchBusiness(page);
    }, [])

    useEffect(() => {
        fetchBusiness(page);
    }, [page])

    // Fetch Business 
    const fetchBusiness = async (page) => {
        setLoad(true);
        setError(false);
        try {
            const res = await axios.get(`restaurant?sort=DESC&sort_by=_id&date&p=${page}&per_p=3`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhpcmV0YWIzMzNAZ21haWwuY29tIiwiaWQiOiI1ZWU4MTUxMGJhNGQ5NTdkNWZhNTRkY2QiLCJleHAiOjE5MjU0Njk0MjAsImlhdCI6MTYxMDEwOTQyMH0.zZ7s3jKH-LiTdetiyoDl-JYY5TJjYSu16gPukBmLumsJ2rLthbXD9Hfsh4WVY5vIBy4gUIVe_o4CF3Azl41D2A'
                    }
                }
            )
            setUser((perv)=> [...perv, ...res.data.data]);
            setHasMore(res.data.data.length > 0)
            setLoad(false);
        }catch(e){
            setError(true);
            alert(e.message);
        }
    }

    // 
    const [query, setQuery] = useState("");
    const fectData = (query)=>{
        let cancel;
        axios({
            url: `restaurant/search?text=${query}`,
            method: "GET",
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setHasMore(false)
            setUser([])
            setUser(res.data.data)
        }).catch(e=>{
            if (axios.isCancel(e)) return;
        })
    }
    // 
    useEffect(()=>{
        if(query === "") {setPage(1); fetchBusiness(page);}
    },[query])

    return (
        <Container style={{ background: '#ECF0F3', height: '100vh' }}>
            <Box height={40} />
            <Header query={query} setQuery = {setQuery} fectData={fectData}/>
            <Box height={40} />
            <MainBody data={user} lastItemElement={lastItemElement} load={load}/>
        </Container>
    )
}

export default ReviewBusiness;