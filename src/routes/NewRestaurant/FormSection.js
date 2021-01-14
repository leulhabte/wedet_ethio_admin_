import React from 'react';
import useStyles from './Styling';
import { Box, Paper, InputBase, Typography } from '@material-ui/core';

const FormSection = ({  setAddress, setPhoneNum, phone, setMon, setTues, setWen, setThu, setFri, setSat, setSun,
    mon, tues, wen, thu, fri, sat, sun, latlong, address }) => {
    const classes = useStyles();
    return (
        <Box width="100%" display="flex" flexDirection="column">

            {/* Map coordinate */}
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Map Coordinate</Typography>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box width="35%">
                        <Paper >
                            <InputBase className={classes.inputBase} value={latlong.lat} contentEditable="false"/>
                        </Paper>
                    </Box>
                    <Box width={20} />
                    <Box width="35%">
                        <Paper>
                            <InputBase className={classes.inputBase} value={latlong.lng} contentEditable="false"/>
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
                            <InputBase className={classes.inputBase} value={phone.line1} onChange={(e) => { setPhoneNum({ ...phone, line1: e.target.value }) }} required/>
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
                    <InputBase className={classes.inputBase}  value={address} onChange={(e) => { setAddress(e.target.value) }} required/>
                </Paper>
            </Box>

            {/* Working Houres */}
            <Box height={30} />
            <Box width="100%" display="flex" flexDirection="column">
                <Typography className={classes.titles}>Working Hours</Typography>
                <Box height={30} />
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Mon</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={mon.start} onChange={(e) => setMon({ ...mon, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={mon.end} onChange={(e) => setMon({ ...mon, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Tue</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={tues.start} onChange={(e) => setTues({ ...tues, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={tues.end} onChange={(e) => setTues({ ...tues, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Wen</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={wen.start} onChange={(e) => setWen({ ...wen, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={wen.end} onChange={(e) => setWen({ ...wen, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Thu</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={thu.start} onChange={(e) => setThu({ ...thu, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={thu.end} onChange={(e) => setThu({ ...thu, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Fri</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={fri.start} onChange={(e) => setFri({ ...fri, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={fri.end} onChange={(e) => setFri({ ...fri, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Sat</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={sat.start} onChange={(e) => setSat({ ...sat, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={sat.end} onChange={(e) => setSat({ ...sat, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
                {/*  */}
                <Box display="flex" flexDirection="row" width="100%">
                    <Box><Typography >Sun</Typography></Box>
                    <Box width={20} />
                    <Box display="flex" flexDirection="row" flexGrow={1}>
                        <Box width="35%">
                            <Paper >
                                <InputBase className={classes.inputBase} value={sun.start} onChange={(e) => setSun({ ...sun, start: e.target.value })} placeholder="Start"/>
                            </Paper>
                        </Box>
                        <Box width={20} />
                        <Box width="35%">
                            <Paper>
                                <InputBase className={classes.inputBase} value={sun.end} onChange={(e) => setSun({ ...sun, end: e.target.value })} placeholder="End"/>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box height={30} />
            </Box>

        </Box>
    )
}

export default FormSection;