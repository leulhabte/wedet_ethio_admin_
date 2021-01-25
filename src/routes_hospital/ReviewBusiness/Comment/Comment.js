import React, { useState, useEffect } from 'react';
import Rate from './Rate';
import Review from './Review';
import axios from 'axios';
import Loading from './Loading2';
import Loading2 from './Loading';
import Cookies from 'js-cookie';
import {Container, Button, Box, List, ListItem, ListItemText} from '@material-ui/core';

const Comments = ({ history }) => {
    const [data, setData] = useState({});
    const [user, setUser] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);

    // Page Routing
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);

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

    // Fetch Rating
    const fetchRating = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`hosptial/review/info/${history.location.state.data}`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            setData(res.data);
            setLoading(false)
        } catch (e) {
            setLoading(false)
            alert("EEEE " + e.message);
        }
    }

    // Fetch Review
    const fetchReview = async (page) => {
        setLoading2(true);
        try {
            const res = await axios.get(`hospital/comments/5e5421c453b1f13b544c1197?p=${page}&per_p=3&sort=DESC&sort_by=bestResponse`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            setPage(res.data.page);
            setUser(res.data.data);
            setTotalData(res.data.results);
            setTotalPage(res.data.totalPages);
            setLoading2(false)
        } catch (e) {
            setLoading2(false)
            alert("IM" + e.message);
        }
    }



    useEffect(() => {
        fetchRating();
        fetchReview(page);
    }, [])

    useEffect(() => {
        fetchReview(page);
    }, [page])

    return (
        <Container maxWidth="xl">
            <Box paddingY={3} />
            {
                loading ? (<Loading2 />) :
                    (<Rate data={data} />)
            }
            <Box paddingY={2} />
            {
                loading2 ? (<Loading />) :
                    user !== null ?
                        (<div>
                            <Review user={user} />
                            <Box display="flex" flexDirection="row-reverse">
                                <Button onClick={handleNext} >Next</Button>
                                <Button onClick={handlePrev} >Prev</Button>
                                <List>
                                    <ListItem>
                                        <ListItemText>Page {page} of {totalPage} totall Data {totalData}</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </div>
                        ) : <Loading />
            }
        </Container>
    )

}


export default Comments;