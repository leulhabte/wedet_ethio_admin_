import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import Cookies from 'js-cookie';
import SubContentA from './SubContentA';


const Information = ({history, ip}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchAbout = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`restaurant/info/${history.location.state.data}`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            console.log(res.data);
            setData(res.data)
            setLoading(false);
        } catch (e) {
            setLoading(false);
            alert(e.message)
        }
    }

    useEffect(() => {
        fetchAbout();
    }, [])
    return (
        <div style={{ height: '100%' }}>
            {loading ? (<Loading />) : (
                <div>
                    <Box display="flex" flexDirection="row">
                    <Box flexShrink={0} width="40%">
                    <Header photo={data.photoUrl.filePath} ip={ip}/>
                    </Box>
                    <Box flexGrow={1}><SubContentA data={data}/></Box>
                    </Box>
                    <Content data={data}/>
                </div>)}
        </div>
    )
}
export default Information;