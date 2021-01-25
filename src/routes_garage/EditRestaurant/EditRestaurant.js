import React from 'react';
import Header from './Header';
import { Container, Box} from '@material-ui/core';

const EditRestaurant = () => {

    return (
        <Container style={{background: '#ECF0F3', height: '100%'}}>
            <Box height={40} />
            <Header />
            <Box height={40} />
        </Container>
    )
}

export default EditRestaurant;