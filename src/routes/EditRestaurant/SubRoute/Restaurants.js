import React from 'react';
import Header from './Header';
import MainBody from './MainBody';
import {Container, Box} from '@material-ui/core';

const RestaurantList =()=>{
    return(
        <div style={{background: '#ECF0F3', height: '100vh'}}>
            <Box height={40}/>
            <Header/>
            <Box height={40}/>
            <MainBody/>
        </div>
    )
}

export default RestaurantList;