import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const CheckBoxes = ({ stateA, stateB, stateC, stateD, handleChangeA, handleChangeB, handleChangeC, handleChangeD}) => {
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="HOTELS"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="HOTELS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="GUEST_HOUSES"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="GUEST_HOUSES"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="REAL_ESTATE"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="REAL_ESTATE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="APARTMENTS"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="APARTMENTS"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="RESORTS"
                                checked={stateB.checkboxB1}
                                onChange={handleChangeB}
                                name="checkboxB1"
                            />
                        }
                        label="RESORTS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BARS"
                                checked={stateB.checkboxB2}
                                onChange={handleChangeB}
                                name="checkboxB2"
                            />
                        }
                        label="BARS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="NIGHTLIFE"
                                checked={stateB.checkboxB3}
                                onChange={handleChangeB}
                                name="checkboxB3"
                            />
                        }
                        label="NIGHTLIFE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ARTS_AND_ENTERTAINMENT"
                                checked={stateB.checkboxB4}
                                onChange={handleChangeB}
                                name="checkboxB4"
                            />
                        }
                        label="ARTS_AND_ENTERTAINMENT"
                    />
                </FormGroup>
            </Box>


            {/* ----------------------------------------------------- */}
        </Box>
    )
}

export default CheckBoxes;