import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    namePaper: {
        width: '30%'
    },
    inputBase: {
        width: '100%'
    },
    inputBase2: {
        width: '100%',
        height: '6rem'
    },
    btn: {
        backgroundColor: '#FF6F00',
        color: 'white',
        '&:hover': {
            backgroundColor: '#AA4A00'
        },
        width: '20%'
    },
    titles: {
        // fontWeight: 'bold',
        fontSize: '16',
        marginBottom: '0.3rem'
    },
    mainTitle: {
        fontWeight: '600',
        // paddingLeft: '10px'
    },
    paperPad: {
        padding: '10px'
    },
    inputPaper: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '40%'
    },
    inputPaper2: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '70%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '50%',
        height: '2rem'
    },
    imgContainer: {
        position: 'relative',
        backgroundColor: 'green',
        width: '50%',
        height: '20rem',
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
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default useStyles;