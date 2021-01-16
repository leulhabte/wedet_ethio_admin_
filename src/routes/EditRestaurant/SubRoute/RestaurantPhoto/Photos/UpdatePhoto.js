import React from 'react';
import {Container, Avatar, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import imgs from '../../../../../images';

const UpdatePhoto = ({photo})=>{
    const img = imgs();
    return(
        <Container style={{height: 'calc(100vh - 8rem)', position: 'relative'}}>
            <GridList cols={1} cellHeight={600} style={{position: 'absolute', top: 10, left: 0, width: '100%', height: '40rem !important'}}>
                <GridListTile>
                    <img src={`http://10.2.81.162${photo}`}/>
                    <GridListTileBar
                        title = "Profile Picture"
                        subtitle = "uploaded by wedet-ethio"
                    />
                </GridListTile>
            </GridList>
        </Container>
    );
}

export default UpdatePhoto;