import {makeStyles} from '@material-ui/core';

const appbarColor = 'rgb(255, 111, 0)';
const shadowColor = 'rgb(221, 221, 221)';
const appHover = 'rgb(255, 86,0)';
const appFade = 'rgb(204, 204, 204)';
const drawerWidth = 240;
const appColor2 = 'rgb(255, 140, 0)';

const useStyles = makeStyles((theme)=>({
    mainGrid:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headTxt:{
        color: 'white',
        fontWeight: 'bold'
    },
    tableHead_2:{
        fontWeight: '700',
        backgroundColor: '#ECF0F3'
    },
    tableTitle:{
        fontWeight: 'bold'
    },
    paper:{
        borderRadius: '1rem'
    },
    btn:{
        backgroundColor: '#FF6F00',
        color: 'white',
        '&:hover':{
            backgroundColor: '#AA4A00'
        },
        width: '60%',
        height: '2rem'
    },
    namePaper:{
        width: '30%',
        paddingX: '1rem'
    },
    inputBase:{
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    title:{
        fontWeight: 'bold',
        fontSize: '16',
        marginBottom: '0.6rem'
    },
    btn2:{
        backgroundColor: '#FF6F00',
        color: 'white',
        '&:hover':{
            backgroundColor: '#AA4A00'
        },
        width: '20%',
        height: '2rem'
    },
}));


export default useStyles;