import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const Facualities = ({ stateE, stateF, handleChangeE, handleChangeF }) => {
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="WI_FI"
                                checked={stateE.checkboxE1}
                                onChange={handleChangeE}
                                name="checkboxE1"
                            />
                        }
                        label="WI_FI"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="TAKES_RESERVATION"
                                checked={stateE.checkboxE2}
                                onChange={handleChangeE}
                                name="checkboxE2"
                            />
                        }
                        label="TAKES_RESERVATION"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="PARKING"
                                checked={stateE.checkboxE3}
                                onChange={handleChangeE}
                                name="checkboxE3"
                            />
                        }
                        label="PARKING"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="DELIVERY"
                                checked={stateE.checkboxE4}
                                onChange={handleChangeE}
                                name="checkboxE4"
                            />
                        }
                        label="DELIVERY"
                    />
                </FormGroup>
            </Box>

            {/* ------------------------------ */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="GOOD_FOR_KIDS"
                                checked={stateF.checkboxF1}
                                onChange={handleChangeF}
                                name="checkboxF1"
                            />
                        }
                        label="GOOD_FOR_KIDS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="TAKE_OUT"
                                checked={stateF.checkboxF2}
                                onChange={handleChangeF}
                                name="checkboxF2"
                            />
                        }
                        label="TAKE_OUT"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="OUTDOOR_SEATING"
                                checked={stateF.checkboxF3}
                                onChange={handleChangeF}
                                name="checkboxF3"
                            />
                        }
                        label="OUTDOOR_SEATING"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ACCEPTS_CREDIT_CARD"
                                checked={stateF.checkboxF4}
                                onChange={handleChangeF}
                                name="checkboxF4"
                            />
                        }
                        label="ACCEPTS_CREDIT_CARD"
                    />
                </FormGroup>
            </Box>
        </Box>
    )

}

export default Facualities;