import React from 'react';
import useStyles from './Styling';
import { Box, Paper, InputBase, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const FormSection = ({ setAddress, setPhoneNum, phone, latlong, address,
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
        <Box width="100%" display="flex" flexDirection="column">

            {/* Map coordinate */}
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Map Coordinate</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} value={latlong.lat} />
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} value={latlong.lng} />
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* Phone */}
            <Box height={30} />
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Phone Number</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} value={phone.line1} onChange={(e) => { setPhoneNum({ ...phone, line1: e.target.value }) }} required />
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} value={phone.line2} onChange={(e) => { setPhoneNum({ ...phone, line2: e.target.value }) }} />
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* Address */}
            <Box height={30} />
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Address</Typography>
                <Paper>
                    <InputBase className={classes.inputBase} value={address} onChange={(e) => { setAddress(e.target.value) }} required />
                </Paper>
            </Box>

            {/* Working Houres */}
            <Box height={30} />
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Working Hours</Typography>
                <Box height={30} />

                {/* Monday - Friday */}

                <Typography className={classes.titles}>Monday - Friday</Typography>
                <Box height={30} />
                <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >Start</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={monFriStart.hour}
                                onChange={handleMonFriStartHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={monFriStart.min}
                                onChange={handleMonFriStartMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={monFriStart.zone}
                                onChange={handleMonFriStartZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box height={30} />

                    {/* --------- END ------------ */}
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >End</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={monFriEnd.hour}
                                onChange={handleMonFriEndHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={monFriEnd.min}
                                onChange={handleMonFriEndMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={monFriEnd.zone}
                                onChange={handleMonFriEndZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                </Box>

                <Box height={30} />

                {/* Saturday */}

                <Typography className={classes.titles}>Saturday</Typography>
                <Box height={30} />
                <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >Start</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={saturdayStart.hour}
                                onChange={handleSaturdayStartHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={saturdayStart.min}
                                onChange={handleSaturdayStartMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={saturdayStart.zone}
                                onChange={handleSaturdayStartZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box height={30} />

                    {/* --------- END ------------ */}
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >End</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={saturdayEnd.hour}
                                onChange={handleSaturdayEndHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={saturdayEnd.min}
                                onChange={handleSaturdayEndMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={saturdayEnd.zone}
                                onChange={handleSaturdayEndZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                </Box>

                <Box height={30} />

                {/* Sunday */}

                <Typography className={classes.titles}>Sunday</Typography>
                <Box height={30} />
                <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >Start</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={sundayStart.hour}
                                onChange={handleSundayStartHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={sundayStart.min}
                                onChange={handleSundayStartMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={sundayStart.zone}
                                onChange={handleSundayStartZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box height={30} />

                    {/* --------- END ------------ */}
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box><Typography >End</Typography></Box>
                        <Box width={20} />

                        {/* Hour */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Hour</InputLabel>
                            <Select
                                value={sundayEnd.hour}
                                onChange={handleSundayEndHour}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Minute */}
                        <FormControl style={{ width: '20%' }}>
                            <InputLabel>Min</InputLabel>
                            <Select
                                value={sundayEnd.min}
                                onChange={handleSundayEndMin}
                            >
                                <MenuItem value={0}>00</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Time Zone */}
                        <FormControl style={{ width: '25%' }}>
                            <InputLabel>AM/PM</InputLabel>
                            <Select
                                value={sundayEnd.zone}
                                onChange={handleSundayEndZone}
                            >
                                <MenuItem value={"AM"}>AM</MenuItem>
                                <MenuItem value={"PM"}>PM</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                </Box>
                {/* ---------------------------- */}

                <Box height={30} />
            </Box>
        </Box>
    )
}

export default FormSection;