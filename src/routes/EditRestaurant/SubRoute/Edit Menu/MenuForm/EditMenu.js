import React, { useRef, useState } from 'react';
import Header from './Header';
import FormField from './FormFields';
import img from '../../../../../res/g1.jpg';
import axios from 'axios';
import { Container, Backdrop, CircularProgress } from '@material-ui/core';
import Cookies from 'js-cookie';
import SnackBar from '../../../../../partial/SnackBars';
import useStyles from './Styling';

const AddMenu = ({ history }) => {
    const classes = useStyles();

    const [category, setCategory] = React.useState("NORMAL");
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    // 
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // 
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    //
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            setOpen2(true);
            var form = new FormData();
            form.append("menu", `{
                \"name\": \"${name}\",
                \"businessId\": \"${history.location.state.data}\",
                \"description\": \"${description}\",
                \"price\": ${price},
                \"category\": \"${category}\"
            }`);
            var config = {
                method: 'post',
                url: 'admin/register/menu',
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhfbGV1bEBnbWFpbC5jb20iLCJpZCI6IjYwMDFhODI2YzcwYWZhMjYwOTk2MTNiOSIsImV4cCI6MTkyNjM0MjQ1NSwiaWF0IjoxNjEwOTgyNDU1fQ.RQplYH4VHrUlKXqULmRJe-28OjW5PV79uMjzPD5Ly-3MdHRBNOUxc1G3RJ_qH8dKoPSqCuOT8_Y9OXBJMCs-xw`
                },
                data: form
            }
            const res = await axios(config);
            if(res.status === 200){
                setMessage('Data Inserted');
                setMessageType('success');
                setOpen(true);
                setOpen2(false);
            }

        } catch (e) {
            setOpen2(false)
            setMessage(e.message);
            setOpen(true)
        }
    }
    return (
        <Container style={{ height: '100vh' }}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress/></Backdrop>
            <Header />
            <form onSubmit={handleForm}>
                <FormField category={category} setCategory={setCategory} handleChange={handleChange}
                    name={name} setName={setName} description={description} setDescription={setDescription} setPrice={setPrice} price={price} />
            </form>
        <SnackBar handleClose={handleClose} open={open} message={message} type={messageType}/>

        </Container>
    )
}

export default AddMenu;