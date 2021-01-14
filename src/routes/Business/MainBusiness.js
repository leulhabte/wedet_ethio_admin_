import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {Container} from '@material-ui/core';
import Business from './Businesse';
import Loading from '../Loading/Loading';

const MainBusiness = () => {

    // Define States
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(true);

    // Handle Next Page Click
    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    }

    // Handle Previous Page Click
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    useEffect(() => {
        fetchBusiness(page);
    }, [])

    useEffect(() => {
        fetchBusiness(page);
    }, [page])

    // Fetch Business 
    const fetchBusiness = async (page) => {
        setLoading(true)
        try {
            const res = await axios.get(`restaurant?sort=DESC&sort_by=date&priceMin=50&priceMax=250&p=${page}&per_p=3`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhpcmV0YWIzMzNAZ21haWwuY29tIiwiaWQiOiI1ZWU4MTUxMGJhNGQ5NTdkNWZhNTRkY2QiLCJleHAiOjE5MjU0Njk0MjAsImlhdCI6MTYxMDEwOTQyMH0.zZ7s3jKH-LiTdetiyoDl-JYY5TJjYSu16gPukBmLumsJ2rLthbXD9Hfsh4WVY5vIBy4gUIVe_o4CF3Azl41D2A'
                    }
                }
            )
            setData(res.data.data);
            setPage(res.data.page)
            setTotalPage(res.data.totalPages)
            setTotalData(res.data.results)
            setLoading(false)
        }catch(e){
            setLoading(false)
            alert('something went wrong');
        }

    }

    return (
        <Container maxWidth="xl">
            <div>
                {
                    loading ? (<Loading/>):
                    (<Business handleNext={handleNext} handlePrev={handlePrev} data={data} page={page} totalPage={totalPage} totalData={totalData}/>)
                }
            </div>
        </Container>
    )
}

export default MainBusiness;