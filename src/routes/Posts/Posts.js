import React, { useRef, useState } from 'react';
import Header from './Header';
import FormField from './FormFields';
import img from '../../res/g1.jpg';
import axios from 'axios';
import { Container, Backdrop, CircularProgress } from '@material-ui/core';
import Cookies from 'js-cookie';
import SnackBar from '../../partial/SnackBars';
import useStyles from './Styling';

const Posts = ({ history }) => {
    const classes = useStyles();
    // Image States
    const imgPicker = React.useRef(null);
    const [image, setImage] = React.useState(img);
    const [fileImage, setFileImage] = useState({});
    ; const _handleImg = (e) => {
        e.preventDefault();
        setImage(URL.createObjectURL(e.target.files[0]));
        setFileImage(e.target.files)
        console.log(e.target.files)
    }
    // 
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [mark, setMark] = useState("");
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
            console.log(detail)
            var form = new FormData();
            form.append("post", `{  \"title\": \"${title}\",
                                    \"body\": \"${detail}\",
                                    \"caption\": \"${mark}\"
                                }`);
            for (var key in fileImage) {
                form.append('postLogo', fileImage[key])
            }
            var settings = {
                "url": "admin/featuredPost",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhfbGV1bEBnbWFpbC5jb20iLCJpZCI6IjYwMDFhODI2YzcwYWZhMjYwOTk2MTNiOSIsImV4cCI6MTkyNjgyOTg0NCwiaWF0IjoxNjExNDY5ODQ0fQ.n0BECTDhwCoIj4bSytFFZl3L--u_68WLJnWM9SkpkznMXZqs_iOpVqBi2Czwr9koGzyXwcB6PSF1LsGdy-UH6g"
                },
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": form
            };
            const res = await axios(settings);
            if (res.status === 200) {
                setTitle("");
                setDetail("");
                setMark("");
                setMessage('Post Inserted');
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
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress /></Backdrop>
            <Header />
            <form onSubmit={handleForm}>
                <FormField
                    imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}
                    title={title} setTitle={setTitle} detail={detail} mark={mark} setDetail={setDetail} setMark={setMark} />
            </form>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />

        </Container>
    )
}

export default Posts;