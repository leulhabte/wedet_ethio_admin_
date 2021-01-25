import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(257, 103, 37)';
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
        margin: theme.spacing(0),
        // background: '#ECF0F3'   
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
        fontSize: '20px'
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
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },

    //Grid Stylings
    commonGrid:{
        display: "flex", 
        justifyContent: "center"
    },

    //Login Stylings
    loginContainer:{
        borderRadius: '20px',
        boxShadow: '5px 5px 30px '+ shadowColor
    },
    loginHeader:{
        color: appbarColor,
        fontWeight: 'bold',
        fontSize: '19px'
    },
    logInGrid:{
        display: "flex",
        justifyContent: "center"
    },
    inputHolder:{
        display: "flex",
        borderRadius: '50px',
        boxShadow: '5px 5px 10px'+shadowColor
    },
    inputField: {
        width: '75%',
        marginLeft: theme.spacing(2)
    },
    fieldIcon:{
        color: appbarColor,
        margin: theme.spacing(1),
        opacity: '0.7'
    },
    logInButton:{
        backgroundColor: appbarColor,
        color: 'white',
        borderRadius: '50px',
        width: '50%',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: appHover
        },
    },
    loginText1: {
        opacity: 0.4,
        fontSize: '14px',
        marginLeft: theme.spacing(1)
    },
    loginText2: {
        opacity: 0.4,
        fontSize: '14px',
        alignSelf: 'center'
    },

    //Menu Stylings
    menuMainTitle:{
        padding: theme.spacing(7)
    },
    menuTitleColor:{
        color: 'grey',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
            fontSize: '24px !important'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '20px !important'
        },
    },
    menuGrid:{
        display: "flex",
        justifyContent: "center",
    },
    mainMenu:{
        backgroundColor: appbarColor,
        borderRadius: '20px',
        width: '100%',
        '&:hover':{
            backgroundColor: appHover
        }
    },
    menuTitle:{
        color: 'white',
        alignSelf: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        fontWeight: 'bold'
    },
    menuIcon:{
        color: 'white',
        alignSelf: 'center',
        fontSize: '6rem',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(1)
    },

    //New Restaurnat Page
    mainHeader:{
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        
    },
    mainHeaderTitle:{
        fontWeight: 'bold'
    },
    inputFieldFill:{
        border: '1px solid '+shadowColor,
        borderRadius: '10px',
        width: '70%',   
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            marginBottom: theme.spacing(2)
        }
    },
    inputLable:{
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]:{
            alignSelf: 'start',
            paddingBottom: theme.spacing(2)
        }
    },
    inputFieldFill2:{
        border: '1px solid '+shadowColor,
        borderRadius: '10px',
        width: '30%',   
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            width: '50%',
            marginBottom: theme.spacing(2)
        }
    },
    inputFieldFill3:{
        border: '1px solid '+shadowColor,
        borderRadius: '10px',
        width: '35%',   
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            width: '50%',
            marginBottom: theme.spacing(2)
        }
    },
    inputFlex:{
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'start !important',
            alignItems: 'start'
        }
    },

    //Logo Uploading image
    logoUpload:{
        position: 'relative',
        width: '20%',
        height: '5rem',
        borderRadius: '10px',
        border: 'solid 2px '+shadowColor
    },
    logoUploadIconHolder:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0'
    },
    logoUploadIcon:{
        position: 'absolute',
        width: '70%',
        height: '70%',
        top: '15%',
        left: '15%',
        color: appFade
    },
    logoUploader:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        opacity: 0
    },
    submitButton:{
        backgroundColor: appbarColor,
        color: 'white',
        width: '30%',
        borderRadius:'0.5rem',
        '&:hover':{
            backgroundColor: appHover
        }
    },

    clearButton:{
        backgroundColor: 'white',
        color: 'black',
        width: '30%',
        borderRadius:'0.5rem',
        border: 'solid 1px '+shadowColor,
        boxShadow: '5px 5px 10px '+shadowColor
    },

    // Review Comment Section
    reviewButton:{
        backgroundColor: appColor2,
        color: 'white',
        '&:hover': {
            backgroundColor: appHover
        },
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: '80%',
        borderRadius: '1rem'
    },
    reviewIcons:{
        fontSize: '2.5rem'
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

    //Editmenu Section
    editMenuHolder:{
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
            justifyContent: 'start'
        }
    },
    editNameFieldHolder:{
        width: '80%'
    },
    editNameFieldHolder:{
        width: '70%',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    editNameField:{
        width: '100%',
    },
    editNameFieldHolders1:{
        width: '40%',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    editMultiField:{
        width: '74%',
    },
    editMenuSubmitButton:{
        backgroundColor: appbarColor,
        color: 'white',
        width: '30%',
        borderRadius:'0.5rem',
        '&:hover':{
            backgroundColor: appHover
        },
        [theme.breakpoints.down('md')]:{
            width: '100%',
            marginBottom: '1rem'   
        }
    },

    editMenuClearButton:{
        backgroundColor: 'white',
        color: 'black',
        width: '30%',
        borderRadius:'0.5rem',
        border: 'solid 1px '+shadowColor,
        boxShadow: '5px 5px 10px '+shadowColor,
        [theme.breakpoints.down('md')]:{
            width: '100%',  
            marginBottom: '1rem' 
        }
    },

    editMenuLogoUpload:{
        position: 'relative',
        width: '20%',
        height: '5rem',
        borderRadius: '10px',
        border: 'solid 2px '+shadowColor,
        [theme.breakpoints.down('md')]:{
            width: '50%',
        }
    },

    //AddMenu Section
    addMenuHeaderText:{
        fontWeight: 'bold'
    },
    addMenuText:{
        color: appbarColor,
        fontWeight: 'bold'
    },

    //ManagePhoto Section
    manageRoot: {
        position: 'relative',
    },
    manageTab:{
        backgroundColor: appbarColor,
        marginTop: '4rem',
        [theme.breakpoints.down('md')]:{
            marginTop: '3rem'
        }
    },
    fab:{
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: appColor2,
        '&:hover':{
            backgroundColor: appHover,
        }
    }
}));


export default useStyles;