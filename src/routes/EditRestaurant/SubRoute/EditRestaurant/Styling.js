import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    namePaper:{
        width: '30%'
    },
    inputBase:{
        width: '100%'
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
    }
}));

export default useStyles;