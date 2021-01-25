import React, { useState } from 'react';
import useStyles from './Styling';
import Checkboxes from './CheckBox';
import FormSection from './FormSection';
import MapContainer from './MapContainer';
import { Box, Paper, InputBase, Typography, Checkbox, Button, Grid, FormGroup } from '@material-ui/core';

const NewForm = ({ stateA, stateB, handleChangeA, handleChangeB, name, description, address, phone, about,
    setName, setDescription, setAddress, setPhoneNum, setAboutUs,
    setMon, setTues, setWen, setThu, setFri, setSat, setSun,
    mon, tues, wen, thu, fri, sat, sun,
    zoomlvl, pinged, latlong, handleZoom, handleMap,
    handleMonFriStartHour, handleMonFriStartMin, handleMonFriStartZone,
    handleMonFriEndHour, handleMonFriEndMin, handleMonFriEndZone,
    handleSaturdayStartHour, handleSaturdayStartMin, handleSaturdayStartZone,
    handleSaturdayEndHour, handleSaturdayEndMin, handleSaturdayEndZone,
    handleSundayStartHour, handleSundayStartMin, handleSundayStartZone,
    handleSundayEndHour, handleSundayEndMin, handleSundayEndZone,
    monFriStart, monFriEnd, saturdayStart, saturdayEnd, sundayStart,
    sundayEnd
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
                    <Paper className={classes.namePaper2} style={{ height: '4rem' }}>
                        <InputBase className={classes.inputBase} value={description} multiline rows={3} style={{ height: '4rem' }} onChange={(e) => { setDescription(e.target.value) }} required/>
                    </Paper>
                </Box>

                {/* Categories */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Typography className={classes.titles}>Category</Typography>
                    <Paper className={classes.paperPad}>
                        <Checkboxes
                            stateA={stateA} stateB={stateB}
                            handleChangeA={handleChangeA} handleChangeB={handleChangeB} address={address} phone={phone}
                        />
                    </Paper>
                </Box>

                {/* Section 2 */}
                <Box height={30} />
                <Box width="100%" display="flex" flexDirection="column">
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={10}>
                            <FormSection
                                setDescription={setDescription} address={address} setAddress={setAddress} setPhoneNum={setPhoneNum} setAboutUs={setAboutUs} phone={phone}
                                setMon={setMon} setTues={setTues} setWen={setWen} setThu={setThu} setFri={setFri} setSat={setSat} setSun={setSun}
                                mon={mon} tues={tues} wen={wen} thu={thu} fri={fri} sat={sat} sun={sun} latlong={latlong} 
                                monFriStart={monFriStart} monFriEnd={monFriEnd} saturdayStart={saturdayStart} saturdayEnd={saturdayEnd} sundayStart={sundayStart}
                                sundayEnd={sundayEnd}
                                handleMonFriStartHour={handleMonFriStartHour} handleMonFriStartMin={handleMonFriStartMin} handleMonFriStartZone={handleMonFriStartZone}
                                handleMonFriEndHour={handleMonFriEndHour} handleMonFriEndMin={handleMonFriEndMin} handleMonFriEndZone={handleMonFriEndZone}
                                handleSaturdayStartHour={handleSaturdayStartHour} handleSaturdayStartMin={handleSaturdayStartMin} handleSaturdayStartZone={handleSaturdayStartZone}
                                handleSaturdayEndHour={handleSaturdayEndHour} handleSaturdayEndMin={handleSaturdayEndMin} handleSaturdayEndZone={handleSaturdayEndZone}
                                handleSundayStartHour={handleSundayStartHour} handleSundayStartMin={handleSundayStartMin} handleSundayStartZone={handleSundayStartZone}
                                handleSundayEndHour={handleSundayEndHour} handleSundayEndMin={handleSundayEndMin} handleSundayEndZone={handleSundayEndZone}
                            />
                        </Grid>
                        <Grid item md={6} xs={10}>
                            <Box display="flex" flexDirection="column">
                                <MapContainer zoomlvl={zoomlvl} pinged={pinged} latlong={latlong} handleZoom = {handleZoom} handleMap={handleMap}/>
                                <Box height={30} />
                                {/* <PhotoPicker imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}/> */}
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