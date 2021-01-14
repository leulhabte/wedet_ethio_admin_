import React from 'react';
import Header from './Header'
import NewForm from './NewForm';
import {Container} from '@material-ui/core';

const EditRestaturant =()=>{
    return(
        <Container style={{background: '#ECF0F3'}}>
            <Header/>
            <NewForm/>
        </Container>
    )
}

export default EditRestaturant;