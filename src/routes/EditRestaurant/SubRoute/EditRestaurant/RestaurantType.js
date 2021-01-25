import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const Types = ({ stateZ, stateG, handleChangeG, handleChangeZ }) => {
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ROMANTIC"
                                checked={stateG.checkboxG1}
                                onChange={handleChangeG}
                                name="checkboxG1"
                            />
                        }
                        label="ROMANTIC"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="LUXURY"
                                checked={stateG.checkboxG2}
                                onChange={handleChangeG}
                                name="checkboxG2"
                            />
                        }
                        label="LUXURY"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="AFFORDABLE"
                                checked={stateG.checkboxG3}
                                onChange={handleChangeG}
                                name="checkboxG3"
                            />
                        }
                        label="AFFORDABLE"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="FAMILY"
                                checked={stateG.checkboxG4}
                                onChange={handleChangeG}
                                name="checkboxG4"
                            />
                        }
                        label="FAMILY"
                    />
                </FormGroup>
            </Box>

            {/* ------------------------------ */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="OUTDOOR"
                                checked={stateZ.checkboxZ1}
                                onChange={handleChangeZ}
                                name="checkboxZ1"
                            />
                        }
                        label="OUTDOOR"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SPORT"
                                checked={stateZ.checkboxZ2}
                                onChange={handleChangeZ}
                                name="checkboxZ2"
                            />
                        }
                        label="SPORT"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SILENT"
                                checked={stateZ.checkboxZ3}
                                onChange={handleChangeZ}
                                name="checkboxZ3"
                            />
                        }
                        label="SILENT"
                    />
                </FormGroup>
            </Box>
        </Box>
    )

}

export default Types;