import React from 'react';
import { Container, Card, Button, Grid, Box, Typography, CardContent, InputBase, Paper,  Backdrop, CircularProgress} from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import useStyles from '../config/Styling';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SnackBar from '../partial/SnackBars';

const Login = (props) => {
    console.log(props);
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [openBox, setOpenBox] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const _handleLogin = async (event) => {
        event.preventDefault();
        try{
            setOpenBox(true)
            const res = await axios.post('user/authenticate', {email,password});
            props.handleUserLogin(res.data);
        }catch(e){
            setOpenBox(false)
            setMessage(e.message);
            setOpen(true);
        }

    }
    return (
        <Container style={{ marginTop: '4rem' }}>
            <Backdrop open={openBox} style={{zIndex: 1}}><CircularProgress></CircularProgress></Backdrop>
            <Grid container className={classes.logInGrid}>
                <Grid item md={4}>
                    <Card className={classes.loginContainer}>
                        <form onSubmit={_handleLogin}>
                            <CardContent>
                                <Box display="flex" flexDirection="column">
                                    <Typography className={classes.loginHeader}>Login</Typography>
                                    <Box height={60} />
                                    <Paper className={classes.inputHolder}>
                                        <AccountCircle className={classes.fieldIcon} />
                                        <InputBase placeholder="Username" className={classes.inputField} required type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
                                    </Paper>
                                    <Box height={30} />
                                    <Paper className={classes.inputHolder}>
                                        <Lock className={classes.fieldIcon} />
                                        <InputBase placeholder="Password" className={classes.inputField} required type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                                    </Paper>
                                    <Box height={30} />
                                    {/* <Typography className={classes.loginText1}>Forget Password</Typography> */}
                                    <Box height={50} />
                                    <Button className={classes.logInButton} type="submit">Sign in</Button>
                                    <Box height={30} />
                                    {/* <Typography className={classes.loginText2}>Create Bussiness Account</Typography> */}
                                </Box>
                            </CardContent>
                        </form>
                    </Card>
                </Grid>
            </Grid>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
        </Container>
    );
}

export default Login;