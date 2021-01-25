import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(255, 111, 0)';
const shadowColor = 'rgb(221, 221, 221)';
const appHover = 'rgb(255, 86,0)';
const appFade = 'rgb(204, 204, 204)';
const drawerWidth = 240;
const appColor2 = 'rgb(255, 140, 0)';

const useStyles = makeStyles((theme)=>({
    //ManagePhoto Section
    manageRoot: {
        position: 'relative',
    },
    manageTab:{
        backgroundColor: appbarColor,
        marginLeft: '6rem',
        marginTop: '4rem',
        [theme.breakpoints.down('md')]:{
            marginTop: '3rem'
        },
        // [theme.breakpoints.up('sm')]:{
        //     marginLeft: '240px'
        // },
    },
    fab:{
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: appColor2,
        '&:hover':{
            backgroundColor: appHover,
        }
    },
    tab:{
        marginLeft: '10rem',
        [theme.breakpoints.down('md')]:{
            marginLeft: '0rem',   
        }
    },
    send:{
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(12),
        backgroundColor: appColor2,
        '&:hover':{
            backgroundColor: appHover,
        },
        color: 'white',
        width: '3.5rem',
        height: '3.5rem'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


export default useStyles;