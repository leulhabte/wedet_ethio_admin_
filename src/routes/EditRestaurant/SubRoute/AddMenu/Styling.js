import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    namePaper:{
        width: '30%'
    },
    inputBase:{
        width: '100%'
    },
    inputBase2:{
        width: '100%',
        height: '6rem'
    },
    btn:{
        backgroundColor: '#FF6F00',
        color: 'white',
        '&:hover':{
            backgroundColor: '#AA4A00'
        },
        width: '20%'
    },
    titles:{
        // fontWeight: 'bold',
        fontSize: '16',
        marginBottom: '0.3rem'
    },
    mainTitle:{
        fontWeight: '600',
        // paddingLeft: '10px'
    },
    paperPad:{
        padding: '10px'
    },
    inputPaper:{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '40%'
    },
    inputPaper2:{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '70%'
    }
}));

export default useStyles;