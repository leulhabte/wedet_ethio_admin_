import React from 'react';
import {Dialog, DialogTitle, DialogActions, Button} from '@material-ui/core';

const DialogContents =({message, handleClose, handleClick, open})=>{
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{message}</DialogTitle>
            <DialogActions>
                <Button style={{color: 'blue'}} onClick={handleClick}>YES</Button>
                <Button style={{color: 'red'}} onClick={handleClose}>NO</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogContents;