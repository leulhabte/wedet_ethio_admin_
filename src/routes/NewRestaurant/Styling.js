import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    namePaper: {
        width: '30%',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    inputBase: {
        width: '100%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    btn: {
        backgroundColor: '#FF6F00',
        height: '3rem',
        color: 'white',
        '&:hover': {
            backgroundColor: '#AA4A00'
        }
    },
    titles: {
        fontWeight: 'bold',
        fontSize: '16',
        marginBottom: '0.6rem'
    },
    mainTitle: {
        fontWeight: 'bold',
    },
    paperPad: {
        padding: '10px'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    imgContainer: {
        position: 'relative',
        backgroundColor: 'green',
        width: '100%',
        height: '25rem',
        backgroundColor: 'green',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '25rem',
        }
    },
    img: {
        position: 'absolute',
        backgroundSize: 'cover',
        top: '0',
        left: '0',
        backgroundColor: 'purple',
        width: '100%',
        height: '100%'
    },
    imgBar: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        opacity: '0.5',
        backgroundColor: 'black',
        height: '20%',
        width: '100%'
    },
    imgBarComp: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '20%',
        width: '100%'
    },
    imgText: {
        color: 'white',
        marginLeft: '10px'
    },
    imgBtn: {
        color: '#FF6F00',
        marginRight: '10px'
    }
}));

export default useStyles;