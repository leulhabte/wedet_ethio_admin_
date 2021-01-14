import React from 'react';
import { Container, Grid, InputBase, Paper, Typography, Checkbox, Button, Box, Card, FormGroup, FormControlLabel } from '@material-ui/core';
import useStyles from '../config/Styling';
import { LibraryAdd } from '@material-ui/icons';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import Cookies from 'js-cookie';

const NewRestaurant = () => {
    const classes = useStyles();
    const [pinged, setPinged] = React.useState(false);
    // Fields
    const [name, setName] = React.useState("");
    const [des, setDescription] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone, setPhoneNum] = React.useState({ line1: "", line2: "" });
    const [about, setAboutUs] = React.useState("");

    // Working Hours
    const [mon, setMon] = React.useState({ start: "", end: "" });
    const [tues, setTues] = React.useState({ start: "", end: "" });
    const [wen, setWen] = React.useState({ start: "", end: "" });
    const [thu, setThu] = React.useState({ start: "", end: "" });
    const [fri, setFri] = React.useState({ start: "", end: "" });
    const [sat, setSat] = React.useState({ start: "", end: "" });
    const [sun, setSun] = React.useState({ start: "", end: "" });
    // 
    const [category, setCategory] = React.useState([]);
    const [service, setServices] = React.useState([]);
    const [type, setType] = React.useState([]);
    // check box states
    const [satecat, setStateCat] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
    });
    const [sateservice, setStateSer] = React.useState({
        checkedE: false,
        checkedF: false,
        checkedG: false,
    });
    const [satetype, setStateType] = React.useState({
        checkedH: false,
        checkedI: false,
    });
    //
    const [zoomlvl, setZoom] = React.useState(15);
    const [latlong, setPos] = React.useState({ lat: 8.9806, lng: 38.7578 });
    const [file, setfile] = React.useState(null);
    const [cat, setCat] = React.useState({one: "", two: "", three: "", four: ""});

    const handleSubmit = async (event) => {
        event.preventDefault();

        const lists = {
            a: satecat.checkedA === true? 'FAST_FOOD' : "",
            b: satecat.checkedB === true? 'BREAKFAST' : "",
            c: satecat.checkedC === true? 'BRENCH' : "",
            d: satecat.checkedD === true? 'DINNER' : "",
        }

        const lists2 = {
            e: sateservice.checkedE === true? 'GOOD_FOR_KIDS' : "",
            f: sateservice.checkedF === true? 'TAKES_RESERVATION' : "",
        }

        const lists3 = {
            g: sateservice.checkedG === true? 'WI-FI' : "",
            h: satetype.checkedH === true? 'FAMILY' : "",
            i: satetype.checkedI === true? 'SPORT' : "",
        }
        
        var c = [];
        var c2 = [];
        var c3 = [];
        for(var x in lists){
            if(lists[x] !== ""){
               c.push(lists[x]) 
            }
            
        }

        for(var x in lists2){
            if(lists2[x] !== ""){
                c2.push(lists2[x])
            }
        }
        for(var x in lists3){
            if(lists3[x] !== ""){
                c3.push(lists3[x])
            }
        }

        console.log(c);
        // Catagories
        if (satecat.checkedA === true) {
            var ser = category;
            ser.push('FAST_FOOD');
            setCategory(ser)
            setCat({...cat, one: 'FAST_FOOD'})
        }
        if (satecat.checkedB === true) {
            var ser = category;
            ser.push('BREAKFAST');
            setCategory(ser)
            setCat({...cat, two: 'BREAKFAST'})
        }
        if (satecat.checkedC === true) {
            var ser = category;
            ser.push('FRENCH');
            setCategory(ser)
            setCat({...cat, three: 'FRENCH'})
        }
        if (satecat.checkedD === true) {
            var ser = category;
            ser.push('DINNER');
            setCategory(ser);
            setCat({...cat, four: 'DINNER'})
        }

        // Service Categories
        if (sateservice.checkedE === true) {
            var ser = service;
            ser.push('GOOD_FOR_KIDS');
            setServices(ser)
        }
        if (sateservice.checkedF === true) {
            var ser = service;
            ser.push('TAKES_RESERVATION');
            setServices(ser)
        }
        if (sateservice.checkedG === true) {
            var ser = service;
            ser.push('WI-FI');
            setServices(ser)
        }

        // Type Categories
        if (satetype.checkedH === true) {
            var ser = type;
            ser.push('FAMILY');
            setType(ser)
        }
        if (satetype.checkedI === true) {
            var ser = type;
            ser.push('SPORT');
            setType(ser)
        }

        const new_restaurnat = {
            business: {
                del: "me",
                name: name,
                description: des,
                division: "RESTAURANT",
                address: address,
                phoneNumber: [phone.line1, phone.line2],
                type: type,
                aboutUs: about,
                workingHour: {
                     mon: mon,
                     tue: tues,
                     wen: wen,
                     thu: thu,
                     fri: fri,
                     sat: sat,
                     sun: sun
                },
                   services: service,
                   location: { "type": "Point", "coordinates": [latlong.lat, latlong.lng] },
                   categories: category
            },
            //    logoPhoto: file 
        }

        var form = new FormData();
        
        var v = ['\"FAST_FOOD\"', '\"BREAKFAST\"', '\"FRENCH\"'];
        var x = v.toString();
        console.log(`[${x}]`);
        form.append("business", `{
            \"del\": \"me\",
            \"name\": \"Some new name goes here bro\",
            \"description\": \"Best random restaurant with dfkdjfdjfkd\",
            \"division\": \"RESTAURANT\",
            \"address\": \"1465 Sunfield Hill\",
            \"phoneNumber\": [\"+251 90 200 9596\", \"+251 91 200 4403\"],
            \"type\": [\"FAMILY\",  \"SPORT\"],
            \"aboutUs\": \"\",
            \"workingHour\": {
              \"mon\": { \"start\": 7, \"end\": 13 },
              \"tue\": { \"start\": 7, \"end\": 15 },
              \"wen\": { \"start\": 6, \"end\": 23 },
              \"thu\": { \"start\": 7, \"end\": 18 },
              \"fri\": { \"start\": 7, \"end\": 16 },
              \"sat\": { \"start\": 9, \"end\": 17 },
              \"sun\": { \"start\": 6, \"end\": 14 }
            },
            \"services\": [\"GOOD_FOR_KIDS\", \"TAKES_RESERVATION\", \"WI_FI\"],
            \"location\": { \"type\": \"Point\", \"coordinates\": [38.7497422, 9.1715608] },
            \"categories\": ${v}
          }`
          );

        // Post new Restaurant
        try {
            const res = await axios.post('admin/register/business',
            form,
                {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWhfbGV1bEBnbWFpbC5jb20iLCJpZCI6IjVmMTYxODRjMTBlMDAyNTNmYzZlZGYxNCIsImV4cCI6MTkyNTgyNjgxNiwiaWF0IjoxNjEwNDY2ODE2fQ.hbHwveDeXYq_J40Y6fX49lvMCz2VOZ2WhpJeUvAvSMCyxDjdmvaA9dnnnoU9eBry89Ipt5zeWJ8UMBOgzkugxA`,
                        // 'Content-Type': 'multipart/form-data',
                    },
                    "mimeType": "multipart/form-data",
                });
            console.log(res.data);    
        } catch (e) {
            alert(e.message);
        }

    }

    const handleChange = (event) => {
        setStateCat({ ...satecat, [event.target.name]: event.target.checked });
    };
    const handleChangeServie = (event) => {
        setStateSer({ ...sateservice, [event.target.name]: event.target.checked });
    };
    const handleChangeType = (event) => {
        setStateType({ ...satetype, [event.target.name]: event.target.checked });
    };
    const handleMap = (e) => {
        setPos({
            lat: e.latlng.lat,
            lng: e.latlng.lng
        });
        setPinged(true);

    }

    const handleZoom = (e) => {
        setZoom(e.target._zoom);
    }

    const customIcon = new Icon({
        iconUrl: '../ping.svg',
        iconSize: [25, 25]
    })

    const marker = pinged ? (
        <Marker position={[latlong.lat, latlong.lng]}>
            <Popup>You Clicked Here</Popup>
        </Marker>
    ) : null;

    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="start" className={classes.mainHeader}>
                <Typography variant="h6" className={classes.mainHeaderTitle}>New Restaurant</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={7}>
                    <Grid item lg={6} xs={10}>
                        <Box display="flex" flexDirection="column" className={classes.mainHeader}>

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Restaurant name</Typography>
                                <Box width={10} />
                                <Paper className={classes.inputFieldFill}>
                                    <InputBase style={{ width: '100%' }} onChange={(e) => setName(e.target.value)} />
                                </Paper>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Description</Typography>
                                <Box width={10} />
                                <Paper className={classes.inputFieldFill}>
                                    <InputBase style={{ width: '100%', height: '7rem' }} rows="3" multiline onChange={(e) => setDescription(e.target.value)} />
                                </Paper>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Address</Typography>
                                <Box width={10} />
                                <Paper className={classes.inputFieldFill}>
                                    <InputBase style={{ width: '100%' }} onChange={(e) => setAddress(e.target.value)} />
                                </Paper>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Phone number</Typography>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="start" style={{ width: '75%' }}>
                                    <Paper className={classes.inputFieldFill2}>
                                        <InputBase placeholder="Line 1" style={{ width: '100%' }} required onChange={(e) => { setPhoneNum({ ...phone, line1: e.target.value }) }} />
                                    </Paper>
                                    <Box width={10} />
                                    <Paper className={classes.inputFieldFill2}>
                                        <InputBase placeholder="Line 2" style={{ width: '100%' }} onChange={(e) => { setPhoneNum({ ...phone, line2: e.target.value }) }} />
                                    </Paper>
                                </Box>
                            </Box>

                            <Box height={20} />

                            {/* ----------------------------------------------------------------------------------------------- */}

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Working Hours</Typography>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Monday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setMon({ ...mon, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setMon({ ...mon, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Tuesday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setTues({ ...tues, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setTues({ ...tues, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Wednsday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setWen({ ...wen, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setWen({ ...wen, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Thursday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setThu({ ...thu, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setThu({ ...thu, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Friday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setFri({ ...fri, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setFri({ ...fri, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Saturday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setSat({ ...sat, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setSat({ ...sat, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="Space-between" style={{ width: '75%' }} >
                                    <Box justifySelf="flex-start" justifyContent="start"><Typography className={classes.inputLable}>Sunday</Typography></Box>
                                    <Box width={30} />
                                    <Box display="flex" flexDirection="row" flexGrow={1} justifyContent="flex-end">
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="From" style={{ width: '100%' }} onChange={(e) => setSun({ ...sun, start: e.target.value })} />
                                        </Paper>
                                        <Box width={10} />
                                        <Paper className={classes.inputFieldFill3}>
                                            <InputBase placeholder="To" style={{ width: '100%' }} onChange={(e) => setSun({ ...sun, end: e.target.value })} />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>
                            {/* ----------------------------------------------------------------------------------------------- */}
                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>About us</Typography>
                                <Box width={10} />
                                <Paper className={classes.inputFieldFill}>
                                    <InputBase style={{ width: '100%', height: '7rem' }} rows="3" multiline onChange={(e) => setAboutUs(e.target.value)} />
                                </Paper>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.inputFlex}>
                                <Typography className={classes.inputLable}>Map Coordinate</Typography>
                                <Box width={10} />
                                <Box display="flex" flexDirection="row" justifyContent="start" style={{ width: '75%' }}>
                                    <Paper className={classes.inputFieldFill2}>
                                        <InputBase placeholder="lat" value={latlong.lat} style={{ width: '100%' }} />
                                    </Paper>
                                    <Box width={10} />
                                    <Paper className={classes.inputFieldFill2}>
                                        <InputBase placeholder="long" value={latlong.lng} style={{ width: '100%' }} />
                                    </Paper>
                                </Box>
                            </Box>
                        </Box>
                        <Box height={20} />
                        <Box style={{ width: '100%', height: '15rem', borderRadius: '30rem' }} display="flex" justifyContent="flex-end">
                            <Card style={{ width: '75%', borderRadius: '1rem' }}>
                                <Map center={[latlong.lat, latlong.lng]} zoom={zoomlvl} onzoomend={handleZoom} onclick={handleMap} icon={customIcon}>
                                    <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {marker}
                                </Map>
                            </Card>
                        </Box>
                        <Box height={20} />
                    </Grid>
                    <Grid item md={6} xs={10}>
                        <Box display="flex" flexDirection="column" className={classes.mainHeader}>
                            <Box display="flex" justifyContent="sart">
                                <Typography style={{ fontWeight: "bold" }}>Category</Typography>
                            </Box>
                            <Box height={20} />
                            <Box display="flex" flexDirection="row">
                                <Box>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satecat.checkedA}
                                                    onChange={handleChange}
                                                    name="checkedA"
                                                    label="Fast Food"
                                                    color="primary"
                                                    value="Fast Food"
                                                />
                                            }
                                            label="Fast Food"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satecat.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    label="BREAKFAST"
                                                    color="primary"
                                                    value="BREAKFAST"
                                                />
                                            }
                                            label="BREAKFAST"
                                        />
                                    </FormGroup>
                                </Box>
                                <Box>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satecat.checkedC}
                                                    onChange={handleChange}
                                                    name="checkedC"
                                                    label="FRENCH"
                                                    color="primary"
                                                    value="FRENCH"
                                                />
                                            }
                                            label="FRENCH"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satecat.checkedD}
                                                    onChange={handleChange}
                                                    name="checkedD"
                                                    label="DINNER"
                                                    color="primary"
                                                    value="DINNER"
                                                />
                                            }
                                            label="DINNER"
                                        />
                                    </FormGroup>
                                </Box>
                            </Box>
                            <Box height={20} />
                            <Box display="flex" justifyContent="sart">
                                <Typography style={{ fontWeight: "bold" }}>Facilities</Typography>
                            </Box>
                            <Box height={20} />
                            <Box display="flex" flexDirection="row">
                                <Box>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={sateservice.checkedE}
                                                    onChange={handleChangeServie}
                                                    name="checkedE"
                                                    label="GOOD_FOR_KIDS"
                                                    color="primary"
                                                    value="GOOD_FOR_KIDS"
                                                />
                                            }
                                            label="GOOD_FOR_KIDS"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={sateservice.checkedF}
                                                    onChange={handleChangeServie}
                                                    name="checkedF"
                                                    label="TAKES_RESERVATION"
                                                    color="primary"
                                                    value="TAKES_RESERVATION"
                                                />
                                            }
                                            label="TAKES_RESERVATION"
                                        />
                                    </FormGroup>
                                </Box>
                                <Box>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={sateservice.checkedG}
                                                    onChange={handleChangeServie}
                                                    name="checkedG"
                                                    label="WI-FI"
                                                    color="primary"
                                                    value="WI-FI"
                                                />
                                            }
                                            label="WI-FI"
                                        />
                                    </FormGroup>
                                </Box>
                            </Box>

                            <Box height={20} />

                            <Box display="flex" justifyContent="sart">
                                <Typography style={{ fontWeight: "bold" }}>Type</Typography>
                            </Box>
                            <Box height={10} />
                            <Box display="flex" flexDirection="row">
                                <Box>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satetype.checkedH}
                                                    onChange={handleChangeType}
                                                    name="checkedH"
                                                    label="FAMILY"
                                                    color="primary"
                                                    value="FAMILY"
                                                />
                                            }
                                            label="FAMILY"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={satetype.checkedI}
                                                    onChange={handleChangeType}
                                                    name="checkedI"
                                                    label="SPORT"
                                                    color="primary"
                                                    value="SPORT"
                                                />
                                            }
                                            label="SPORT"
                                        />
                                    </FormGroup>
                                </Box>
                            </Box>

                            {/* Upload Logo  */}
                            <Box height={20} />
                            <Box display="flex" justifyContent="sart">
                                <Typography style={{ fontWeight: "bold" }}>Logo Image</Typography>
                            </Box>
                            <Box height={10} />
                            <Box className={classes.logoUpload}>
                                <Button type="button" className={classes.logoUploadIconHolder}>
                                    <LibraryAdd className={classes.logoUploadIcon} />
                                </Button>
                                <input type="file" className={classes.logoUploader} onChange={(e) => { console.log(setfile(e.target.files[0])) }} />
                            </Box>
                            <Box height={170} />
                            <Box display="flex" flexDirection="row">
                                <Button className={classes.submitButton} type="submit">Submit</Button>
                                <Box width={40} />
                                <Button className={classes.clearButton}>clear</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default NewRestaurant;