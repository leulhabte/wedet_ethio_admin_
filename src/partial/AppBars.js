import React from 'react';
import { AppBar, Toolbar, Typography, Box, Hidden, Drawer, List, ListItem, ListItemText, IconButton, Tooltip } from '@material-ui/core';
import useStyles from './Styling';
import { Menu, ExitToApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const AppBars = ({ role, handleLogout }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const _handleOpen = () => {
        setOpen(!open);
    }
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        _handleOpen();
    };

    const menuItem_non = (
        <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
    >
        <ListItemText>
            <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                <Typography className={classes.linkNav}>Choose Business</Typography>
            </Box>
        </ListItemText>
    </ListItem>
    );

    const menuItem = (
        <List>
            <Link to="/dash" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    color='white'
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Dashboard</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/add" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Add restaurant</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/edit" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Edit Restaurant</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/review" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Review</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/posts" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Posts</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
        </List>
    );

    // ----------Hospital-------------------------
    // -------------------------------------------
    const menuItem_hospital = (
        <List>
            <Link to="/dash_hospital" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    color='white'
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Dashboard</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/add_hospital" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Add Hospital</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/edit_hospital" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Edit Hospital</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/review_hospital" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Review</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/posts" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Posts</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
        </List>
    );

    // ----------Hotel-------------------------
    // -------------------------------------------
    const menuItem_hotel = (
        <List>
            <Link to="/dash_hotel" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    color='white'
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Dashboard</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/add_hotel" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Add Hotel</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/edit_hotel" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Edit Hotel</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/review_hotel" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Review</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/posts" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Posts</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
        </List>
    );

    // ----------Garage-------------------------
    // -------------------------------------------
    const menuItem_garage = (
        <List>
            <Link to="/dash_garage" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    color='white'
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Dashboard</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/add_garage" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Add Garage</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/edit_garage" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Edit Garage</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/review_garage" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Review</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/posts" className={classes.listText}>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText>
                        <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                            <Typography className={classes.linkNav}>Posts</Typography>
                        </Box>
                    </ListItemText>
                </ListItem>
            </Link>
        </List>
    );

    const menuHeader = (
        <div>
            <Box display='flex' className={classes.navHead} justifyContent='center' p={2}>
                <Typography variant='h6' style={{ fontWeight: 'bold' }}>Wedet-Ethio</Typography>
            </Box>
        </div>
    );
    return (
        <div style={{ background: '#ECF0F3' }}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={_handleOpen}><Menu className={classes.menu} /></IconButton>
                    <Box width={20} />
                    <Box display="flex" justifyContent="flex-start" width="30%" flexGrow={1}>
                        <Typography className={classes.appTitle}>Wedet Ethio</Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" width="70%" flexGrow={1}><IconButton onClick={handleLogout}><Tooltip title="Logout"><ExitToApp style={{color: 'white'}}/></Tooltip></IconButton></Box>
                </Toolbar>
            </AppBar>
            {role && <nav className={classes.mainDrawer}>
            <Hidden mdUp>
                    <Drawer
                        open={open}
                        onClose={_handleOpen}
                        classes={{ paper: classes.drawer }}
                        variant="temporary"
                    >
                        {menuHeader}
                        <Box height={70} />
                        {role === 'restaurant' ? menuItem : role === 'hospital' ? menuItem_hospital : role === 'hotel' ? menuItem_hotel: role === 'garage' ? menuItem_garage: menuItem_non}
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <Drawer
                        open
                        classes={{ paper: classes.drawer }}
                        variant="permanent"
                    >
                        {menuHeader}
                        <Box height={70} />
                        {role === 'restaurant' ? menuItem : role === 'hospital' ? menuItem_hospital : role === 'hotel' ? menuItem_hotel: role === 'garage' ? menuItem_garage: menuItem_non}
                    </Drawer>
                </Hidden>
            </nav>}
        </div>
    );
}

export default AppBars;