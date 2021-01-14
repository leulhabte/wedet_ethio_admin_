import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    namePaper:{
        width: '30%',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    inputBase:{
        width: '100%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    btn:{
        backgroundColor: '#FF6F00',
        color: 'white',
        '&:hover':{
            backgroundColor: '#AA4A00'
        }
    },
    titles:{
        fontWeight: 'bold',
        fontSize: '16',
        marginBottom: '0.6rem'
    },
    mainTitle:{
        fontWeight: 'bold',
    },
    paperPad:{
        padding: '10px'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
}));

export default useStyles;