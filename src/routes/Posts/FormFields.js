import React from 'react';
import useStyles from './Styling';
import Photo from './Photo';
import { Paper, Box, InputBase, Container, Typography, Button} from '@material-ui/core';

const FormField = ({imgPicker, image, setImage, _handleImg, setTitle, setDetail, setMark, title, detail, mark}) => {
    const classes = useStyles();
    return (
        <Container>
            <Box display="flex" flexDirection="column" width="100%">
                {/* tite */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>title</Typography>
                    <Paper className={classes.inputPaper}>
                        <InputBase className={classes.inputBase} value={title} required onChange={(e)=>{setTitle(e.target.value)}}/>
                    </Paper>
                </Box>
                <Box height={40} />

                {/* Detail */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Body</Typography>
                    <Paper className={classes.inputPaper2}>
                        <InputBase className={classes.inputBase2} multiline rows={3} style={{ height: '5rem' }} value={detail} required onChange={(e)=>{setDetail(e.target.value)}}/>
                    </Paper>
                </Box>
                <Box height={40} />

                {/*  */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Caption</Typography>
                    <Paper className={classes.inputPaper2}>
                        <InputBase className={classes.inputBase2} multiline rows={3} style={{ height: '5rem' }} required value={mark}  onChange={(e)=>{setMark(e.target.value)}}/>
                    </Paper>
                </Box>
                
                <Box height={40} />
                {/* Image Picker */}
                <Photo imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}/>
                {/* Submit Button */}
                <Box height={40} />
                <Button className={classes.btn} type="submit">Submit</Button>
                <Box height={40} />
            </Box>
        </Container>
    )
}

export default FormField;