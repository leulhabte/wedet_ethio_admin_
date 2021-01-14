import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Cookies from 'js-cookie';
import Header from './Header';
import Information from './Information';
import Loading from '../../Loading/Loading';

const About = ({ history }) => {

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
    },[])

    return (
        <div>
            {loading ? <Loading /> :
                (<div>
                    {/* <Header img={data.photoUrl.filePath}/> */}
                    <Information data={data}/>
                </div>)}
        </div>
    )
}

export default About;