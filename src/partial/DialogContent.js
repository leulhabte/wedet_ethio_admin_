import React from 'react';
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button} from '@material-ui/core';

const DialogContents =({message, handleClose, handleClick, open})=>{
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{message}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClick}>YES</Button>
                <Button onClick={handleClose}>NO</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogContents;