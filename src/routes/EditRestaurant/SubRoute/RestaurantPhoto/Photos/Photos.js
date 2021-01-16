import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Container, AppBar, Tab, Tabs, Box, Typography, Fab, Zoom, IconButton, Backdrop, CircularProgress} from '@material-ui/core';
import UpdatePhoto from './UpdatePhoto';
import InteriorPhoto from './InteriorPhotos';
import OutsidePhoto from './OutsidePhoto';
import ServicePhoto from './SericePhoto';
import {Add, Edit, Send} from '@material-ui/icons';
import useStyles from './Styling';
import SnackBar from '../../../../../partial/SnackBars'
import axios from 'axios';
import Cookies from 'js-cookie';
import {useHistory, Redirect} from 'react-router-dom'

const Photos =({history})=>{
    React.useEffect(()=>{
      console.log(history.location.state.index)
    },[])
    const _img = useRef();
    const classes = useStyles();
    const h = useHistory();
    const fabs = [
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Edit />,
          label: 'Add',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Add />,
          label: 'Edit',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Add />,
          label: 'Expand',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <Add />,
            label: 'Other',
          },
      ];
    const [value, setValue] = React.useState(history.location.state.index);
    const [fileImage, setFileImage] = useState({});
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const _handleChange = (event, newValue)=>{
        setValue(newValue);
    }
    const allyProps = (index)=>{
        return {
            id: `uniqeTab_${index}`
        }
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

    const sendPhoto = async(label)=>{
      // e.preventDefault();
      setOpen2(true);
      var index = label === "INSIDE"? 1 : label === "OUTSIDE" ? 2 : 3;
      try{
        if(JSON.stringify(fileImage) === JSON.stringify({})){
          throw new Error("No Images are selected")
        }
        const form = new FormData();
        form.append('businessId', `${history.location.state.data}`);
        for(var key in fileImage){
          form.append('photos', fileImage[key])
        }
        form.append("label", `${label}`);
        var settings = {
          url: "admin/add/photo",
          method: "POST",
          timeout: 0,
          headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhfbGV1bEBnbWFpbC5jb20iLCJpZCI6IjYwMDFhODI2YzcwYWZhMjYwOTk2MTNiOSIsImV4cCI6MTkyNjA5OTI0NiwiaWF0IjoxNjEwNzM5MjQ2fQ.C_EQYyTxgHdy2s5BfjwP8S3OglD08WbttBzzQYPIh0sPRdn3fUVdN8FnLl9mvoHE69ee9EkF4drV1PV4O6Bg6A`
          },
          processData: false,
          mimeType: "multipart/form-data",
          contentType: false,
          data: form
        };
        const res = await axios(settings);
        if (res.status === 200) {
          setMessage("Image inserted successfully")
          setMessageType('success');
          setOpen2(false);
          setOpen(true);
          history.push({pathname: '/route', state: {photo: history.location.state.photo, data: history.location.state.data, index: index}});
      }
      }catch(e){
        setOpen2(false);
        setMessage(e.message)
        setMessageType('error')
        setOpen(true);
      }
    }

    return(
        <div className={classes.manageRoot}>
          <Backdrop open={open2} className={classes.backdrop}><CircularProgress/></Backdrop>
            <AppBar position="fixed" className={classes.manageTab}>
                <Tabs className={classes.tab} value={value} onChange={_handleChange} centered variant="fullWidth">
                    <Tab label="Update Photo" {...allyProps(0)}/>
                    <Tab label = "Intrior photos" {...allyProps(1)}/>
                    <Tab label = "Exterior photos" {...allyProps(2)}/>
                    <Tab label = "Service photos" {...allyProps(3)}/>
                </Tabs>
            </AppBar>
        <TabPanels value={value} index={0}>
          <UpdatePhoto photo={history.location.state.photo}/>
        </TabPanels>
        <TabPanels value={value} index={1}>
          <InteriorPhoto data = {history.location.state.data} photo={history.location.state.photo} index={1}/>
        </TabPanels>
        <TabPanels value={value} index={2}>
          <OutsidePhoto data = {history.location.state.data} photo={history.location.state.photo} index={1}/>
        </TabPanels>
        <TabPanels value={value} index={3}>
          <ServicePhoto data = {history.location.state.data} photo={history.location.state.photo} index={1}/>
        </TabPanels>
        {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          unmountOnExit
        >
          {
            fab.label === 'Add' ? <Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={(e)=>{console.log("ADD")}}>
            {fab.icon}
          </Fab> : fab.label === 'Edit' ? <Box display="flex" flexDirection="row"><IconButton className={classes.send} onClick={()=>{sendPhoto("INSIDE")}}><Send/></IconButton><Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={(e)=>{console.log(_img.current.click(  ))}}>
            {fab.icon}
          </Fab></Box> : fab.label === 'Expand' ? <Box display="flex" flexDirection="row"><IconButton className={classes.send} onClick={()=>{sendPhoto("OUTSIDE")}}><Send/></IconButton><Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={(e)=>{console.log(_img.current.click(  ))}}>
            {fab.icon}
          </Fab></Box> : <Box display="flex" flexDirection="row"><IconButton className={classes.send} onClick={()=>{sendPhoto("SERVICE")}}><Send/></IconButton><Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={(e)=>{console.log(_img.current.click(  ))}}>
            {fab.icon}
          </Fab></Box>
          }
        </Zoom>
      ))}
      <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
      <hidden><input type="file" ref={_img} onChange={(e)=>{setFileImage(e.target.files)}} accept="image/x-png,image/gif,image/jpeg" multiple="multiple" style={{display: 'none'}}/></hidden>
        </div>
    );
}

const TabPanels = (props)=>{
    const {children, value, index, ...others} = props;
    return(
        <div
        hidden= {value !== index}
        id={ `uniqeTab_${index}`}
        {...others}
    >
        {value == index && (
            <Container maxWidth="xl" style={{padding: '0rem '}}>
                <Box marginTop={6}/>
                {children}
            </Container>
        )}
    </div>
    );
}

TabPanels.prototype ={
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired
}

export default Photos;