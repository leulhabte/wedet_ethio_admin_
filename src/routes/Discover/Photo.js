import React from 'react';
import useStyles from './Styling';
import { Box, Typography, IconButton} from '@material-ui/core';
import {CloudUpload} from '@material-ui/icons'

const PhotoPicker =({imgPicker, image, setImage, _handleImg})=>{
    const classes = useStyles();

    return(
        <Box className={classes.imgContainer}>
            <Box>
                <img src={image} className={classes.img} />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.imgBar}>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.imgBarComp}>
                <Typography className={classes.imgText}>Upload Discovery Photos</Typography>
                <IconButton onClick={() => { imgPicker.current.click() }}><CloudUpload className={classes.imgBtn} /></IconButton>
                <input style={{ display: 'none' }} type="file" ref={imgPicker} onChange={_handleImg} />
            </Box>
        </Box>
    )

}

export default PhotoPicker;