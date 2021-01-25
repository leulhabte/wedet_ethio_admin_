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
                                value="AUTO_REPAIR"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="AUTO_REPAIR"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="TIRES"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="TIRES"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BODY_SHOPS"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="BODY_SHOPS"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CAR_WASH"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="CAR_WASH"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CAR_RENTAL"
                                checked={stateB.checkboxB1}
                                onChange={handleChangeB}
                                name="checkboxB1"
                            />
                        }
                        label="CAR_RENTAL"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="WHEEL_AND_RIM_REPAIR,"
                                checked={stateB.checkboxB2}
                                onChange={handleChangeB}
                                name="checkboxB2"
                            />
                        }
                        label="WHEEL_AND_RIM_REPAIR,"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}
        </Box>
    )
}

export default CheckBoxes;