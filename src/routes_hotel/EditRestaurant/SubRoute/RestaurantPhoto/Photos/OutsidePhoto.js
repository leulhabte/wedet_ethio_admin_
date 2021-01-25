import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, GridList, GridListTile, makeStyles, GridListTileBar, Box, IconButton,  Backdrop, CircularProgress } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loading from '../../../../Loading/Loading';
import Dialog from '../../../../../partial/DialogContent';
import { withRouter } from 'react-router-dom';
import SnackBar from '../../../../../partial/SnackBars';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: `calc(100vh - 8rem)`,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const Outside = ({ data, history, photo, index, ip }) => {
    console.log(ip)
    // Define States
    const [page, setPage] = useState(1);

    // 
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    // 

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [message, setMessage] = useState("");
    const [id, setID] = useState("");

    // Snack Bar
    const [message2, setMessage2] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClose2 = () => {
        setOpen3(false);
    };

    const handelClick = () => {
        setOpen(false);
        handleRemove(id);
    }


    // 
    const observer = useRef();
    const lastItemElement = useCallback(node => {
        if (load) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(p => (p + 1))
            }
        })
        if (node) observer.current.observe(node)
    }, [load, hasMore])
    // 

    const handleRemove = async (id) => {
        try {
            setOpen2(true)
            var config = {
                method: 'delete',
                url: `admin/photo?photoIds=${id}`,
                headers: {
                    'Authorization': `Bearer ${Cookies.get('jwt')}`
                }
            };
            const res = await axios(config);
            if (res.status === 200) {
                setMessage2("Image Deleted")
                setMessageType('success')
                setOpen2(false)
                setOpen3(true)
                history.push({ pathname: '/route_hotel', state: { photo: photo, data: data, index: 2, ip: ip } });
            }
        } catch (e) {
            setOpen2(false);
            setOpen3(true);
            setMessageType('error')
            setMessage2(e.message)
            alert(e.message);
        }
    }

    const fetchPhoto = async (page) => {
        setLoad(true);
        setError(false);
        try {
            const res = await axios.get(`hotel/photos/${data}/?label=OUTSIDE&p=${page}&per_p=5`,
                {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('jwt')}`
                    }
                }
            )
            setUser((perv) => [...perv, ...res.data.data]);
            setHasMore(res.data.data.length > 0)
            setLoad(false);
        } catch (e) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchPhoto(page)
    }, [page])

    const classes = useStyles();
    // const img = images();
    return (
        <Container maxWidth="xl" className={classes.root}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress/></Backdrop>
            <Box paddingY={4} />
            <GridList cellHeight={250} className={classes.gridList} cols={4}>
                {
                    user.map((tile, index) => {
                        if (user.length === index + 1) {
                            return <GridListTile key={index} cols={1} ref={lastItemElement}>
                                <img src={`http://${ip}/` + tile.filePath} style={{ width: '100%', height: '100%' }} />
                                <GridListTileBar
                                    title={tile.caption}
                                    subtitle={tile.label}
                                    actionIcon={<IconButton onClick={() => { setID(tile.id); setMessage("Are you sure you want to delete \"" + tile.caption + "\""); handleClickOpen() }}><Delete style={{ color: 'white', marginRight: '1rem' }} /></IconButton>}
                                />
                            </GridListTile>
                        }
                        return <GridListTile key={index} cols={1}>
                            <img src={`http://${ip}/` + tile.filePath} style={{ width: '100%', height: '100%' }} />
                            <GridListTileBar
                                title={tile.caption}
                                subtitle={tile.label}
                                actionIcon={<IconButton onClick={() => { setID(tile.id); setMessage("Are you sure you want to delete \"" + tile.caption + "\""); handleClickOpen() }}><Delete style={{ color: 'white', marginRight: '1rem' }} /></IconButton>}
                            />
                        </GridListTile>
                    })
                }
                {load && <Loading />}
                {error && <p>ERROR....</p>}
            </GridList>
            <Dialog handleClick={handelClick} handleClose={handleClose} open={open} message={message} />
            <SnackBar handleClose={handleClose2} open={open3} message={message2} type={messageType} />
            <SnackBar />
        </Container>
    );
}

export default withRouter(Outside);