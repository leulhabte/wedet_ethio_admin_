import React, { useEffect, useState } from 'react';
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
    const [photo, setPhoto] = useState({
        mediumFilePath: "",
        filePath: "",
        thumbFilePath: ""
    });
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

    const getMenu = async () => {
        setOpen2(true);
        try {
            var settings = {
                "url": `restaurant/menu/info/${history.location.state.data}`,
                "method": "GET",
                "timeout": 0,
            };

            const res = await axios(settings);
            if (res.status === 200) {
                console.log(res.data)
                setPhoto({
                    ...photo,
                    mediumFilePath: res.data.photoUrl.mediumFilePath,
                    filePath: res.data.photoUrl.filePath,
                    thumbFilePath: res.data.photoUrl.thumbFilePath
                })
                setName(res.data.name);
                setDescription(res.data.description);
                setPrice(res.data.price);
                setCategory(res.data.category);
                setOpen2(false);
            }
        } catch (e) {
            setOpen2(false)
            setMessage(e.message);
            setOpen(true);
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            setOpen2(true);

            var settings = {
                "url": "admin/update/menu",
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": `Bearer ${Cookies.get('jwt')}`,
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "id": `${history.location.state.data}`,
                    "name": `${name}`,
                    "businessId": `${history.location.state.b_id}`,
                    "photoUrl": {
                        "filePath": `${photo.filePath}`,
                        "mediumFilePath": `${photo.mediumFilePath}`,
                        "thumbFilePath": `${photo.thumbFilePath}`
                    },
                    "description": `${description}`,
                    "price": parseFloat(price),
                    "category": `${category}`, "date": `${Date.now()}`
                }
                ),
            };

            const res = await axios(settings);
            if (res.status === 200) {
                setMessage('Menu Updated');
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

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <Container style={{ height: '100vh' }}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress /></Backdrop>
            <Header />
            {
                !open2 && <form onSubmit={handleForm}>
                    <FormField category={category} setCategory={setCategory} handleChange={handleChange}
                        name={name} setName={setName} description={description} setDescription={setDescription} setPrice={setPrice} price={price} />
                </form>
            }
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />

        </Container>
    )
}

export default AddMenu;