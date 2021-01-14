import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(255, 111, 0)';
const shadowColor = 'rgb(221, 221, 221)';
const appHover = 'rgb(255, 86,0)';
const appFade = 'rgb(204, 204, 204)';
const drawerWidth = 240;
const appColor2 = 'rgb(255, 140, 0)';

const useStyles = makeStyles((theme)=>({
    paper:{
        padding: '2rem'
    },
    parent:{
        position: 'relative',
        width: '100%',
        height: '20rem',
        padding: '0',
        margin: '0',
        borderRadius: '20px 20px'
    },
    child:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
        borderRadius: '20px 20px'
    },
    box:{
        width: '100%',
        // backgroundColor: '#EEEFF1' ,
        borderTopLeftRadius: '20px'
    },
    box2:{
        width: '100%',
        // backgroundColor: '#EEEFF1' ,
        borderBottomRightRadius: '20px'
    },
    title:{
        fontWeight: 'bold',
        color: 'black',
        color: 'rgb(210, 117, 55)'
    }
}));


export default useStyles;