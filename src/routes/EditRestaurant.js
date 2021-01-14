import React from 'react';
import {Container, Grid, TextField, IconButton, InputBase, Paper, Typography, Checkbox, Button, Box, Card, FormGroup, FormControlLabel} from '@material-ui/core';
import useStyles from '../config/Styling';
import {LibraryAdd} from '@material-ui/icons';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from 'leaflet';
 
const EditRestaurant = ()=>{
    const classes = useStyles();
    const [pinged, setPinged] = React.useState(false);
    const [zoomlvl, setZoom] = React.useState(15);
    const [latlong, setPos] = React.useState({lat: 8.9806, lng: 38.7578});
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };      
    const handleMap = (e)=>{
        setPos({
            lat: e.latlng.lat,
            lng: e.latlng.lng
        });
        setPinged(true);

    }

    const handleZoom = (e)=>{
        setZoom(e.target._zoom);
    }

    const customIcon = new Icon({
        iconUrl: '../ping.svg',
        iconSize:[25, 25]
    })

    const marker = pinged ? (
        <Marker position={[latlong.lat, latlong.lng]}>
            <Popup>You Clicked Here</Popup>
        </Marker>
    ): null;

    return(
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="start" className={classes.mainHeader}>
                        {/* <Typography variant="h6" className={classes.mainHeaderTitle}>New Restaurant</Typography> */}
            </Box>
            <Grid container spacing={7}>
                <Grid item lg={6} xs={10}>
                    <Box display="flex" flexDirection="column"  className={classes.mainHeader}>

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Restaurant name</Typography>
                            <Box width={10}/>
                            <Paper  className={classes.inputFieldFill}>
                                <InputBase style={{width: '100%'}}/>
                            </Paper>
                        </Box>

                        <Box height={20}/>
                        
                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Address</Typography>
                            <Box width={10}/>
                            <Paper  className={classes.inputFieldFill}>
                                <InputBase style={{width: '100%'}}/>
                            </Paper>
                        </Box>

                        <Box height={20}/>

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Phone number</Typography>
                            <Box width={10}/>
                            <Paper  className={classes.inputFieldFill}>
                                <InputBase style={{width: '100%'}}/>
                            </Paper>
                        </Box>

                        <Box height={20}/>

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Working Hours</Typography>
                            <Box width={10}/>
                            <Box display="flex" flexDirection="row" justifyContent="start" style={{width: '75%'}}>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase placeholder="From" style={{width: '100%'}}/>
                                </Paper>
                                <Box width={10}/>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase placeholder="To" style={{width: '100%'}}/>
                                </Paper>
                            </Box>
                        </Box>
                                                
                        <Box height={20}/>

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Price range</Typography>
                            <Box width={10}/>
                            <Box display="flex" flexDirection="row" justifyContent="start" style={{width: '75%'}}>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase style={{width: '100%'}}/>
                                </Paper>
                                <Box width={10}/>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase style={{width: '100%'}}/>
                                </Paper>
                            </Box>
                        </Box>
                                                
                        <Box height={20}/>

                        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                            <Typography className={classes.inputLable}>Map Coordinate</Typography>
                            <Box width={10}/>
                            <Box display="flex" flexDirection="row" justifyContent="start" style={{width: '75%'}}>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase placeholder="lat" value={latlong.lat} style={{width: '100%'}}/>
                                </Paper>
                                <Box width={10}/>
                                <Paper  className={classes.inputFieldFill2}>
                                    <InputBase placeholder="long" value={latlong.lng} style={{width: '100%'}}/>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                    <Box height={20}/>
                    <Box style={{width: '100%', height: '15rem', borderRadius: '30rem'}} display="flex" justifyContent="flex-end">
                        <Card  style={{width: '75%', borderRadius: '1rem'}}>
                            <Map center={[latlong.lat, latlong.lng]} zoom={zoomlvl} onzoomend={handleZoom} onclick={handleMap} icon={customIcon}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {marker}
                            </Map>
                        </Card>
                    </Box>
                    <Box height={20}/>
                </Grid>
                <Grid item md={6} xs={10}>
                <Box display="flex" flexDirection="column"   className={classes.mainHeader}>
                    <Box display="flex" justifyContent="sart">
                        <Typography style={{fontWeight: "bold"}}>Category</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                    </Box>
                    <Box height={20}/>
                    <Box display="flex" justifyContent="sart">
                        <Typography style={{fontWeight: "bold"}}>Facilities</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            label="Secondary"
                                            color= "primary"
                                        />
                                        }
                                    label="Secondary"
                                />
                            </FormGroup>
                        </Box>
                    </Box>
                    {/* Upload Logo  */}
                    <Box height={20}/>
                    <Box display="flex" justifyContent="sart">
                        <Typography style={{fontWeight: "bold"}}>Logo Image</Typography>
                    </Box>
                    <Box height={10}/>
                    <Box className={classes.logoUpload}>
                        <Button type="button"  className={classes.logoUploadIconHolder}>
                            <LibraryAdd  className={classes.logoUploadIcon}/>
                        </Button>
                        <input type="file"   className={classes.logoUploader}/>
                    </Box>
                    <Box height={170}/>
                    <Box display="flex" flexDirection="row">
                        <Button className={classes.submitButton}>Submit</Button>
                        {/* <Box width={40}/>
                        <Button className={classes.clearButton}>clear</Button> */}
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EditRestaurant;