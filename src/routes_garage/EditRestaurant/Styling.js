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
        alignItems: 'center',
    },
    reviewButton:{
        background: 'linear-gradient(45deg, #6718CD, #3B59ED)',
        color: 'white',
        width: '100%',
        height: '16rem',
        borderRadius: '1rem',
        padding: '1rem'
    },
    dashButtonC1:{
        background: 'linear-gradient(45deg, #FC4B15, #F89D2E)',
        color: 'white',
        width: '100%',
        height: '16rem',
        borderRadius: '1rem',
        padding: '1rem'
    },
    dashButtonC2:{
        background: 'linear-gradient(45deg, #02B095, #6AC156)',
        color: 'white',
        width: '100%',
        height: '16rem',
        borderRadius: '1rem',
        padding: '1rem'
    },
    dashButtonC3:{
        background: 'linear-gradient(45deg, #F01073, #FB511D)',
        color: 'white',
        width: '100%',
        height: '16rem',
        borderRadius: '1rem',
        padding: '1rem'
    },
    headTxt:{
        color: 'white',
        fontWeight: 'bold'
    },
    tableHead:{
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
        width: '30%'
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