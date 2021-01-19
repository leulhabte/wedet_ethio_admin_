import React from 'react';
import useStyles from './Styling';
import Photo from './Photo';
import { Box, Container, Button} from '@material-ui/core';

const FormField = ({ imgPicker, image, setImage, _handleImg}) => {
    const classes = useStyles();
    return (
        <Container>
            <Box display="flex" flexDirection="column" width="100%">
                {/* Item Name */}
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