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
    // Image States
    const imgPicker = React.useRef(null);
    const [image, setImage] = React.useState(img);
    const [fileImage, setFileImage] = useState({});
    ; const _handleImg = (e) => {
        e.preventDefault();
        setImage(URL.createObjectURL(e.target.files[0]));
        setFileImage(e.target.files[0])
    }
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
            form.append("menuId",  `${history.location.state.data}`);
            form.append("photo", fileImage);

            var settings = {
                "url": "admin/update/menuPhoto",
                "method": "PUT",
                "timeout": 0,
                "headers": {
                  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhfbGV1bEBnbWFpbC5jb20iLCJpZCI6IjYwMDFhODI2YzcwYWZhMjYwOTk2MTNiOSIsImV4cCI6MTkyNjA5OTI0NiwiaWF0IjoxNjEwNzM5MjQ2fQ.C_EQYyTxgHdy2s5BfjwP8S3OglD08WbttBzzQYPIh0sPRdn3fUVdN8FnLl9mvoHE69ee9EkF4drV1PV4O6Bg6A"
                },
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": form
              };
            const res = await axios(settings);
            if(res.status === 200){
                setMessage('Photo Updated');
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
                    imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}
                    name={name} setName={setName} description={description} setDescription={setDescription} setPrice={setPrice} price={price} />
            </form>
        <SnackBar handleClose={handleClose} open={open} message={message} type={messageType}/>

        </Container>
    )
}

export default AddMenu;