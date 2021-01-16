import React, { useState } from 'react';
import useStyles from './Styling';
import Checkboxes from './CheckBox';
import Facualities from './Facialities';
import FormSection from './FormSection';
import MapContainer from './MapContainer';
import PhotoPicker from './Photo';
import { Box, Paper, InputBase, FormControlLabel, Typography, Checkbox, Button, Grid, FormGroup } from '@material-ui/core';

const NewForm = ({ stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateZ, handleChangeA, handleChangeB, handleChangeC, handleChangeD,
    handleChangeE, handleChangeF, handleChangeG, handleChangeZ, name, description, address, phone, about,
    setName, setDescription, setAddress, setPhoneNum, setAboutUs,
    setMon, setTues, setWen, setThu, setFri, setSat, setSun,
    mon, tues, wen, thu, fri, sat, sun,
    zoomlvl, pinged, latlong, handleZoom, handleMap,
    imgPicker, image, setImage, _handleImg
}) => {
    const classes = useStyles();

    return (
        <div>
            <Box display="flex" flexDirection="column" p={2} width="100%">

                {/* Name field */}
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Name</Typography>
                    <Paper className={classes.namePaper}>
                        <InputBase className={classes.inputBase} value={name} onChange={(e) => { setName(e.target.value) }} required/>
                    </Paper>
                </Box>

                {/* Decription field */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Description</Typography>
                    <Paper className={classes.namePaper} style={{ height: '4rem' }}>
                        <InputBase className={classes.inputBase} value={description} multiline rows={3} style={{ height: '4rem' }} onChange={(e) => { setDescription(e.target.value) }} required/>
                    </Paper>
                </Box>

                {/* Categories */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Category</Typography>
                    <Paper className={classes.paperPad}>
                        <Checkboxes
                            stateA={stateA} stateB={stateB} stateC={stateC} stateD={stateD} stateE={stateE} stateF={stateF} stateG={stateG}
                            handleChangeA={handleChangeA} handleChangeB={handleChangeB} handleChangeC={handleChangeC} handleChangeD={handleChangeD}
                            handleChangeE={handleChangeE} handleChangeF={handleChangeF} handleChangeG={handleChangeG} address={address} phone={phone}
                        />
                    </Paper>
                </Box>

                {/* Facualities */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Facualities</Typography>
                    <Paper className={classes.paperPad}>
                        <Facualities
                            stateZ={stateZ} handleChangeZ={handleChangeZ}
                        />
                    </Paper>
                </Box>

                {/* Section 2 */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={10}>
                            <FormSection
                                setDescription={setDescription} setAddress={setAddress} setPhoneNum={setPhoneNum} setAboutUs={setAboutUs} phone={phone}
                                setMon={setMon} setTues={setTues} setWen={setWen} setThu={setThu} setFri={setFri} setSat={setSat} setSun={setSun}
                                mon={mon} tues={tues} wen={wen} thu={thu} fri={fri} sat={sat} sun={sun} latlong={latlong} 

                            />
                        </Grid>
                        <Grid item md={6} xs={10}>
                            <Box display="flex" flexDirection="column">
                                <MapContainer zoomlvl={zoomlvl} pinged={pinged} latlong={latlong} handleZoom = {handleZoom} handleMap={handleMap}/>
                                <Box height={30} />
                                <PhotoPicker imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}/>
                                <Box height={30} />
                                <Button className={classes.btn} type="submit">Submit</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}

export default NewForm;