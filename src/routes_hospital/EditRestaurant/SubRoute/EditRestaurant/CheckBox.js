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
                                value="PSYCHIATRISTS"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="PSYCHIATRISTS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="NEUROLOGISTS"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="NEUROLOGISTS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ALLERGISTS"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="ALLERGISTS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="HOLISTIC"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="HOLISTIC"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="MEDICAL_CENTERS"
                                checked={stateB.checkboxB1}
                                onChange={handleChangeB}
                                name="checkboxB1"
                            />
                        }
                        label="MEDICAL_CENTERS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="LABORATORY_TESTING"
                                checked={stateB.checkboxB2}
                                onChange={handleChangeB}
                                name="checkboxB2"
                            />
                        }
                        label="LABORATORY_TESTING"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SKIN_CARE"
                                checked={stateB.checkboxB3}
                                onChange={handleChangeB}
                                name="checkboxB3"
                            />
                        }
                        label="SKIN_CARE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ONCOLOGISTS"
                                checked={stateB.checkboxB4}
                                onChange={handleChangeB}
                                name="checkboxB4"
                            />
                        }
                        label="ONCOLOGISTS"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="URGENT_CARE"
                                checked={stateC.checkboxC1}
                                onChange={handleChangeC}
                                name="checkboxC1"
                            />
                        }
                        label="URGENT_CARE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CARDIOLOGISTS"
                                checked={stateC.checkboxC2}
                                onChange={handleChangeC}
                                name="checkboxC2"
                            />
                        }
                        label="CARDIOLOGISTS"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}
        </Box>
    )
}

export default CheckBoxes;