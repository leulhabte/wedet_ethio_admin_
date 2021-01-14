import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    parent:{
        position: 'relative',
        width: '100%',
        height: '20rem'
    },
    child:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundImage: `url("C:/Users/Public/1.jpg")`
        // backgroundColor: 'yellow'
    },
    box:{
        width: '100%'
    },
    box2:{
        width: '100%'
    },
    title:{
        fontWeight: 'bold',
        color: 'white'
        // color: 'rgb(210, 117, 55)'
    }
}));

export default useStyles;