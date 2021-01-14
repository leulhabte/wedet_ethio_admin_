import React from 'react';
import Header from './Header';
import FormField from './FormFields';
import {Container} from '@material-ui/core';

const AddMenu = () => {
    return (
        <Container style={{height: '100vh'}}>
            <Header />
            <FormField />
        </Container>
    )
}

export default AddMenu;