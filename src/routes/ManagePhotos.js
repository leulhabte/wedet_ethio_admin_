import React from 'react';
import PropTypes from 'prop-types';
import {Container, AppBar, Tab, Tabs, Box, Typography, Fab, Zoom} from '@material-ui/core';
import UpdatePhoto from '../sub_routes/UpdatePhoto';
import InteriorPhoto from '../sub_routes/InteriorPhotos';
import {Add, Edit, KeyboardArrowUp} from '@material-ui/icons';
import useStyles from '../config/Styling';

const ManagePhotos = ()=>{
    const classes = useStyles();
    const fabs = [
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Edit />,
          label: 'Add',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Add />,
          label: 'Edit',
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <Add />,
          label: 'Expand',
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <Add />,
            label: 'Expand',
          },
      ];
    const [value, setValue] = React.useState(0);
    const _handleChange = (event, newValue)=>{
        setValue(newValue);
    }
    const allyProps = (index)=>{
        return {
            id: `uniqeTab_${index}`
        }
    }
    return(
        <div className={classes.manageRoot}>
            <AppBar position="fixed" className={classes.manageTab}>
                <Tabs value={value} onChange={_handleChange} centered variant="fullWidth">
                    <Tab label="Update Photo" {...allyProps(0)}/>
                    <Tab label = "Intrior photos" {...allyProps(1)}/>
                    <Tab label = "Exterior photos" {...allyProps(2)}/>
                    <Tab label = "Service photos" {...allyProps(3)}/>
                </Tabs>
            </AppBar>
        <TabPanels value={value} index={0}>
          <UpdatePhoto/>
        </TabPanels>
        <TabPanels value={value} index={1}>
          <InteriorPhoto/>
        </TabPanels>
        <TabPanels value={value} index={2}>
          <InteriorPhoto/>
        </TabPanels>
        <TabPanels value={value} index={3}>
          <InteriorPhoto/>
        </TabPanels>
        {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
        </div>
    );
}

const TabPanels = (props)=>{
    const {children, value, index, ...others} = props;
    return(
        <div
        hidden= {value !== index}
        id={ `uniqeTab_${index}`}
        {...others}
    >
        {value == index && (
            <Container maxWidth="xl" style={{padding: '0rem '}}>
                <Box marginTop={6}/>
                {children}
            </Container>
        )}
    </div>
    );
}

TabPanels.prototype ={
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired
}

export default ManagePhotos;