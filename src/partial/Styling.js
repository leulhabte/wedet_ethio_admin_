import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(255, 111, 0)';
const shadowColor = 'rgb(221, 221, 221)';
const appHover = 'rgb(255, 86,0)';
const appFade = 'rgb(204, 204, 204)';
const drawerWidth = 240;
const appColor2 = 'rgb(255, 140, 0)';

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex'
    },
    toolBar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        padding: theme.spacing(0),
        margin: theme.spacing(0)
    },
    linkNav:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15px'
    },
    listText:{
        color: 'white',
        textDecoration: 'none'
    },
    appTitle:{
        fontWeight: 'bold',
        fontSize: '24px'
    },
    appBar:{
        backgroundColor: appbarColor
    },
    drawer:{
        width: drawerWidth,
        backgroundColor: appbarColor,
        color: 'white'
    },
    navHead:{
        backgroundColor: appColor2,
        color: 'white'
    },
    menu:{
        color: 'white'
    },
    mainDrawer: {
        [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },

    //Grid Stylings
    commonGrid:{
        display: "flex", 
        justifyContent: "center"
    },
}));


export default useStyles;