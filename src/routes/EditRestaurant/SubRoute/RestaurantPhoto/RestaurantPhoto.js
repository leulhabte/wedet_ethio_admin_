import React from 'react';
import Header from './Header';
import MainBody from './MainBody';
import {Box} from '@material-ui/core';

const RestaurantPhoto =()=>{
    return(
        <div style={{background: '#ECF0F3', height: '100vh'}}>
            <Box height={40}/>
            <Header/>
            <Box height={40}/>
            <MainBody/>
        </div>
    )
}

export default RestaurantPhoto;