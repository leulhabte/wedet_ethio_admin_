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
                                value="BURGER"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="BURGER"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="PIZZA"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="PIZZA"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SEA_FOOD"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="SEA_FOOD"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BUTCHERY"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="BUTCHERY"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CHICKEN"
                                checked={stateB.checkboxB1}
                                onChange={handleChangeB}
                                name="checkboxB1"
                            />
                        }
                        label="CHICKEN"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CAFE"
                                checked={stateB.checkboxB2}
                                onChange={handleChangeB}
                                name="checkboxB2"
                            />
                        }
                        label="CAFE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ICE_CREAM"
                                checked={stateB.checkboxB3}
                                onChange={handleChangeB}
                                name="checkboxB3"
                            />
                        }
                        label="ICE_CREAM"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BAKERIES"
                                checked={stateB.checkboxB4}
                                onChange={handleChangeB}
                                name="checkboxB4"
                            />
                        }
                        label="BAKERIES"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SMOOTHIE"
                                checked={stateC.checkboxC1}
                                onChange={handleChangeC}
                                name="checkboxC1"
                            />
                        }
                        label="SMOOTHIE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="NOODLES"
                                checked={stateC.checkboxC2}
                                onChange={handleChangeC}
                                name="checkboxC2"
                            />
                        }
                        label="NOODLES"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CULTURAL"
                                checked={stateC.checkboxC3}
                                onChange={handleChangeC}
                                name="checkboxC3"
                            />
                        }
                        label="CULTURAL"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ARAB"
                                checked={stateC.checkboxC4}
                                onChange={handleChangeC}
                                name="checkboxC4"
                            />
                        }
                        label="ARAB"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CHINESE"
                                checked={stateD.checkboxD1}
                                onChange={handleChangeD}
                                name="checkboxD1"
                            />
                        }
                        label="CHINESE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="INDIAN"
                                checked={stateD.checkboxD2}
                                onChange={handleChangeD}
                                name="checkboxD2"
                            />
                        }
                        label="INDIAN"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ITALIAN"
                                checked={stateD.checkboxD3}
                                onChange={handleChangeD}
                                name="checkboxD3"
                            />
                        }
                        label="ITALIAN"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="JAPANESE"
                                checked={stateD.checkboxD4}
                                onChange={handleChangeD}
                                name="checkboxD4"
                            />
                        }
                        label="JAPANESE"
                    />
                </FormGroup>
            </Box>
        </Box>
    )
}

export default CheckBoxes;