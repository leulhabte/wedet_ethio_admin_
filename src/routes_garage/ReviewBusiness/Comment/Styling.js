import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(255, 111, 0)';
const shadowColor = 'rgb(221, 221, 221)';
const appHover = 'rgb(255, 86,0)';
const appFade = 'rgb(204, 204, 204)';
const drawerWidth = 240;
const appColor2 = 'rgb(255, 140, 0)';

const useStyles = makeStyles((theme)=>({

    // Review Comment Section
    reviewButton:{
        backgroundColor: appColor2,
        color: 'white',
        '&:hover': {
            backgroundColor: appHover
        },
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: '85%',
        borderRadius: '1rem'
    },
    reviewIcons:{
        fontSize: '2.5rem'
    },

    commonGrid:{
        display: "flex", 
        justifyContent: "center"
    },


    //Manage Menu Section
    menuButton:{
        backgroundColor: appColor2,
        color: 'white',
        '&:hover': {
            backgroundColor: appHover
        },
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        width: '80%',
        borderRadius: '1rem'
    },
}));


export default useStyles;