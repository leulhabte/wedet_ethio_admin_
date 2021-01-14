import React from 'react';
import {Container, GridList, GridListTile, makeStyles, GridListTileBar, Box} from '@material-ui/core';
import images from '../../../../../images';
import {Delete} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
    gridList: {
      width: '100%',
      height:  `calc(100vh - 8rem)`,
    },
  }));

const InteriorPhoto = ()=>{
    const classes = useStyles();
    const img = images();
    return(
            <Container maxWidth="xl" className={classes.root}>
                <Box paddingY={4}/>
                <GridList cellHeight={250} className={classes.gridList} cols={4}>
                    {
                        img.map((tile)=>(
                            <GridListTile key={tile.title} cols={1}>
                                <img src={tile.image}/>
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={tile.subTitle}
                                    actionIcon={<Delete style={{color: 'white', marginRight:'1rem'}}/>}
                                />
                            </GridListTile>
                        ))
                    }
                </GridList>
            </Container>
    );
}

export default InteriorPhoto;